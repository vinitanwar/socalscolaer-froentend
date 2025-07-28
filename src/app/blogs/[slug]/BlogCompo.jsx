"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { notFound } from "next/navigation";

import Banner from "@/app/components/Banner";
import LeftContent from "@/app/components/LeftContent";
import axios from "axios";
import { baseurl, imageurl } from "@/app/components/reduxstore/utils";
import AuthorCompo from "@/app/author-profile/[slug]/AuthorCompo";
const BlogCompo = ({ slug }) => {
  const [bloginfo, setBloginfo] = useState();
  console.log(bloginfo?.blog_editor)
  const [loading, setLoading] = useState(false);
  const fetchBlog = async () => {
    setLoading(true);
    const resoponse = await axios.get(`${baseurl}/blog/single/${slug}`);
    const data = await resoponse.data;
    if (data.success) {
      setBloginfo(data.blog);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchBlog();
  }, []);
  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 py-8">
        {Array(2)
          .fill(0)
          .map((_, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-md overflow-hidden animate-pulse"
            >
              {/* Image Placeholder */}
              <div className="h-40 bg-gray-300 w-full"></div>

              {/* Content Placeholder */}
              <div className="p-4 space-y-3">
                <div className="h-4 bg-gray-300 rounded w-1/3"></div>
                <div className="h-5 bg-gray-300 rounded w-full"></div>
                <div className="h-5 bg-gray-300 rounded w-5/6"></div>
                <div className="flex items-center justify-between">
                  <div className="h-4 bg-gray-300 rounded w-1/4"></div>
                  <div className="h-4 bg-gray-300 rounded w-1/6"></div>
                </div>
              </div>
            </div>
          ))}
      </div>
    );
  }

  return (
    <>
      <Banner
        title={
          <>
            <span className="block lg:hidden">{bloginfo?.title}</span>

            <span className="hidden lg:block">{bloginfo?.title}</span>
          </>
        }
      />

      <div className="container mx-auto px-5 lg:px-24 py-10">
        <div className="lg:grid grid-cols-12 gap-8">
          <div className="lg:col-span-8 py-6">
            <div className="">
              <Image
                src={`${imageurl}/${bloginfo?.banner}`}
                alt="Pink Marketing, by Mak"
                width={800}
                height={500}
                className="rounded h-[250px] lg:h-[500px] w-full"
              />

              <p className="text-sm text-center  mt-2 uppercase">{bloginfo?.blog_cat}</p>

              <div className="prose prose-lg mt-8 text-justify">
                {bloginfo?.blog_dis.map((block, index) => {
                  return (
                    <div key={index} className="my-3">
                      <p
                        className={`text-lg text-justify font-bold`}
                        style={{ color: block?.title_color }}
                      >
                        {block?.title == "_" ? "" : block?.title}
                      </p>

                      <div className="flex flex-col md:flex-row">
                        <h4
                          className="text-2xl mt-6 mb-3"
                          dangerouslySetInnerHTML={{
                            __html: block?.description,
                          }}
                        ></h4>

                        <div className="mt-3">
                          {block.image && (
                            <div className="float-none lg:float-right ml-4 mb-2 w-72">
                              <Image
                                src={`${imageurl}/${block.image}`}
                                alt={block.title}
                                width={300}
                                height={300}
                                className="rounded mx-auto"
                              />
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <section id="editor">
          {bloginfo?.blog_editor && bloginfo?.blog_editor != 0 && (
            <AuthorCompo
              slug={bloginfo?.blog_editor.split(" ").join("-")}
              other={true}
            />
          )}
          </section>
          </div>
          <div className="lg:col-span-4">
            <LeftContent />
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogCompo;
