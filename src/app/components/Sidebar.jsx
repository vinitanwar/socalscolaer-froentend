"use client";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaHome,
  FaUser,
  FaInfoCircle,
  FaPhone,
  FaArrowLeft,
  FaChevronRight,
  FaRegFileAlt,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaWhatsapp,
  FaDotCircle,
  FaUserFriends,
  FaLinkedinIn,
} from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { getNewsCategories } from "./reduxstore/slices/newsCategoriesSlice";

export default function SidebarMenu({ closeSidebar }) {
  const categoriestate = useSelector((state) => state.newscat);
  const [lodaing, setLoading] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const dispatch = useDispatch();
  const route = useRouter();
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);
  const [catorgy, setCategorie] = useState();

  useEffect(() => {
    if (categoriestate.isLoading) {
      setLoading(true);
    } else {
      setCategorie(categoriestate?.info?.categories);
      setLoading(false);
    }
  }, [categoriestate]);

  const openFullscreenSubmenu = (index) => {
    openSubmenu == index ? setOpenSubmenu("") : setOpenSubmenu(index);
  };

  return (
    <>
      {/* Left Sidebar */}
      <div className=" ">
        <div className="  bg-white ">
          {/* Sidebar Header */}
          <div className="p-4 flex items-center space-x-2 shadow">
            <button onClick={closeSidebar} className="text-xl cursor-pointer">
              <FaArrowLeft />
            </button>
            <Link href="/">
              <Image
                src="/images/logo/social-scholar-logo.webp"
                alt="Social Scholars"
                width={60}
                height={40}
                className="h-12 w-full "
              />
            </Link>
          </div>

          {/* Menu Items */}
          <div className="p-4 ">
            <ul className="space-y-1">
              <li
                className="px-4 py-3 border-b last:border-b-0 cursor-pointer"
                data-aos="fade-left"
                // data-aos-delay={index * 100}
              >
                <div className="flex items-center justify-between">
                  <Link href="/" className="flex items-center space-x-3">
                    <div className="bg-gray-100 rounded-full p-2 text-lg">
                      <FaHome />
                    </div>
                    <span className="text-sm font-medium">Home</span>
                  </Link>
                </div>
              </li>

              <li
                className="px-4 py-3 border-b last:border-b-0 cursor-pointer"
                data-aos="fade-left"
                onClick={() => openFullscreenSubmenu("about")}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="bg-gray-100 rounded-full p-2 text-lg">
                      <FaUser />
                    </div>
                    <a href={"/about-us"} className="text-sm font-medium">
                      About Us
                    </a>
                  </div>
                  <FaChevronRight className="text-gray-400" />
                </div>

                {openSubmenu == "about" && (
                  <ul className="mt-2 ml-12 space-y-1 overflow-auto scrollbar-hide  ">
                    {[
                      { name: "Editorial Board", href: "/editorial-board" },
                      { name: "Advisory Board", href: "/advisory-board" },
                    ].map((sub, subIndex) => (
                      <li
                        key={subIndex}
                        className="px-4 py-3 border-b last:border-b-0"
                      >
                        <Link
                          href={sub.href || "/news"}
                          onClick={() => {
                            localStorage.setItem("newscat", sub.name);
                            closeSidebar();
                          }}
                          className="text-sm text-black  block"
                        >
                          {sub.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>

              <li
                className="px-4 py-3 border-b last:border-b-0 cursor-pointer"
                data-aos="fade-left"
                onClick={() => openFullscreenSubmenu("topic")}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="bg-gray-100 rounded-full p-2 text-lg">
                      <FaRegFileAlt />
                    </div>
                    <span className="text-sm font-medium">Topics</span>
                  </div>
                  <FaChevronRight className="text-gray-400" />
                </div>

                {openSubmenu == "topic" && (
                  <ul className="mt-2 ml-12 space-y-1 overflow-auto scrollbar-hide  ">
                    {catorgy?.slice(0, 6)?.map((sub, subIndex) => (
                      <li
                        key={subIndex}
                        className="px-4 py-3 border-b last:border-b-0"
                      >
                        <Link
                          href={sub.href || "/news"}
                          onClick={() => {
                            localStorage.setItem("newscat", sub.categories);
                            closeSidebar();
                          }}
                          className="text-sm text-black  block"
                        >
                          {sub.categories}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>

              {/* {menuItems.map((item, index) => (
                                <li
                                    key={index}
                                    className="px-4 py-3 border-b last:border-b-0 cursor-pointer"
                                    data-aos="fade-left"
                                    data-aos-delay={index * 100}
                                    onClick={() => item.submenu ? openFullscreenSubmenu(index) : null}
                                >
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-3">
                                            <div className="bg-gray-100 rounded-full p-2 text-lg">
                                                {item.icon}
                                            </div>
                                            <a href={item.href || '#'} className="text-sm font-medium">
                                                {item.label}
                                            </a>
                                        </div>
                                        {item.submenu && <FaChevronRight className="text-gray-400" />}
                                    </div>

                                    {item.submenu && openSubmenu === index && (
                                        <ul className="mt-2 ml-12 space-y-1 overflow-auto scrollbar-hide  ">
                                            {item.submenu.map((sub, subIndex) => (
                                                <li key={subIndex} className='px-4 py-3 border-b last:border-b-0'>
                                                    <Link
                                                        href={sub.href || "/news"}
                                                        onClick={() => {
                                                            localStorage.setItem("newscat", sub.name);
                                                            closeSidebar();
                                                        }}
                                                        className="text-sm text-black  block"
                                                    >
                                                        {sub.name}
                                                    </Link>

                                                </li>
                                            ))}
                                        </ul>
                                    )}

                                </li>

                            ))} */}

              <li
                className="px-4 py-3 border-b last:border-b-0 cursor-pointer"
                data-aos="fade-left"
              >
                <div className="flex items-center justify-between">
                  <Link
                    href="/write-for-us"
                    className="flex items-center space-x-3"
                  >
                    <div className="bg-gray-100 rounded-full p-2 text-lg">
                      <FaInfoCircle />
                    </div>
                    <span className="text-sm font-medium">Write For Us</span>
                  </Link>
                </div>
              </li>

              <li
                className="px-4 py-3 border-b last:border-b-0 cursor-pointer"
                data-aos="fade-left"
                // data-aos-delay={index * 100}
              >
                <div className="flex items-center justify-between">
                  <Link href="/blogs" className="flex items-center space-x-3">
                    <div className="bg-gray-100 rounded-full p-2 text-lg">
                      <FaDotCircle />
                    </div>
                    <span className="text-sm font-medium">Blogs</span>
                  </Link>
                </div>
              </li>
            </ul>

            <div className="fixed bottom-[0%] w-full lg:w-[20%]  left-0">
              <div className="flex justify-center items-center gap-2 w-full lg:w-auto lg:gap-4 py-5 bg-white ">
                <a
                  href="https://www.facebook.com/share/14enGshc67/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebookF className="text-blue-600 w-5 h-5" />
                </a>
                <a
                  href="https://twitter.com/envatomarket?lang=en"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter className="text-sky-500 w-5 h-5" />
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
          </div>
        </div>

        {/* Right Content Panel (75%) */}
        {/* <div className="lg:w-full bg-white shadow p-4 overflow-auto hidden lg:block"
                    data-aos="fade-left"

                >
                    
                    <div className="mb-6">
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center space-x-2">
                                {openSubmenu !== null && (
                                    <button onClick={() => setOpenSubmenu(null)} className="text-xl">
                                        <FaArrowLeft />
                                    </button>
                                )}
                                <span className="font-semibold text-lg">
                                    {openSubmenu !== null ? menuItems[openSubmenu].label : 'Welcome'}
                                </span>
                            </div>

                            <Link href="/" className="mx-auto">
                                <Image
                                    src="https://socialscholars.in/wp-content/uploads/2025/02/social-scholar-logo.webp"
                                    alt="Social Scholars"
                                    width={60}
                                    height={40}
                                    className="w-auto h-10 lg:h-16"
                                />
                            </Link>

                            <a
                                href="/contact-us"
                                className="bg-black text-white px-4 py-2 text-sm  hover:bg-white hover:text-black border"
                            >
                                Contact Us
                            </a>
                        </div>


                    </div>

                    {openSubmenu !== null && (
                        <ul className="grid grid-cols-1 lg:grid-cols-3 gap-4" data-aos="fade-right">
                            {menuItems[openSubmenu].submenu.map((sub, subIndex) => (
                                <li key={subIndex} className="p-4 shadow hover:bg-gray-50 transition">
                                    <Link
                                        href={sub.href || "/news"}
                                        onClick={() => {
                                            localStorage.setItem("newscat", sub.name);
                                            closeSidebar(); // Optional: close sidebar on navigation
                                        }}
                                        className="cursor-pointer text-gray-800 text-base block"
                                    >
                                        {sub.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    )}


                </div> */}
      </div>
    </>
  );
}
