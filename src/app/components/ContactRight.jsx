import React from 'react';
import {
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";
import { FaXTwitter } from 'react-icons/fa6';

const socialLinks = [
  {
    icon: <FaFacebookF />,
    bgColor: "bg-blue-600 text-white",
    url: "https://www.facebook.com/share/14enGshc67/",
    label: "Facebook",
  },
  {
    icon: <FaXTwitter />,
    bgColor: "bg-black text-white",
    url: "",
    label: "X",
  },
  {
    icon: <FaYoutube />,
    bgColor: "bg-red-600 text-white",
    url: "https://youtube.com/@socialscholars?si=49L5HESyAsW0ty6s",
    label: "YouTube",
  },
  {
    icon: <FaInstagram />,
    bgColor: "bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 text-white",
    url: "https://www.instagram.com/yourprofile",
    label: "Instagram",
  },
  {
    icon: <FaWhatsapp />,
    bgColor: "bg-green-500 text-white",
    url: "https://whatsapp.com/channel/0029Vb1DTJc2phHVqbD6H32B", // Change to your number
    label: "WhatsApp",
  },
  {
    icon: <FaLinkedin />,
    bgColor: "bg-blue-800 text-white",
    url: "https://www.linkedin.com/company/social-scholars-magazine/",
    label: "LinkedIn",
  },
];

const ContactRight = () => {
  return (
    <div className="p-3 lg:p-6">
      <h3 className="text-xl font-semibold mb-4">Follow us</h3>

      <div className="grid grid-cols-6 gap-4 mb-6 text-center">
        {socialLinks.map((item, index) => (
          <a
            key={index}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Follow on ${item.label}`}
            className={`flex items-center justify-center rounded-lg p-3 shadow hover:opacity-80 transition ${item.bgColor}`}
          >
            <div className="text-2xl">{item.icon}</div>
          </a>
        ))}
      </div>

      {/* Contact Info */}
      <div className="bg-white p-6 shadow">
        {/* <h3 className="text-xl font-semibold mb-2">Let’s chat</h3> */}
        <div className="flex flex-wrap items-center gap-2 mb-2">
          <span className="flex items-center">
            <FaEnvelope className="mr-2 text-black" />
            Email:
          </span>
          <a
            href="mailto:socialscholars91@gmail.com"
            className="hover:underline break-all"
          >
            socialscholars91@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactRight;
