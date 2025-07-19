"use client";

import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { FaCalendar } from "react-icons/fa";
import { baseurl, imageurl } from "./reduxstore/utils";
import { useEffect, useState } from "react";

export default function Hero() {
  const [loading, setLoading] = useState(true);
  const [firstimg, setFirstimg] = useState();
  const [secondimg, setSecondimg] = useState();
  const [thirdimg, setThirdimg] = useState();

  const fetchuser = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${baseurl}/getbannernews`);
      const data = await response.data;
      if (data.success) {
        data?.news?.forEach((item) => {
          if (item.numbering == "first") {
            setFirstimg(item);
          } else if (item.numbering == "second") {
            setSecondimg(item);
          } else if (item.numbering == "third") {
            setThirdimg(item);
          }
        });
      }
    } catch (error) {}
    setLoading(false);
  };
  useEffect(() => {
    fetchuser();
  }, []);

  if (loading) {
    return (
      <section className="bg-gray-100 py-10 lg:py-10 px-5 lg:px-24">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-6 animate-pulse">
            {/* Left Large Skeleton (2/3 width on medium and above) */}
            <div className="md:col-span-2">
              <div className="h-[265px] lg:h-[550px] bg-gray-300 w-full rounded-lg"></div>
            </div>

            {/* Right Small Skeletons (stacked vertically) */}
            <div className="space-y-4">
              <div className="h-[265px] bg-gray-300 w-full rounded-lg"></div>
              <div className="h-[265px] bg-gray-300 w-full rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const setDate = (ndate) => {
    const date = new Date(ndate);

    const options = { year: "numeric", month: "long", day: "numeric" };
    const formattedDate = date.toLocaleDateString("en-US", options);
    return formattedDate;
  };

  return (
    <>
      {!loading && (
        <section className="bg-gray-100 py-10 lg:py-10 px-5 lg:px-24">
          <div className="container mx-auto ">
            <div className="grid md:grid-cols-3 gap-6">
              {/* Left Big Image (2/3 width) */}
              <div className="md:col-span-2">
                <div className="relative overflow-hidden img-overlay-70  group">
                  <Image
                    src={
                      firstimg?.image
                        ? `${imageurl}/${firstimg?.image}`
                        : "/images/Picture1.webp"
                    }
                    alt="news"
                    width={900}
                    height={550}
                    className="w-full h-[265px] lg:h-[550px] object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0  z-20 p-6 flex flex-col justify-end">
                    <span
                      className="bg-red-600 text-white text-xs w-max px-2 py-1 inline-block mb-4"
                      style={{ background: firstimg?.color || "red" }}
                    >
                      {firstimg?.news_type || "Environment"}{" "}
                    </span>
                    <div className="text-gray-200 text-sm mb-2 hidden sm:block">
                      <span className="flex gap-2">
                        {" "}
                        <Link href="/author-profile/dr-rohil-oberoi">by </Link>
                        <Link href="" className="underline">
                          {firstimg?.editor==0?"":firstimg?.editor}
                        </Link>{" "}
                        &nbsp;|&nbsp;
                        <FaCalendar />{" "}
                        {firstimg?.created_at
                          ? setDate(firstimg?.created_at)
                          : "March 22, 2025"}{" "}
                      </span>
                    </div>
                    <h2 className="text-white text-lg lg:text-2xl font-semibold  leading-snug">
                      <Link
                        href={firstimg?.slug ? `/news/${firstimg.slug}` : "/"}
                        className="hover:underline"
                      >
                        {firstimg?.title || "Select Artical from server"}
                      </Link>
                    </h2>
                  </div>
                </div>
              </div>

              {/* Right Small News Items */}
              <div className="space-y-4">
                <div className="relative overflow-hidden img-overlay-70 group">
                  <Image
                    src={
                      secondimg?.image
                        ? `${imageurl}/${secondimg?.image}`
                        : "/images/Picture1.webp"
                    }
                    alt="Travel News"
                    width={600}
                    height={250}
                    className="w-full h-[265px] object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 z-20 p-4 flex flex-col justify-end">
                    <span
                      className="bg-pink-600 w-max text-white text-xs px-2 py-1 inline-block mb-2"
                      style={{ background: secondimg?.color || "red" }}
                    >
                      {secondimg?.news_type || "Environment"}{" "}
                    </span>
                    <h3 className="text-white text-lg font-semibold leading-snug">
                      <Link
                        href={secondimg?.slug ? `/news/${secondimg.slug}` : "/"}
                        className="hover:underline"
                      >
                        {secondimg?.title || "Select Artical from server"}
                      </Link>
                    </h3>
                  </div>
                </div>

                <div className="relative overflow-hidden img-overlay-70  group">
                  <Image
                    src={
                      thirdimg?.image
                        ? `${imageurl}/${thirdimg?.image}`
                        : "/images/Picture1.webp"
                    }
                    alt="Business News"
                    width={600}
                    height={200}
                    className="w-full h-[265px] transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 z-20 p-4 flex flex-col justify-end">
                    <span
                      className="bg-green-600 w-max text-white text-xs px-2 py-1 inline-block mb-2"
                      style={{ background: thirdimg?.color || "red" }}
                    >
                      {thirdimg?.news_type || "Environment"}{" "}
                    </span>
                    <h3 className="text-white text-lg font-semibold leading-snug">
                      <Link
                        href={thirdimg?.slug ? `/news/${thirdimg.slug}` : "/"}
                        className="hover:underline"
                      >
                        {thirdimg?.title || "Select Artical from server"}
                      </Link>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
