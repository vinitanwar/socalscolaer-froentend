"use client";

import { useEffect, useState } from "react";
import {
  FaFacebook,
  FaGooglePlusG,
 
  FaRss,
  FaVimeo,
  FaYoutube,
} from "react-icons/fa";
import { FaFacebookF, FaWhatsapp, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function NewsContent({ article }) {
  const [currentUrl, setCurrentUrl] = useState("");

  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);

  const shareBaseUrl = `https://social-scholars.com/news/${article.slug}`;
  const encodedUrl = encodeURIComponent(shareBaseUrl);
  const title = encodeURIComponent(article.title);
  const description = encodeURIComponent(
    article.description || article.des?.[0]?.description.slice(0, 100) || ""
  );
  const imageUrl = encodeURIComponent(article.image);

  const socialLinks = [
    {
      name: "Facebook",
      icon: <FaFacebookF />,
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      className: "text-blue-600 hover:bg-blue-600",
    },
    {
      name: "Twitter",
      icon: <FaXTwitter />,
      href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${title}`,
      className: "text-black hover:bg-black",
    },
    {
      name: "WhatsApp",
      icon: <FaWhatsapp />,
      href: `https://api.whatsapp.com/send?text=${title}%20${encodedUrl}`,
      className: "text-green-500 hover:bg-green-500",
    },
     {
      name: "Instagram",
      icon: <FaInstagram />,
      href: `https://instagram.com/share?url=${title}%20${encodedUrl}`,
      className: "text-red-500 hover:bg-red-600",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedinIn />,
      href: `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${title}`,
      className: "text-blue-700 hover:bg-blue-700",
    },
  ];

  const socialLinks2 = [
    {
      name: "Facebook",
      icon:<FaFacebookF size={16} />,
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      className: "bg-[#1877F2] text-white p-2 rounded-full hover:opacity-80 transition",
    },
    {
      name: "Twitter",
      icon: <FaXTwitter size={16} />,
      href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${title}`,
      className: "bg-black text-white p-2 rounded-full hover:opacity-80 transition",
    },
    {
      name: "WhatsApp",
      icon: <FaWhatsapp size={16} />,
      href: `https://api.whatsapp.com/send?text=${title}%20${encodedUrl}`,
      className: "bg-[#25D366] text-white p-2 rounded-full hover:opacity-80 transition",
    },
    
    {
      name: "LinkedIn",
      icon:  <FaLinkedinIn size={16} />,
      href: `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${title}`,
      className: "bg-[#0077B5] text-white p-2 rounded-full hover:opacity-80 transition",
    },
  ];

  return (
    <div className="border p-4">
      <div className="fixed bottom-4 right-2  lg:right-4 z-50 space-y-2 flex flex-col">
        
        {
          socialLinks2.map((links,index)=>{
            return(
              <a href={links.href} className={links.className} target="_blank">
                {links.icon}
              </a>
            )
          })
        }
        {/* <a
          href="https://www.facebook.com/share/14enGshc67/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on Facebook"
          className=
        >
          
        </a> */}

        {/* <a
          href="https://x.com/?lang=en"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on X"
          className=
        >
          
        </a> */}

        {/* WhatsApp */}
        {/* <a
          href="https://whatsapp.com/channel/0029Vb1DTJc2phHVqbD6H32B"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on WhatsApp"
          className=
        >
         
        </a> */}

        {/* LinkedIn */}
        {/* <a
          href="https://www.linkedin.com/company/social-scholars-magazine/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on LinkedIn"
          className=
        >
         
        </a> */}

      </div>
      <p className="mb-2 font-semibold">You can share this post!</p>
      <ul className="flex gap-3 flex-wrap">
        {socialLinks.map((item, index) => (
          <li key={index}>
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              title={`Share on ${item.name}`}
              aria-label={`Share on ${item.name}`}
              className={`w-10 h-10 flex items-center justify-center border border-gray-300 rounded-full text-xl transition-all duration-300 hover:text-white ${item.className}`}
            >
              {item.icon}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
