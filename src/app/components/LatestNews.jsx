"use client"


import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getlatestnews } from './reduxstore/slices/getLetestNews'
import { imageurl } from './reduxstore/utils'
import Link from 'next/link'
import { FaAngleRight, FaCalendar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Image from 'next/image'

const LatestNews = ({slicenumber=5}) => {




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
      <div className="space-y-5">
                          {allArtical?.slice(0,slicenumber).map((item) => (
                                    <div key={item.id} className="flex gap-4">
                                        <Link href={`/news/${item.slug || '#'}`} className="shrink-0">

                                            <Image
                                                src={`${imageurl}/${item?.image}`}
                                                alt={item?.title}
                                                width={100}
                                                height={70}
                                                className="object-fill w-24 h-20"
                                            />
                                        </Link>
                                        <div>
                                            <div className="text-xs  mb-1 flex items-center gap-1">
                                                <FaCalendar className="" />
                                              {setDate(item?.created_at)}
                                            </div>
                                            <h3 className="text-base font-semibold hover:text-blue-600 transition">
                                                <Link href={`/news/${item?.slug || '#'}`}>
                                                    {item?.title.split(' ').slice(0, 8).join(' ')}{item?.title.split(' ').length > 8 ? '...' : ''}
                                                </Link>
                                            </h3>

                                        </div>
                                    </div>
                                ))} 
                            </div>
  )
}

 export default LatestNews