"use client";

import { useEffect, useState } from "react";
import {
  FaFacebookF,
  FaWhatsapp,
  FaPinterestP,
  FaLinkedinIn,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function NewsContent({ article }) {
  const [currentUrl, setCurrentUrl] = useState("");

  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);

  const baseURL = "https://www.social-scholars.com/";
  const utm = "?utm_source=social&utm_medium=share&utm_campaign=news_article";
  const shareUrl = `${currentUrl}${utm}`;

  const title = encodeURIComponent(article.title);
  const description = encodeURIComponent(
    article.description || article.content?.[0]?.slice(0, 100) || ""
  );
  const imageUrl = article.image?.startsWith("http")
    ? article.image
    : `${baseURL}${article.image}`;

  const socialLinks = [
    {
      name: "Facebook",
      icon: <FaFacebookF />,
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        shareUrl
      )}`,
      className: "text-blue-600 hover:bg-blue-600",
    },
    {
      name: "Twitter",
      icon: <FaXTwitter />,
      href: `https://twitter.com/intent/tweet?url=${encodeURIComponent(
        shareUrl
      )}&text=${title}`,
      className: "text-black hover:bg-black",
    },
    {
      name: "WhatsApp",
      icon: <FaWhatsapp />,
      href: `https://api.whatsapp.com/send?text=${title}%20${encodeURIComponent(
        shareUrl
      )}`,
      className: "text-green-500 hover:bg-green-500",
    },
    {
      name: "Pinterest",
      icon: <FaPinterestP />,
      href: `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(
        shareUrl
      )}&media=${encodeURIComponent(imageUrl)}&description=${description}`,
      className: "text-red-500 hover:bg-red-500",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedinIn />,
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
        shareUrl
      )}`,
      className: "text-blue-700 hover:bg-blue-700",
    },
  ];

  return (
    <div className="border p-4">
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
