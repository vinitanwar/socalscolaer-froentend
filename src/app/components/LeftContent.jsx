
"use client";
import React, { useEffect ,useState} from 'react'
import Image from "next/image";

import ContactRight from './ContactRight';
import { useRouter } from 'next/navigation';
import {  useSelector } from 'react-redux';
import LatestNews from './LatestNews';
import axios from 'axios';
import { baseurl, imageurl } from './reduxstore/utils';
import Link from 'next/link';
import AdBanner from './AdBanner';

// import {  FaCalendar } from 'react-icons/fa';

const LeftContent = ({  getslug = true,handeldata=null }) => {

    const [loading, setLoading] = useState(true);

  const route = useRouter();
const categoriestate = useSelector(state=>state.newscat)
const [categorie,setCategorie]=useState()
const [topNews,setTopNews]=useState()
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

      const fetchdata=async()=>{
        setLoading(true)
    const response= await axios.get(`${baseurl}/gettopviews`)
    const data= await response.data;
    if(data.success){

setTopNews(data?.news)


    }
            setLoading(false)

    

}

useEffect(()=>{
  fetchdata()
},[])


  const [activeTab, setActiveTab] = useState("Popular");
 useEffect(()=>{

if(categoriestate.isLoading){
setLoading(true)
}
else{
setCategorie(categoriestate?.info?.categories)
}


    },[categoriestate])
    const setDate=(ndate)=>{
  const date = new Date(ndate);

const options = { year: 'numeric', month: 'long', day: 'numeric' };
const formattedDate = date.toLocaleDateString('en-US', options);
return formattedDate
}
  return (
    <>  

      <div className="sticky top-10">

        <div className="bg-white  shadow">
          {/* Tab Buttons */}
          <div className="flex ">
            {["Popular","Recent"].map((tab) => (
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
            {activeTab ==="Recent"&&
             <LatestNews />
            }
            {activeTab ==="Popular" &&
               <div className="space-y-5">
                          {topNews?.slice(0,5).map((item) => (
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
                                                {/* <FaCalendar className="" /> */}
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

            }
          </ul>
        </div>

                              <AdBanner slot="9508679847" />


        <div className=" py-6  mb-5">
          <h1 className="text-2xl font-bold mb-4 pb-2 border-b">Categories</h1>
          <ul className="flex flex-wrap gap-3">
            <li >
                <p
                  onClick={() => { localStorage.setItem("newscat", "All"), handeldata("All") }}
                  className=" cursor-pointer inline-block px-3 py-1 text-base border border-[#f1f1f1] hover:bg-gray-200  "
                >
                 All
                </p>
              </li>
            {!getslug && categorie?.map((tag, idx) => (
              <li key={idx}>
                <p
                  onClick={() => { localStorage.setItem("newscat", tag.categories), handeldata(tag.categories) }}
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

      



      
        





        <div className="bg-white shadow mt-8">
          <ContactRight />

        </div>
      </div>
    </>
  )
}

export default LeftContent