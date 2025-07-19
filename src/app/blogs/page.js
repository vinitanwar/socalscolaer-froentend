"use client";

import Image from "next/image";
import Link from "next/link";
import Banner from "@/app/components/Banner";
import { FaComment } from "react-icons/fa";

import { useEffect, useState } from "react";
import axios from "axios";
import { baseurl, imageurl } from "../components/reduxstore/utils";

export default function BlogPage() {
const [blogdata,setBlogData]=useState()
const [loader,setLoader]=useState(false)
const fetchallBlog=async()=>{
  setLoader(true)
const response= await axios.get(`${baseurl}/blog/all`);
const data= response.data;
if(data.success){
  setBlogData(data.blog)
}

  setLoader(false)

}


const setDate=(ndate)=>{
  const date = new Date(ndate);

const options = { year: 'numeric', month: 'long', day: 'numeric' };
const formattedDate = date.toLocaleDateString('en-US', options);
return formattedDate
}

useEffect(()=>{
fetchallBlog()
},[])


if(loader){
  return(
     <div className="bg-white p-4 rounded shadow animate-pulse ">
      <div className="h-[14rem] bg-gray-300 rounded mb-4 px-20"></div>
      <div className="flex justify-between gap-40   lg:px-20">
      <div className="h-[14rem] bg-gray-300 rounded w-full mb-2"></div>
      <div className="h-[14rem] bg-gray-300 rounded   w-full mb-2"></div>
      <div className="h-[14rem] bg-gray-300 rounde  w-full mb-2"></div>
      <div className="h-[14rem] bg-gray-300 rounded   w-full"></div>
      </div>
    </div>
  )
}



  return (
    <>
      <Banner title="Blogs" />
    
      <div className="container mx-auto px-5 lg:px-24 py-10">
        <div className="flex flex-wrap -mx-2 gap-y-6">
          {blogdata?.map((post, idx) => (
            <div key={idx} className="w-full sm:w-1/2 lg:w-1/4 px-2">
              <article className="bg-white  shadow rounded overflow-hidden">
                <div className="relative">
                  <figure className="aspect-video overflow-hidden rounded">
                    <Image
                      src={ `${imageurl}/${post?.banner}`}
                      alt={post?.title}
                      width={800}
                      height={450}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      loading="lazy"
                    />
                    <Link
                      href={`/blog/${post?.slug}`}
                      className="absolute inset-0"
                      aria-label={post?.title}
                    />
                  </figure>
                  <div className="absolute top-2 left-2 bg-white text-primary text-sm font-bold px-2 py-1 rounded shadow">
                    <Link href="/blog-category">{post?.blog_cat}</Link>
                  </div>
                </div>
                <div className="px-4 py-4 flex flex-col gap-2">
                  <h3 className="text-center font-semibold text-lg line-clamp-2">
                    <Link
                      href={`/blogs/${post?.slug}`}
                      className="hover:"
                    >
                      {post?.title.length >=65? `${post?.title.slice(0,64)}...`: post?.title}
                    </Link>
                  </h3>
                  <div className="hidden md:flex justify-center items-center text-sm  gap-4">
                    <Link
                      href="/"
                      className="font-medium text-black "
                    >
                      {post?.blog_editor}
                    </Link>
                    <span>  {  setDate(post?.created_at) }</span>
                    <Link
                      href="#post_comment"
                      className="flex items-center gap-1"
                    >
                      <FaComment />
                      {/* <span></span> */}
                    </Link>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
