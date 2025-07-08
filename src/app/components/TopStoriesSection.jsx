'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaAngleRight, FaCalendar, FaCalendarWeek } from 'react-icons/fa';
import { newsData } from './NewsData';

const TopStoriesSection = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        const checkScreen = () => setIsMobile(window.innerWidth < 640);
        checkScreen();
        window.addEventListener('resize', checkScreen);
        return () => window.removeEventListener('resize', checkScreen);
    }, []);

    // ✅ Use all news data
    const mainNews = newsData[0]; // First item as featured
    const otherNews = newsData.slice(1); // Rest for grid

    const itemsPerPage = 8;
    const totalPages = Math.ceil(otherNews.length / itemsPerPage);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = otherNews.slice(indexOfFirstItem, indexOfLastItem);

    return (
        <section className="px-5 lg:px-24 py-10 lg:py-20">
            <div className="container mx-auto">
                {/* Section Header */}
                <div className="mb-8 border-l-4 border-red-500 pl-4">
                    <div className="text-2xl font-semibold text-red-600 mb-2">Top Stories</div>
                </div>

                {/* Content */}
                <div className="block lg:flex gap-5">
                    {/* ✅ Featured News */}
                    {mainNews && (
                        <div className="w-full lg:w-5/12 mb-6 lg:mb-0">
                            <div className="relative group overflow-hidden">
                                <Link href={`/news/${mainNews.slug}`}>
                                    <Image
                                        src={mainNews.images}
                                        alt={mainNews.title}
                                        width={400}
                                        height={400}
                                        className="w-full h-[450px] object-cover transition-transform group-hover:scale-105"
                                    />
                                </Link>
                                <div className="absolute bottom-0 left-0 p-4 bg-black bg-opacity-50 text-white w-full">
                                    <div className="text-xs mb-2 text-green-400">{mainNews.category}</div>
                                    <ul className="text-xs mb-2 space-x-2 flex">
                                        <li><span>by</span> <span className="underline">{mainNews.author}</span></li>
                                        <li className="flex gap-2"><FaCalendarWeek /> {mainNews.date}</li>
                                    </ul>
                                    <h2 className="text-lg font-semibold">
                                        <Link href={`/news/${mainNews.slug}`}>{mainNews.title}</Link>
                                    </h2>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* ✅ Grid Items */}
                    <div className="w-full lg:w-7/12 grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-4">
                        {currentItems.map((item) => (
                            <div key={item.id} className="flex bg-white h-max shadow-md p-2 gap-4">
                                <div className='w-[30%]'>

                                    <Link href={`/news/${item.slug}`}>
                                        <Image
                                            src={item.images}
                                            alt={item.title}
                                            width={120}
                                            height={80}
                                            className="object-fill w-28 h-20"
                                        />
                                    </Link>

                                </div>
                                <div className='w-[70%]'>
                                    <ul className="text-xs mb-1">
                                        <li className='flex gap-2 items-center'><FaCalendar /> {item.date}</li>
                                    </ul>
                                    <h3 className="font-semibold text-base">
                                        <Link href={`/news/${item.slug}`}>
                                            {item.title.split(" ").slice(0, 6).join(" ")}
                                            {item.title.split(" ").length > 8 && '...'}
                                        </Link>
                                    </h3>

                                </div>
                            </div>
                        ))}

                        {/* ✅ Pagination (Mobile Only) */}
                        {isMobile && totalPages > 1 && (
                            <div className="col-span-full mt-6 flex justify-center space-x-2">
                                {Array.from({ length: totalPages }, (_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentPage(index + 1)}
                                        className={`px-3 py-1 border ${currentPage === index + 1 ? 'bg-black text-white' : 'bg-white text-black'}`}
                                    >
                                        {index + 1}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TopStoriesSection;
