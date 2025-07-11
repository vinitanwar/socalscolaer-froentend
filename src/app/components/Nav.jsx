"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Nav = ({ setSelectedCategory, getslug = true, isFooter = false }) => {
  const router = useRouter();

  const tags = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about-us" },
    { name: "Books", href: "/news/books" },
    { name: "Environment", href: "/news/environment" },
    { name: "Health", href: "/news/health" },
    { name: "History", href: "/news/history" },
    { name: "Politics", href: "/news/politics" },
    { name: "Policy", href: "/news/policy" },
    { name: "IKS", href: "/news/iks" },
    { name: "Punjab", href: "/news/punjab" },
  ];

  const handleClick = (tag) => {
    localStorage.setItem("newscat", tag.name);
    if (!getslug) {
      setSelectedCategory(tag.name);
    } else {
      router.push("/news");
    }
  };

  return (
    <>
      {tags.map((tag, idx) => (
        <li key={idx}>
          {tag.name === "Home" || tag.name === "About Us" ? (
            <Link
              href={tag.href}
              className={`hover:shadow rounded-full  cursor-pointer transition inline-block
                ${
                  isFooter
                    ? "text-white text-lg my-2 py-2 px-2 lg:px-4"
                    : "text-black text-sm md:text-base my-2 py-2 px-0 lg:px-4"
                }`}
            >
              {tag.name}
            </Link>
          ) : (
            <button
              onClick={() => handleClick(tag)}
              className={`hover:shadow rounded-full  cursor-pointer transition
                ${
                  isFooter
                    ? "text-white text-lg my-2 py-2 px-2 lg:px-4"
                    : "text-black text-sm md:text-base  my-2 py-2 px-0 lg:px-4"
                }`}
            >
              {tag.name}
            </button>
          )}
        </li>
      ))}
    </>
  );
};

export default Nav;
