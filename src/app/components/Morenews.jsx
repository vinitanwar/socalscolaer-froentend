'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaAngleRight, FaCalendar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import { newsData } from './NewsData';

const categories = ['All', 'Books', 'Environment', 'Health', 'Bharat (National)', 'History'];
const ITEMS_PER_PAGE = 3; // Number of news items per page

// Get the latest 5 news items sorted by date descending
const latestReviews = [...newsData]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 3);


export default function MoreNewsSection() {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [loading, setLoading] = useState(true);
    const [filteredNews, setFilteredNews] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(filteredNews.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const currentNews = filteredNews.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    useEffect(() => {
        setLoading(true);
        setCurrentPage(1); // Reset to page 1 when category changes
        const timeout = setTimeout(() => {
            const filtered =
                selectedCategory !== "All"
                    ? newsData.filter((item) => item.category === selectedCategory)
                    : newsData;

            setFilteredNews(filtered);
            setLoading(false);
        }, 500);

        return () => clearTimeout(timeout);
    }, [selectedCategory]);

    const getPageNumbersToShow = () => {
        const maxPagesToShow = 3;
        let startPage = Math.max(currentPage - Math.floor(maxPagesToShow / 2), 1);
        let endPage = startPage + maxPagesToShow - 1;

        if (endPage > totalPages) {
            endPage = totalPages;
            startPage = Math.max(endPage - maxPagesToShow + 1, 1);
        }

        return Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);
    };

    const pageNumbersToShow = getPageNumbersToShow();



    const renderSkeleton = () =>
        Array(ITEMS_PER_PAGE).fill(0).map((_, i) => (
            <div key={i} className="flex gap-4 animate-pulse">
                <div className="w-80 h-60 bg-gray-300 rounded"></div>
                <div className="flex flex-col flex-1 space-y-3">
                    <div className="w-1/2 h-4 bg-gray-300 rounded"></div>
                    <div className="w-3/4 h-6 bg-gray-300 rounded"></div>
                    <div className="w-full h-4 bg-gray-200 rounded"></div>
                    <div className="w-5/6 h-4 bg-gray-200 rounded"></div>
                </div>
            </div>
        ));

    return (
        <section className="py-10 lg:py-20 px-5 lg:px-24">
            <div className="container mx-auto">
                <div className="lg:flex gap-8">
                    {/* Left Content */}
                    <div className="lg:w-2/3 w-full">
                        <div className="topic-border color-scampi w-full relative mb-8 flex justify-between">
                            <div className="topic-box-lg color-scampi relative">More News</div>

                            <div className="flex overflow-auto gap-4 scrollbar-hide pl-10 lg:pl-0">
                                {categories.map((category) => (
                                    <button
                                        key={category}
                                        onClick={() => setSelectedCategory(category)}
                                        className={`py-1 text-lg text-nowrap font-medium transition ${selectedCategory === category ? 'text-[#605ca8]' : ''}`}
                                    >
                                        {category}
                                    </button>
                                ))}
                                <Link href="/news" className="text-[#605ca8] text-lg flex items-center gap-1 hover:underline">
                                    More <FaAngleRight />
                                </Link>
                            </div>
                        </div>

                        {/* News Cards */}
                        <div className="space-y-8">
                            {loading ? (
                                renderSkeleton()
                            ) : currentNews.length > 0 ? (
                                currentNews.map((item) => (
                                    <div
                                        key={item.id}
                                        className="bg-white h-[210px] shadow-md overflow-hidden flex flex-col sm:flex-row"
                                    >
                                        <div className="sm:w-2/5 relative">
                                            <Link href={`/news/${item.slug || '#'}`} className="block group">
                                                <Image
                                                    src={item.images || "/images/unavailable.webp"}
                                                    alt={item.title}
                                                    width={400}
                                                    height={450}
                                                    className="w-full h-[210px] object-fill group-hover:opacity-80 transition"
                                                />
                                                <div className="absolute top-2 left-2 bg-black text-white px-3 py-1 text-xs font-semibold rounded">
                                                    {item.category}
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="sm:w-3/5 p-5">
                                            <div className="text-sm  mb-2 flex justify-between items-center">
                                                <Link href="/author-profile/dr-rohil-oberoi">  <span>by <span className="font-medium text-black">{item.author}</span></span></Link>
                                                <span className="flex items-center">
                                                    <FaCalendar className="mr-1" />
                                                    {item.date}
                                                </span>
                                            </div>
                                            <h3 className="text-lg font-semibold mb-2">
                                                <Link href={`/news/${item.slug || '#'}`} className="hover:text-blue-600">
                                                    {item.title}
                                                </Link>
                                            </h3>
                                            <p className="text-black text-sm">
                                                {item.content[0].slice(0, 150)}...
                                            </p>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="text-center py-10  text-lg font-semibold">
                                    No news available.
                                </div>
                            )}


                            {/* Pagination */}
                            {totalPages > 1 && (
                                <div className="flex justify-center gap-2 mt-6 flex-wrap">
                                    <button
                                        onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                                        disabled={currentPage === 1}
                                        className="px-3 py-1 bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
                                    >
                                        <FaChevronLeft />
                                    </button>

                                    {pageNumbersToShow.map((page) => (
                                        <button
                                            key={page}
                                            onClick={() => setCurrentPage(page)}
                                            className={`px-3 py-1 ${currentPage === page
                                                ? 'bg-black text-white'
                                                : 'bg-gray-100 hover:bg-gray-200'
                                                }`}
                                        >
                                            {page}
                                        </button>
                                    ))}

                                    <button
                                        onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
                                        disabled={currentPage === totalPages}
                                        className="px-3 py-1 bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
                                    >
                                        <FaChevronRight />
                                    </button>
                                </div>
                            )}

                        </div>
                    </div>

                    {/* Right Sidebar (unchanged) */}
                    <div className="lg:w-1/3 w-full mt-10 lg:mt-0">
                        {/* Latest Reviews */}
                        <div className="bg-white shadow-md p-6">
                            <h2 className="text-xl font-bold  mb-5 border-b pb-2">
                                Latest Reviews
                            </h2>
                            <div className="space-y-5">
                                {latestReviews.map((item) => (
                                    <div key={item.id} className="flex gap-4">
                                        <Link href={`/news/${item.slug || '#'}`} className="shrink-0">

                                            <Image
                                                src={item.images || "/images/unavailable.webp"}
                                                alt={item.title}
                                                width={100}
                                                height={70}
                                                className="object-fill w-24 h-20"
                                            />
                                        </Link>
                                        <div>
                                            <div className="text-xs  mb-1 flex items-center gap-1">
                                                <FaCalendar className="" />
                                                {item.date}
                                            </div>
                                            <h3 className="text-base font-semibold hover:text-blue-600 transition">
                                                <Link href={`/news/${item.slug || '#'}`}>
                                                    {item.title.split(' ').slice(0, 8).join(' ')}{item.title.split(' ').length > 8 ? '...' : ''}
                                                </Link>
                                            </h3>

                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Newsletter */}
                        <div className="bg-white shadow-md p-6 mt-4">
                            <h2 className="text-xl font-bold  mb-5 border-b pb-2">Newsletter</h2>
                            <div className="bg-black text-white p-8">
                                <h3 className="text-2xl text-center font-light mb-4">
                                    Subscribe to our mailing list to get the new updates!
                                </h3>
                                <Image
                                    src="/images/newsletter.webp"
                                    alt="newsletter"
                                    width={70}
                                    height={400}
                                    className="mb-4 mx-auto"
                                />
                                <p className="text-lg text-center mb-4">Subscribe to stay updated</p>
                                <div className="flex bg-white rounded-lg overflow-hidden border border-white">
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        className="flex-grow px-4 py-2 text-black w-full outline-none"
                                    />
                                    <button className="bg-black px-4 py-2">
                                        <FaAngleRight className="text-white" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
