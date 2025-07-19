"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaFacebook,
  FaGooglePlusG,
  FaInstagram,
  FaLinkedinIn,
  FaRss,
  FaVimeo,
  FaYoutube,
} from "react-icons/fa";
import Nav from "./Nav";

import {
  FaFacebookF,
  FaWhatsapp,
  FaLinkedin,
  FaShareAlt,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { getNewsCategories } from "./reduxstore/slices/newsCategoriesSlice";
import { useEffect } from "react";
import { getlatestnews } from "./reduxstore/slices/getLetestNews";

export default function Footer() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNewsCategories());
    dispatch(getlatestnews());
  }, []);

  return (
    <>
      <div className="fixed bottom-4 right-2  lg:right-4 z-50 space-y-2 flex flex-col">
        {/* Facebook */}
        <a
          href="https://www.facebook.com/share/14enGshc67/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on Facebook"
          className="bg-[#1877F2] text-white p-2 rounded-full hover:opacity-80 transition"
        >
          <FaFacebookF size={16} />
        </a>

        <a
          href="https://x.com/?lang=en"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on X"
          className="bg-black text-white p-2 rounded-full hover:opacity-80 transition"
        >
          <FaXTwitter size={16} />
        </a>

        {/* WhatsApp */}
        <a
          href="https://whatsapp.com/channel/0029Vb1DTJc2phHVqbD6H32B"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on WhatsApp"
          className="bg-[#25D366] text-white p-2 rounded-full hover:opacity-80 transition"
        >
          <FaWhatsapp size={16} />
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/company/social-scholars-magazine/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on LinkedIn"
          className="bg-[#0077B5] text-white p-2 rounded-full hover:opacity-80 transition"
        >
          <FaLinkedin size={16} />
        </a>

      </div>

      <footer className="bg-black text-base text-white px-5 lg:px-24">
        <div className="container mx-auto  py-10">
          <div className="mb-8 ">
            <h2 className="text-lg font-semibold px-4">Quick Links</h2>
            <ul className="flex flex-wrap ">
              <Nav isFooter={true} />

              {[
                { href: "/terms-conditions", label: "Terms & Conditions" },
                { href: "/privacy-policy", label: "Privacy Policy" },
                { href: "/internship", label: "Internship" },
              ].map((item, idx) => (
                <li key={idx}>
                  <button
                    className={`hover:shadow rounded-full my-2 py-2 px-4 cursor-pointer transition text-lg
                            `}
                  >
                    <a href={item.href}>{item.label}</a>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Footer Bottom */}
          <div className="bg-[#000] border-t pt-3">
            <div className="container mx-auto text-center text-white block lg:flex justify-between items-center ">
              <Link href="/" className="">
                <Image
                  src="/images/logo/logo1.webp"
                  alt="logo"
                  width={360}
                  height={60}
                  className="mx-auto filter brightness-0 invert"
                />
              </Link>

              <div className="flex justify-center gap-4  text-xl my-3 lg:my-0">
                <Link
                  href="https://www.facebook.com/share/14enGshc67"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook />
                </Link>
                <Link
                  href="https://x.com/?lang=en"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaXTwitter />
                </Link>
                <Link
                  href="https://youtube.com/@socialscholars?si=49L5HESyAsW0ty6s"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaYoutube />
                </Link>
                <Link
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram />
                </Link>
                <Link
                  href="https://whatsapp.com/channel/0029Vb1DTJc2phHVqbD6H32B"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp />
                </Link>

                <Link
                  href="https://www.linkedin.com/company/social-scholars-magazine/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn />
                </Link>
                
              </div>
              <span className="text-lg text-center ">
                © Copyright 2025 - Social Scholars. Designed By{" "}
                <Link
                  href="https://www.futuretouch.in/"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                >
                  Future Touch
                </Link>
              </span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
