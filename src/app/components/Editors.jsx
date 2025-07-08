'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { useEffect, useRef, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { newsData } from './NewsData';
import { useSelector } from 'react-redux';
import { imageurl } from './reduxstore/utils';

export default function EditorPicksCarousel() {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const topNewsState= useSelector(state=>state.topnews)
    const [allArtical,setAllArticles]=useState()
  

 useEffect(() => {
    if (!topNewsState.isLoading && topNewsState.info?.success) {
      setAllArticles(topNewsState.info.news || []);
    }
  }, [topNewsState]);

const setDate=(ndate)=>{
  const date = new Date(ndate);

const options = { year: 'numeric', month: 'long', day: 'numeric' };
const formattedDate = date.toLocaleDateString('en-US', options);
return formattedDate
}
    return (
        <section className="bg-gray-100 py-10 lg:py-20 px-5 lg:px-24">
            <div className="container mx-auto">
                <div className="topic-border color-scampi w-full red relative mb-8">
                    <div className="topic-box-lg color-scampi relative red">Editor Picks</div>

                    {/* Navigation buttons */}
                    <div className="absolute right-0 top-1/2 flex gap-2 transform -translate-y-1/2 z-10">
                        <button
                            ref={prevRef}
                            className="bg-[#e53935] text-white p-2 rounded-full hover:bg-[#605ca8]"
                        >
                            <FaChevronLeft />
                        </button>
                        <button
                            ref={nextRef}
                            className="bg-[#e53935] text-white p-2 rounded-full hover:bg-[#605ca8]"
                        >
                            <FaChevronRight />
                        </button>
                    </div>
                </div>

                <Swiper
                    modules={[Autoplay, Navigation]}
                    onBeforeInit={(swiper) => {
                        swiper.params.navigation.prevEl = prevRef.current;
                        swiper.params.navigation.nextEl = nextRef.current;
                    }}
                    navigation={{
                        prevEl: prevRef.current,
                        nextEl: nextRef.current,
                    }}
                    autoplay={{ delay: 8000 }}
                    spaceBetween={20}
                    breakpoints={{
                        320: { slidesPerView: 1 },
                        640: { slidesPerView: 2 },
                        768: { slidesPerView: 3 },
                        1024: { slidesPerView: 4 },
                    }}
                >
                    {allArtical?.map((item) => (
                        <SwiperSlide key={item.id}>
                            <div className="bg-white h-[330px] overflow-hidden">
                                <div className="relative group">
                                    <img
                                        src={`${imageurl}/${item?.image}`}
                                        alt={item?.title}
                                        className="w-full h-48 object-cover"
                                    />
                                </div>
                                <div className="p-4">
                                    <div className="text-sm flex items-center mb-2">
                                        <i className="fa fa-calendar mr-1" aria-hidden="true"></i>
                                       {setDate(item?.created_at)}
                                    </div>
                                    <h3 className="text-lg font-semibold">
                                        <a href={`/news/${item?.slug}`} className="hover:text-[#605ca8]">
                                            {item?.title}
                                        </a>
                                    </h3>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
