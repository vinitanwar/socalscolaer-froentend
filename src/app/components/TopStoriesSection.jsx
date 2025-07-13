'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {  FaCalendar, FaCalendarWeek } from 'react-icons/fa';
import { GrView } from "react-icons/gr";

import { newsData } from './NewsData';
import axios from 'axios';
import { baseurl, imageurl } from './reduxstore/utils';

const TopStoriesSection = () => {
    const [loader,setLoader]=useState(false)
    const [isMobile, setIsMobile] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
     const [topNews,setTopNews]=useState()
     const [alltopNews,setAllTopNews]=useState()
 
    const fetchdata=async()=>{
        setLoader(true)
    const response= await axios.get(`${baseurl}/gettopviews`)
    const data= await response.data;
    if(data.success){

setTopNews(data?.news[0])
setAllTopNews(data?.news?.slice(1))

    }
            setLoader(false)

    

}



  useEffect(() => {
    fetchdata()
        const checkScreen = () => setIsMobile(window.innerWidth < 640);
        checkScreen();
        window.addEventListener('resize', checkScreen);
        return () => window.removeEventListener('resize', checkScreen);
    }, []);
  
    const mainNews = newsData[0]; 
    const otherNews = newsData.slice(1); 

    const itemsPerPage = 8;
    const totalPages = Math.ceil(otherNews.length / itemsPerPage);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = otherNews.slice(indexOfFirstItem, indexOfLastItem);

const setDate=(ndate)=>{
  const date = new Date(ndate);

const options = { year: 'numeric', month: 'long', day: 'numeric' };
const formattedDate = date.toLocaleDateString('en-US', options);
return formattedDate
}





    return (<>
    { !loader &&
        <section className="px-5 lg:px-24 py-10 lg:py-20">
            <div className="container mx-auto">
                {/* Section Header */}
                <div className="mb-8 border-l-4 border-red-500 pl-4">
                    <div className="text-2xl font-semibold text-red-600 mb-2">Top Stories</div>
                </div>

                {/* Content */}
                <div className="block lg:flex gap-5">
                    {/* ✅ Featured News */}
                    {topNews && (
                        <div className="w-full lg:w-5/12 mb-6 lg:mb-0">
                            <div className="relative group overflow-hidden">
                                <Link href={`/news/${topNews?.slug}`}>
                                    <Image
                                        src={`${imageurl}/${topNews.image}`}
                                        alt={topNews?.title}
                                        width={400}
                                        height={400}
                                        className="w-full h-[450px] object-cover transition-transform group-hover:scale-105"
                                    />
                                </Link>
                                <div className="absolute bottom-0 left-0 p-4 bg-black bg-opacity-50 text-white w-full">
                                    <div className='flex gap-2 items-center mb-2 text-xs' style={{color:topNews?.color|| "green"}}>
                                    <div className="  text-green-400" style={{color:topNews?.color|| "green"}}>{topNews?.news_type}</div>
                                   
                                    </div>
                                    <ul className="text-xs mb-2 space-x-2 flex">
                                        <li><span>by</span> <span className="underline">{topNews?.editor=="0"?"":topNews?.editor}</span></li>
                                        <li className="flex gap-2"><FaCalendarWeek /> {setDate(topNews?.updated_at)}</li>
                                    </ul>
                                    <h2 className="text-lg font-semibold">
                                        <Link href={`/news/${topNews?.slug}`}>{topNews?.title}</Link>
                                    </h2>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* ✅ Grid Items */}
                    <div className="w-full lg:w-7/12 grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-4">
                        {alltopNews?.map((item) => (
                            <div key={item.id} className="flex bg-white h-max shadow-md p-2 gap-4">
                                <div className='w-[30%]'>

                                    <Link href={`/news/${item?.slug}`}>
                                        <Image
                                            src={`${imageurl}/${item.image}`}
                                            alt={item?.title}
                                            width={120}
                                            height={80}
                                            className="object-fill w-28 h-20"
                                        />
                                    </Link>

                                </div>
                                <div className='w-[70%]'>
                                    <ul className="text-xs mb-1">
                                        <li className='flex gap-2 items-center'><FaCalendar /> {setDate(item.updated_at)} </li>
                                    </ul>
                                    <h3 className="font-semibold text-base">
                                        <Link href={`/news/${item?.slug}`}>
                                            {item?.title.split(" ").slice(0, 6).join(" ")}
                                            {item?.title.split(" ").length > 8 && '...'}
                                        </Link>
                                    </h3>

                                </div>
                            </div>
                        ))}

                       
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
}
        </>
    );
};

export default TopStoriesSection;
