'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaAngleRight, FaCalendar } from 'react-icons/fa';


import LatestNews from './LatestNews';
import axios from 'axios';
import { baseurl, imageurl } from './reduxstore/utils';
import { useRouter } from 'next/navigation';



const categories = ['All', 'Books', 'Environment', 'Health', 'Bharat', 'History'];
const ITEMS_PER_PAGE = 3; 




export default function MoreNewsSection() {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const router= useRouter()
  

    const [news, setNews] = useState([]);
  const [meta, setMeta] = useState(null);
 
  const [loading, setLoading] = useState(false);
const [pagenum,setPageNum]=useState(1)
  
const fetchdata=async(catag)=>{
    setLoading(true)
    const  response= await axios.get(`${baseurl}/getnewspaginated?data=${catag}&page=${pagenum}`)
    const data= response.data;
     setNews(data.news.data);     
    setMeta(data.news);         
    setLoading(false);
}

useEffect(()=>{
fetchdata(selectedCategory)
},[])
useEffect(()=>{
fetchdata(selectedCategory)
},[pagenum,selectedCategory])



    const handelmore=()=>{
         localStorage.setItem("newscat", "All"),
router.push("/news")
    }
 

 


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
        

const handlePageClick = (url) => {
    if (!url) return;
    const urlObj = new URL(url);
    const pageParam = urlObj.searchParams.get("page");
    setPageNum(pageParam)
  };
const setDate=(ndate)=>{
  const date = new Date(ndate);

const options = { year: 'numeric', month: 'long', day: 'numeric' };
const formattedDate = date.toLocaleDateString('en-US', options);
return formattedDate
}



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
                                <span onClick={handelmore}  className="cursor-pointer text-[#605ca8] text-lg flex items-center gap-1 hover:underline">
                                    More <FaAngleRight />
                                </span>
                            </div>
                        </div>

                        {/* News Cards */}
                        <div className="space-y-8">
                            {loading ? (
                                renderSkeleton()
                            ) : news?.length > 0 ? (
                                news?.map((item) => (
                                    <div
                                        key={item.id}
                                        className="bg-white h-[210px] shadow-md overflow-hidden flex flex-col sm:flex-row"
                                    >
                                        <div className="sm:w-2/5 relative">
                                            <Link href={`/news/${item.slug || '#'}`} className="block group">
                                                <Image
                                                    src={ `${imageurl}/${item.image}` || "/images/unavailable.webp"}
                                                    alt={item?.title}
                                                width={400}
       
       
                                                    height={450}
                                                    className="w-full h-[210px] object-fill group-hover:opacity-80 transition"
                                                />                                  
                                                <div className="absolute top-2 left-2 bg-black text-white px-3 py-1 text-xs font-semibold rounded">
                                                    {item?.news_type}
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="sm:w-3/5 p-5">
                                            <div className="text-sm  mb-2 flex justify-between items-center">
                                                {item?.editor=="0"?"":
                                                <span >  <span>by <span className="font-medium text-black">{item?.editor}</span></span></span>
                                                }
                                                
                                                <span className="flex items-center">
                                                    <FaCalendar className="mr-1" />
                                                    {setDate(item?.created_at)} 
                                                </span>
                                            </div>
                                            <h3 className="text-lg font-semibold mb-2">
                                                <Link href={`/news/${item.slug || '#'}`} className="hover:text-blue-600">
                                                    {item?.title}
                                                </Link>
                                            </h3>
                                            <p className="text-black text-sm" dangerouslySetInnerHTML={{__html:`${item?.des[0].description.slice(0, 150)}...`}}>
                                                
                                            </p>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="text-center py-10  text-lg font-semibold">
                                    No news available.
                                </div>
                            )}


                           
                          

                                
                                   


                            {meta && (
            <div className="flex justify-center mt-6 space-x-2">
              {meta.links.map((link, idx) => (
                <button
                  key={idx}
                  onClick={() => handlePageClick(link.url)}
                  disabled={!link.url}
                  dangerouslySetInnerHTML={{ __html: link.label }}
                  className={`px-3 py-1 border rounded ${
                    link.active
                      ? 'bg-black text-white'
                      : "bg-gray-100 hover:bg-gray-200"
                  } ${!link.url ? "opacity-50 cursor-not-allowed" : ""}`}
                />
              ))}
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
                           <LatestNews  slicenumber={3}/>
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
