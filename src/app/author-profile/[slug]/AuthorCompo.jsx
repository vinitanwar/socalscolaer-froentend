"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import LeftContent from "@/app/components/LeftContent";
import Banner from "@/app/components/Banner";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaWhatsapp,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import axios from "axios";
import { baseurl, imageurl } from "@/app/components/reduxstore/utils";
const AuthorCompo = ({ slug, other = false }) => {
  const [authordata, setAuthorData] = useState();
  const [loading, setLoading] = useState(true);

  const fetchauthor = async () => {
    setLoading(true);
    const response = await axios.get(`${baseurl}/getauthor/${slug}`);
    const data = await response.data;

    if (data.success) {
      setAuthorData(data?.author);
     
    }
     setLoading(false);
  };

  useEffect(() => {
    fetchauthor();
  }, []);

  if (loading) {
    return (
      <div className="animate-pulse space-y-6 px-4 md:px-20 py-8">
        {/* Title */}
        <div className="h-8 bg-gray-300 rounded w-3/4"></div>

        {/* Breadcrumb */}
        <div className="h-4 bg-gray-200 rounded w-1/3"></div>

        {/* Featured image */}
        <div className="w-full h-64 bg-gray-300 rounded"></div>

        {/* Sidebar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          <div className="md:col-span-1 space-y-6">
            {/* Categories */}
            <div>
              <div className="h-6 bg-gray-300 rounded w-1/2 mb-2"></div>
              <div className="flex flex-wrap gap-2">
                {Array(12)
                  .fill()
                  .map((_, i) => (
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
              {Array(3)
                .fill()
                .map((_, i) => (
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
    );
  } else {
    return (
      <>
        {authordata && (
          <>
            {!other && (
              <>
                <Banner title={`${authordata?.name}`} />
                <div className="about-author-area ">
                  <div
                    className={`bg-gray-100 container mx-auto py-10 px-5 lg:px-24`}
                  >
                    <div className="w-full ">
                      <div className="about-author-content">
                        <nav
                          className="block md:flex justify-between mb-4 text-sm"
                          aria-label="breadcrumb"
                        >
                          <ol className="flex flex-wrap  space-x-2">
                            <li className="breadcrumb-item">
                              <Link
                                href="/"
                                className="hover:underline text-blue-600"
                              >
                                Home
                              </Link>
                              <span className="mx-2">/</span>
                            </li>
                            <li className="breadcrumb-item">
                              <span className="">Editor</span>
                              <span className="mx-2">/</span>
                            </li>
                            <li
                              className="breadcrumb-item  font-medium"
                              aria-current="page"
                            >
                              {authordata?.name}
                            </li>
                          </ol>

                          <div className="flex justify-between  gap-6 mt-3 lg:mt-0">
                            <div className="flex justify-center items-center gap-4  ">
                              <a
                                href="https://www.facebook.com/share/16S4TgipX5/"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <FaFacebookF className="text-blue-600 w-5 h-5" />
                              </a>
                              <a
                                href="https://x.com/rohiloberoi?t=fLQ-AWDV5UybYBIbTXBmww&s=08"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <FaXTwitter className="text-black w-5 h-5" />
                              </a>
                              <a
                                href="https://www.instagram.com/rohil_raghu?igsh=cHB5ZzF0M3ZndGs2"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <FaInstagram className="text-red-600 w-5 h-5" />
                              </a>
                              <a
                                href="https://whatsapp.com/channel/0029Vb1DTJc2phHVqbD6H32B"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <FaWhatsapp className="text-green-500 w-5 h-5" />
                              </a>
                              <a
                                href="https://www.linkedin.com/in/dr-rohil-oberoi-600291198/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <FaLinkedinIn className="text-blue-500 w-5 h-5" />
                              </a>
                            </div>
                            <button className="bg-black text-white px-4 py-2 hover:text-black border hover:bg-white transition duration-200 ">
                              Download CV
                            </button>
                          </div>
                        </nav>

                        <div className="author-content block lg:flex gap-5">
                          <Image
                            src={`${imageurl}/${authordata?.image}`}
                            alt={authordata?.name}
                            width={120}
                            height={120}
                            className="rounded-full h-40 w-40"
                          />
                          <div className="thumb mb-4 ">
                            <div className="block lg:flex items-end gap-4 mb-2 mt-4 lg:mt-0">
                              <h3 className="text-2xl font-semibold ">
                                {authordata?.name}
                              </h3>
                              <ul className="text-sm   space-y-1 gap-2 flex">
                                <li>
                                  <span>
                                    Since:{" "}
                                    <span className="font-medium">
                                      {authordata?.created_at.split("T")[0]}
                                    </span>
                                  </span>
                                </li>
                              </ul>
                            </div>

                            <div
                              className={`text text-justify space-y-4 `}
                              dangerouslySetInnerHTML={{
                                __html: authordata?.about_author,
                              }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
            {other && (
              <div
                className="border p-3 lg:p-6 mb-10 block lg:flex gap-4 w-full"
                id="editor"
              >
                <Image
                  src={`${imageurl}/${authordata?.image}`}
                  width={100}
                  height={100}
                  alt="Author"
                  className="h-28 object-cover rounded-full w-28"
                />

                <div className="w-full">
                  <div className="flex w-full justify-between items-center mt-2 lg:mt-0 mb-2">
                    {authordata?.showprofile ? (
                      <Link
                        href={`/author-profile/${authordata?.slug}`}
                        className="text-lg font-semibold"
                      >
                        {authordata?.name}
                      </Link>
                    ) : (
                      <span className="text-lg font-semibold">
                        {authordata?.name}
                      </span>
                    )}

                    <div className="flex justify-end gap-3">
                      {authordata?.links?.map((link, index) => {
                        return (
                          <>
                            {link?.platform == "facebook" ? (
                              <a
                                href={link?.url}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <FaFacebookF className="text-blue-600 w-5 h-5" />{" "}
                              </a>
                            ) : link?.platform == "x" ? (
                              <a
                                href={link?.url}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <FaXTwitter className="text-black w-5 h-5" />
                              </a>
                            ) : link?.platform == "instagram" ? (
                              <a
                                href={link?.url}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <FaInstagram className="text-red-600 w-5 h-5" />
                              </a>
                            ) : link?.platform == "whatsapp" ? (
                              <a
                                href={link?.url}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <FaWhatsapp className="text-green-500 w-5 h-5" />
                              </a>
                            ) : link?.platform == "linkedin" ? (
                              <a
                                href={link?.url}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <FaLinkedinIn className="text-blue-500 w-5 h-5" />
                              </a>
                            ) : (
                              ""
                            )}
                          </>
                        );
                      })}
                    </div>
                    {/* <div className="flex gap-1 lg:gap-3 text-xl ">
                  {article.author === "Dr. Rohil Oberoi" ? (
                    <div className="flex justify-center items-center gap-4">
                      <a
                        href="https://www.facebook.com/share/16S4TgipX5/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaFacebookF className="text-blue-600 w-5 h-5" />
                      </a>
                      <a
                        href="https://x.com/rohiloberoi?t=fLQ-AWDV5UybYBIbTXBmww&s=08"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaXTwitter className="text-black w-5 h-5" />
                      </a>
                      <a
                        href="https://www.instagram.com/rohil_raghu?igsh=cHB5ZzF0M3ZndGs2"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaInstagram className="text-red-600 w-5 h-5" />
                      </a>
                      <a
                        href="https://whatsapp.com/channel/0029Vb1DTJc2phHVqbD6H32B"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaWhatsapp className="text-green-500 w-5 h-5" />
                      </a>
                      <a
                        href="https://www.linkedin.com/in/dr-rohil-oberoi-600291198/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaLinkedinIn className="text-blue-500 w-5 h-5" />
                      </a>
                    </div>
                  ) : (
                    <div className="flex justify-center items-center">
                      <a
                        href={article.lindkein}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaLinkedinIn className="text-blue-500 w-5 h-5" />
                      </a>
                    </div>
                  )}
                </div> */}
                  </div>
                  <div className="block">
                    <p
                      className="text-sm mb-2 text-justify"
                      dangerouslySetInnerHTML={{
                        __html: authordata?.about_author,
                      }}
                    ></p>
                    {authordata?.showprofile !="0" && (
                      <Link
                        href={`/author-profile/${authordata?.slug}`}
                        className="text-lg underline"
                      >
                        Read more
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </>
    );
  }
};

export default AuthorCompo;
