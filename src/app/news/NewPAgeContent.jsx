"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Banner from "../components/Banner";
import LeftContent from "../components/LeftContent";
import { FaCalendar } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { imageurl } from "../components/reduxstore/utils";
import { getNews } from "../components/reduxstore/slices/getNewsSlices";

export default function NewPage() {
 
    const [selectedCategory, setSelectedCategory] = useState("All");
 const categoriestate = useSelector(state=>state.newscat)
    const newsstate = useSelector(state=>state.news)
     const dispatch=useDispatch()
     const [categorie,setCategorie]=useState()

    const [loading, setLoading] = useState(true);
   
  const [newfilterdata,setnewfilterData]=useState()
 

    useEffect(() => {
         
        const data = localStorage.getItem("newscat") || "All"
        setSelectedCategory(data);
            
dispatch(getNews(data))

    }, [])


    useEffect(() => {
   dispatch(getNews(selectedCategory))
           }, [selectedCategory]);


  useEffect(()=>{
if(categoriestate.isLoading){
setLoading(true)
}
else{
setCategorie(categoriestate?.info?.categories)
setLoading(false)

}


    },[categoriestate])
  

    useEffect(()=>{
        if(newsstate.isLoading){
setLoading(true)

        }else{
setnewfilterData(newsstate?.info?.news)
setLoading(false)

        }
    },[newsstate])
const setDate=(ndate)=>{
  const date = new Date(ndate);

const options = { year: 'numeric', month: 'long', day: 'numeric' };
const formattedDate = date.toLocaleDateString('en-US', options);
return formattedDate
}

    const renderSkeleton = () =>
        Array(6).fill(0).map((_, i) => (
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
        <>
            <Banner title="Latest News" />
            <div className="container mx-auto py-10 px-5 lg:px-24">
                <div className="flex  overflow-auto gap-2 justify-start scrollbar-hide mb-8">
                    <button
                            key={"All"}
                            onClick={() => { localStorage.setItem("newscat", "All"), setSelectedCategory("All") }}
                            className={`px-4 py-1 border rounded-full text-sm text-nowrap hover:bg-black hover:text-white transition ${selectedCategory === "All"
                                ? "bg-black text-white"
                                : "bg-white text-black"
                                }`}
                        >
                            All
                        </button>
                    {categorie?.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => { localStorage.setItem("newscat", cat?.categories), setSelectedCategory(cat?.categories) }}
                            className={`px-4 py-1 border rounded-full text-sm text-nowrap hover:bg-black hover:text-white transition ${selectedCategory === cat
                                ? "bg-black text-white"
                                : "bg-white text-black"
                                }`}
                        >
                            {cat?.categories}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
                    <div className="lg:col-span-8">
                        <div className="grid grid-cols-1 gap-12">
                            {loading
                                ? renderSkeleton()
                                : newfilterdata?.length === 0 ? (
                                    <p className="text-center  text-lg">No news for this</p>
                                ) : (
                                    newfilterdata?.map((news) => (
                                        <div key={news.id} className="block lg:flex items-center gap-4">
                                            <div className="relative flex-shrink-0">
                                                <Link href={`/news/${news.slug}`} className="block hover:opacity-90 relative">
                                                    <Image
                                                        src={ `${imageurl}/${news?.image}`}
                                                        alt="news"
                                                        width={120}
                                                        height={80}
                                                        className="h-60 w-full lg:w-80 object-fill mx-auto"
                                                    />

                                                </Link>
                                                <div className="absolute top-2 left-2">
                                                    <span className="topic-box-lg color-scampi relative black p-2" style={{color:news?.color}}>
                                                        {news?.news_type}
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="flex flex-col mt-2 lg:mt-0">
                                                <div className="text-sm  mb-1">
                                                    <ul className="flex flex-wrap items-center space-x-2">
                                                        <li>
                                                            <span>by</span>{" "}
                                                            <Link href={`/author-profile/${news.editor.split(" ").join("-")}`}>{news?.editor}</Link>
                                                        </li>
                                                        <li className="flex items-center space-x-1">
                                                            <FaCalendar className="text-gray-400" />
                                                            <span>{setDate(news.updated_at)}</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <h3 className="font-semibold text-2xl my-3 leading-tight">
                                                    <Link href={`/news/${news.slug}`}>{news.title}</Link>
                                                </h3>
                                                <p className="text-sm ">
                                                   {  news.title.slice(0, 250)}...
                                                </p>
                                            </div>
                                        </div>
                                    ))
                                )
                            }

                        </div>
                    </div>
                    <div className="lg:col-span-4">
                        <LeftContent setSelectedCategory={setSelectedCategory} getslug={false} />
                    </div>
                </div>
            </div>
        </>
    );
}
