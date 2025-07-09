"use client"
import Image from "next/image";

import {
  FaCalendar,
  FaEye,
  FaComments,
  FaThumbsUp,
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaLinkedinIn,
} from "react-icons/fa";
import Banner from "@/app/components/Banner";
import LeftContent from "@/app/components/LeftContent";
import NewsContent from "./NewsContent";
import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";
import { useEffect, useState } from "react";
import axios from "axios";
import { baseurl, imageurl } from "@/app/components/reduxstore/utils";
import AuthorCompo from "@/app/author-profile/[slug]/AuthorCompo";
import CommentSection from "@/app/components/CommentSection";

// export async function generateMetadata({ slug }) {
 

//   const baseUrl =
//     process.env.NEXT_PUBLIC_SITE_URL || "https://www.social-scholars.com/";
//   const ogImage = article.images?.startsWith("http")
//     ? article.images
//     : `${baseUrl}${article.images}`;

//   const title = article.title;
//   const description =
//     article.description || article.content?.[0]?.slice(0, 150) || "";
//   const fullUrl = `${baseUrl}/news/${article.slug}`;

//   return {
//     title,
//     description,
//     openGraph: {
//       title,
//       description,
//       url: fullUrl,
//       type: "article",
//       images: ogImage
//         ? [
//             {
//               url: ogImage,
//               width: 1200,
//               height: 630,
//               alt: title,
//             },
//           ]
//         : [],
//     },
//     twitter: {
//       card: "summary_large_image",
//       title,
//       description,
//       images: ogImage ? [ogImage] : [],
//     },
//   };
// }

// export async function generateStaticParams() {
//   return newsData.map((item) => ({ slug: item.slug }));
// }

export default function NewsDetailPage({ slug }) {

const [newsData,setNewsData]=useState();
const [loading,setLoading]=useState(true);

const fetchnews=async()=>{
  setLoading(true)
  const response= await axios.get(`${baseurl}/news/${slug}`);
  const data= await response.data;
if( data.success){
setNewsData(data.news)
 setLoading(false)
}
else{
  setNewsData(null)
}


 }


  useEffect(()=>{
  fetchnews()
   
 },[])

 if (loading) {
  return (
    <div className="animate-pulse space-y-6 px-4 md:px-20 py-8">
      {/* Title */}
      <div className="h-8 bg-gray-300 rounded w-3/4"></div>

      {/* Breadcrumb */}
      <div className="h-4 bg-gray-200 rounded w-1/3"></div>

      {/* Featured image */}
      <div className="w-full h-64 bg-gray-300 rounded"></div>

      {/* Content lines */}
      <div className="space-y-3">
        <div className="h-4 bg-gray-200 rounded w-full"></div>
        <div className="h-4 bg-gray-200 rounded w-5/6"></div>
        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
        <div className="h-4 bg-gray-200 rounded w-2/3"></div>
      </div>

      {/* Sidebar */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
        <div className="md:col-span-1 space-y-6">
          {/* Categories */}
          <div>
            <div className="h-6 bg-gray-300 rounded w-1/2 mb-2"></div>
            <div className="flex flex-wrap gap-2">
              {Array(12).fill().map((_, i) => (
                <div key={i} className="h-6 bg-gray-200 rounded w-20"></div>
              ))}
            </div>
          </div>

          {/* Tabs */}
          <div className="flex gap-2">
            <div className="h-8 w-20 bg-gray-300 rounded"></div>
            <div className="h-8 w-20 bg-gray-300 rounded"></div>
            <div className="h-8 w-20 bg-gray-300 rounded"></div>
          </div>

          {/* Sidebar items */}
          <div className="space-y-3">
            {Array(3).fill().map((_, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gray-200 rounded"></div>
                <div className="flex-1 space-y-2">
                  <div className="h-3 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );}

  if (newsData===null) {
    return (
      <div className="min-h-screen flex items-center justify-center px-5">
        <div className="text-center">
          <h1 className="text-2xl lg:text-4xl font-bold mb-4 text-red-600">
            No News Related to This
          </h1>
          <p className="">
            We couldn't find the article you're looking for.
          </p>
        </div>
      </div>
    );
  }
 

  return (
    <>
      <Banner title={newsData?.title.split(":")[0]} />

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-5 py-10 px-5 lg:px-20">
        <div className="lg:col-span-8 px-0 lg:px-5">
          <div className="relative mb-6 ">
            {newsData?.image && (
              <Image
                src={`${imageurl}/${newsData?.image}`}
                alt={newsData?.title}
                width={800}
                height={400}
                className=" mx-auto object-cover"
              />
            )}
            {newsData?.image && (
              <div className="absolute top-4 left-4">
                <span className="bg-red-600 text-white px-3 py-1 text-sm font-medium" style={{background:newsData?.color || "red"}}>
                  {newsData?.news_type}
                </span>
              </div>
            )}
          </div>

          <h1 className="text-xl lg:text-3xl font-bold mb-4">
            {newsData?.title}
          </h1>

          <div className="block lg:flex gap-4 mb-6 mt-2">
            {newsData?.editor && (
              <a
                href={`/author-profile/${newsData?.editor.split(" ").join("-")}`}
                className=" font-semibold hover:underline flex gap-1"
              >
                <span className="hidden lg:block">By</span> {newsData?.editor}
              </a>
            )}

            <ul className="flex flex-wrap gap-4 text-sm text-justify  ">
              

 {/* <li className="flex items-center gap-1">
                <FaEye /> {newsData?.views}
              </li> */}
             
              {/* {newsData?.views && (
                <li className="flex items-center gap-1">
                  Reading Time : {newsData?.views} mins read
                </li>
              )} */}
            </ul>
          </div>
          <ul>
{newsData?.des.map((item,index)=>{
  return(
<li key={index}  className="my-5">
{item?.heading==="_"?"":
<p className="font-bold py-2 text-2xl capitalize" style={{color:item?.headingColor || "fff"}} >
{item?.heading}
</p>
 } 

<p  dangerouslySetInnerHTML={{__html:item?.description}} className={`${
                index === 0
                  ? "first-letter:text-7xl first-letter:font-bold first-letter:float-left first-letter:leading-none first-letter:pr-4 first-letter:uppercase"
                  : ""
              } text-justify `}></p>
</li>
  )

})}

    </ul>      
        
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  justify-center gap-4 my-6">
   {newsData?.allimages?.map((img,index)=>{return(
             <Image
                src={`${imageurl}/${img}`}
                alt="Image 1"
                width={400}
                height={250}
                className="w-full md:w-[300px] h-[200px] object-cover rounded shadow"
              />
            )}) }
</div>




 {newsData?.editor && <AuthorCompo slug={newsData?.editor.split(" ").join("-")}  other={true}/> }

        
<NewsContent article={newsData} />
          <section className="bg-white py-10 ">
            <div className="max-w-4xl mx-auto">
              <p className="text-xl mb-6">
                Social Scholars is an online magazine featuring premium articles
                and posts in English and Hindi, focusing on social issues and
                news briefs. Share your perspectives and be part of an informed
                dialogue.
              </p>
              <div className="bg-blue-50 border text-center border-gray-200 p-5 rounded-lg shadow-sm inline-block">
                <p className="text-gray-700">
                  📩 Send your articles to:
                  <a
                    href="mailto:socialscholars91@gmail.com"
                    className="text-black font-semibold ml-1 hover:underline"
                  >
                    socialscholars91@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </section>
        <CommentSection />
        </div>

        <div className="lg:col-span-4">
          {/* Tags Widget */}
          <LeftContent />
        </div>
      </div>
    </>
  );
}
