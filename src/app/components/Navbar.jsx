"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import {
  FaFacebookF,
  FaYoutube,
  FaWhatsapp,
  FaLinkedinIn,
} from "react-icons/fa";
// use this instead of FaFileText
import SidebarMenu from "./Sidebar";
import { newsData } from "./NewsData";
import { FaXTwitter } from "react-icons/fa6";
import { useSelector } from "react-redux";
  
export default function Navbar({ toggleSidebar }) {
  const latestReviews = [...newsData]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 6);

  const [fixed, setFixed] = useState(false);
   const topNewsState= useSelector(state=>state.topnews)
    const [allArtical,setAllArticles]=useState()
  console.log(allArtical,"asmdskm")

 useEffect(() => {
    if (!topNewsState.isLoading && topNewsState.info?.success) {
      setAllArticles(topNewsState.info.news || []);
    }
  }, [topNewsState]);

  useEffect(() => {
    const handleScroll = () => {
      setFixed(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header className="bg-black  ">
      {/* Top Marquee */}
      <div className="py-2 px-5 lg:px-24">
        <div className="container mx-auto  flex items-center gap-4 overflow-hidden">
          <span className="font-semibold text-sm text-red-600">LATEST</span>
          <div className="relative overflow-hidden w-full whitespace-nowrap">
            <div className="animate-marquee">
              {allArtical?.slice(0,6).map((item,index) => (
                <Link key={index}
                  href={`/news/${item.slug || "#"}`}
                  className="inline-block mx-6 text-sm text-white transition-all"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div
        className={` z-50  border-y py-2 lg:py-0 border-[#f3f4f6] ${
          fixed
            ? "fixed top-0 bg-white min-w-max shadow "
            : "relative  bg-white"
        }`}
      >
        <div className="mx-5 lg:mx-24">
          <div className="container mx-auto flex items-center justify-between">
            {/* Left - Hamburger */}
            <div className="flex items-center">
              <div className="cursor-pointer" onClick={toggleSidebar}>
                <div className="space-y-1">
                  <span className="block w-4 lg:w-6 h-0.5 bg-black"></span>
                  <span className="block w-4 lg:w-6 h-0.5 bg-black"></span>
                  <span className="block w-4 lg:w-6 h-0.5 bg-black"></span>
                </div>
              </div>
            </div>

            {/* Center - Logo */}
            <div className="flex justify-center pl-0 lg:pl-10">
              <Link href="/">


<p className="text-2xl md:text-3xl font-black tracking-tight text-gray-900 dark:text-white">
  dailyujala<span className="text-indigo-600">punjab</span><span className="text-indigo-600">.</span>

                
{/*                 <Image
                  src="/images/logo/social-scholar-logo.webp"
                  alt="Social Scholars"
                  width={60}
                  height={40}
                  className={`h-12 w-full ${fixed ? "lg:h-16" : "lg:h-24"}`}
                /> */}
              </Link>
            </div>

            {/* Right - Social Icons & Button */}
            <div className="flex items-center gap-2 lg:gap-4">
              <Link href="/donate-us">
                <button className="bg-black text-white px-4 py-2 hover:text-black border hover:bg-white transition duration-200 hidden lg:block">
                  Donate Us
                </button>
              </Link>
              <a
                href="https://www.facebook.com/share/14enGshc67/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF className="text-blue-600 w-5 h-5" />
              </a>
              <a href="" target="_blank" rel="noopener noreferrer">
                <FaXTwitter className="text-black w-5 h-5" />
              </a>
              <a
                href="https://youtube.com/@socialscholars?si=49L5HESyAsW0ty6s"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube className="text-red-600 w-5 h-5" />
              </a>
              <a
                href="https://whatsapp.com/channel/0029Vb1DTJc2phHVqbD6H32B"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp className="text-green-500 w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/social-scholars-magazine/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn className="text-blue-500 w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Sidebar */}
          {/* {isSidebarOpen && (
                        <div className="fixed inset-0 bg-[#00000069] z-30">
                            <SidebarMenu closeSidebar={closeSidebar} />
                        </div>
                    )} */}
        </div>
      </div>
    </header>
  );
}
