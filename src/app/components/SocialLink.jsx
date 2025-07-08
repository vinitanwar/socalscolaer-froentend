// components/SocialShare.js
'use client';

import { FaFacebookF, FaLinkedinIn,  FaWhatsapp, FaLink, FaShareAlt } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';




const shareUrl = 'https://socialscholars.in/about-us/';
const shortUrl = 'https://socialscholars.in/?p=146';
const whatsappMobileUrl = `whatsapp://send?text=About Us - ${shareUrl}`;
const whatsappWebUrl = `https://api.whatsapp.com/send?text=About Us - ${shareUrl}`;

export default function SocialShare() {
    return (
        <div className="flex flex-col lg:flex-row items-center gap-4">
            <div className="flex items-center gap-2 text-black text-base">
                <FaShareAlt className="text-xl" />
                <small>Shares</small>
            </div>

            <div className="flex gap-3 text-white">
                {/* Facebook */}
                <a
                    href={`https://www.facebook.com/share.php?u=${encodeURIComponent(shareUrl)}`}
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    title="Share this on Facebook"
                    className="bg-blue-600 p-2 rounded-full hover:opacity-80 transition"
                >
                    <FaFacebookF />
                </a>

                {/* LinkedIn */}
                <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    title="Add this to LinkedIn"
                    className="bg-blue-700 p-2 rounded-full hover:opacity-80 transition"
                >
                    <FaLinkedinIn />
                </a>

                {/* X (Twitter) */}
                <a
                    href={`https://twitter.com/intent/tweet?text=About Us - ${encodeURIComponent(shareUrl)}`}
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    title="Share this on X"
                    className="bg-black p-2 rounded-full hover:opacity-80 transition"
                >
                    <FaXTwitter />
                </a>

                {/* Shortlink */}
                <a
                    href={shortUrl}
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    title="Short link"
                    className="bg-gray-700 p-2 rounded-full hover:opacity-80 transition"
                    onClick={(e) => {
                        e.preventDefault();
                        navigator.clipboard.writeText(shortUrl);
                        alert('Shortlink copied!');
                    }}
                >
                    <FaLink />
                </a>

                {/* WhatsApp */}
                <a
                    href={typeof window !== 'undefined' && /Mobi|Android/i.test(navigator.userAgent) ? whatsappMobileUrl : whatsappWebUrl}
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    title="WhatsApp"
                    className="bg-green-500 p-2 rounded-full hover:opacity-80 transition"
                >
                    <FaWhatsapp />
                </a>
            </div>
        </div>
    );
}
