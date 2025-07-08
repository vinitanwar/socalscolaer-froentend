
"use client";
import React, { useEffect ,useState} from 'react'
import Image from "next/image";

import ContactRight from './ContactRight';
import { useRouter } from 'next/navigation';
import {  useSelector } from 'react-redux';


const LeftContent = ({ setSelectedCategory, getslug = true }) => {

    const [loading, setLoading] = useState(true);

  const route = useRouter();
const categoriestate = useSelector(state=>state.newscat)
const [categorie,setCategorie]=useState()
  const tabData = {
    Popular: [
      {
        img: "/images/mem3@2x.webp",
        title: "New alternatives are more productive",
        author: "Author",
      },
      {
        img: "/images/mem1@2x.webp",
        title: "Vue js new javascript Framework",
        author: "Besim Dauti",
      },
      {
        img: "/images/mem3@2x.webp",
        title: "Eating traditional food is more healthy",
        author: "Admin Mag",
      },
      {
        img: "/images/mem1@2x.webp",
        title: "Visiting antic countries is John Doe hobby.",
        author: "Helena Doe",
      },
    ],
    Recent: [
      {
        img: "/images/mem3@2x.webp",
        title: "New alternatives are more productive",
        author: "Author",
      },
      {
        img: "/images/mem3@2x.webp",
        title: "Vue js new javascript Framework",
        author: "Besim Dauti",
      },
      {
        img: "/images/mem3@2x.webp",
        title: "Eating traditional food is more healthy",
        author: "Admin Mag",
      },
      {
        img: "/images/mem3@2x.webp",
        title: "Visiting antic countries is John Doe hobby.",
        author: "Helena Doe",
      },
    ],
    Comments: [
      {
        img: "/images/mem3@2x.webp",
        title: "New alternatives are more productive",
        author: "Author",
      },
      {
        img: "/images/mem3@2x.webp",
        title: "Vue js new javascript Framework",
        author: "Besim Dauti",
      },
      {
        img: "/images/mem3@2x.webp",
        title: "Eating traditional food is more healthy",
        author: "Admin Mag",
      },
      {
        img: "/images/mem3@2x.webp",
        title: "Visiting antic countries is John Doe hobby.",
        author: "Helena Doe",
      },
    ],
  };

  const tags = [
    { name: "All", href: "/news" },
    { name: "Books", href: "/news/books" },
    { name: "Environment", href: "/news/environment" },
    { name: "Health", href: "/news/health" },
    { name: "Bharat", href: "/news/bharat" },
    { name: "History", href: "/news/history" },
    { name: "Politics", href: "/news/politics" },
    { name: "Economy", href: "/news/economy" },
    { name: "Society", href: "/news/society" },
    { name: "Science & Technology", href: "/news/science-technology" },
    { name: "Policy", href: "/news/policy" },
    { name: "World", href: "/news/world" },
    { name: "News & Opinion", href: "/news/news-opinion" },
    { name: "IKS", href: "/news/iks" },
    { name: "Defence", href: "/news/defence" },
    { name: "Panjab", href: "/news/panjab" },
    { name: "Special Report", href: "/news/special-report" },
  ];



  const [activeTab, setActiveTab] = useState("Popular");
 useEffect(()=>{
if(categoriestate.isLoading){
setLoading(true)
}
else{
setCategorie(categoriestate?.info?.categories)
}


    },[categoriestate])
  return (
    <>

      <div className="sticky top-10">
        <div className=" py-6  mb-5">
          <h1 className="text-2xl font-bold mb-4 pb-2 border-b">Categories</h1>
          <ul className="flex flex-wrap gap-3">
            <li >
                <p
                  onClick={() => { localStorage.setItem("newscat", "All"), setSelectedCategory("All") }}
                  className=" cursor-pointer inline-block px-3 py-1 text-base border border-[#f1f1f1] hover:bg-gray-200  "
                >
                 All
                </p>
              </li>
            {!getslug && categorie?.map((tag, idx) => (
              <li key={idx}>
                <p
                  onClick={() => { localStorage.setItem("newscat", tag.categories), setSelectedCategory(tag.categories) }}
                  className=" cursor-pointer inline-block px-3 py-1 text-base border border-[#f1f1f1] hover:bg-gray-200  "
                >
                  {tag.categories}
                </p>
              </li>
            ))}
            {getslug && categorie?.map((tag, idx) => (
              <li key={idx}>
                <p
                  onClick={() => { localStorage.setItem("newscat", tag.categories), route.push("/news") }}
                  className="inline-block px-3 py-1 text-base border border-[#f1f1f1] hover:bg-gray-200  cursor-pointer "
                >
                  {tag.categories}
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* Tabs Widget */}
        <div className="bg-white  shadow">
          {/* Tab Buttons */}
          <div className="flex ">
            {Object.keys(tabData).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-3 text-base text-white font-semibold w-full transition-all duration-300
                      ${activeTab === tab ? "bg-[#00A7B3]  " : "bg-[#f44336]  "
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <ul className="pt-3 px-4">
            {tabData[activeTab].map((item, idx) => (
              <li
                key={idx}
                className="flex mb-3 py-2 gap-4 items-start group hover:bg-gray-50 transition"
              >
                <a href="" className="flex-shrink-0">
                  <Image
                    src={item.img}
                    alt={item.title}
                    width={80}
                    height={80}
                    className=" object-cover"
                  />
                </a>
                <div className="flex-1">
                  <h2 className="text-base font-semibold leading-tight">
                    <a href="/">{item.title}</a>
                  </h2>
                  <span className="text-base  mt-1">
                    by{" "}
                    <a href="" className="underline hover:text-blue-600">
                      {item.author}
                    </a>
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>





        <div className="bg-white shadow mt-8">
          <ContactRight />

        </div>
      </div>
    </>
  )
}

export default LeftContent