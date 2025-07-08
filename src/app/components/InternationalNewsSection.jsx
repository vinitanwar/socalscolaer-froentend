'use client';
import Image from 'next/image';
import Link from 'next/link';
import { FaCalendar, FaFacebook, FaLinkedin, FaRss } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

export default function InternationalNewsSection() {
    return (
        <section className="bg-gray-100 py-10 lg:py-20 px-5 lg:px-24">
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Left Content */}
                    <div className="lg:w-2/3 w-full">

                        <div className="topic-border color-scampi w-full green relative mb-8">
                            <div className="topic-box-lg color-scampi green relative">International</div>

                        </div>

                        <div className="flex flex-col md:flex-row gap-6 mb-6">
                            {/* Main News */}
                            <div className="md:w-1/2 overflow-hidden">
                                <div className="overflow-hidden ">
                                    <Image src="/images/69.webp" alt="news" width={600} height={400} className="w-full h-auto object-cover  hover:scale-105 transition-transform duration-300" />
                                </div>
                                <div className="bg-white shadow p-4 ">
                                    <div className="text-sm  flex items-center gap-2 mb-2">
                                        <FaCalendar />
                                        <span>February 10, 2025</span>
                                    </div>
                                    <h3 className="text-lg font-semibold  hover:text-green-700 transition">
                                        <Link href="">Erik Jones has day he won’t soon forget Denny backup at Bristol</Link>
                                    </h3>
                                </div>
                            </div>

                            {/* Other News Items */}
                            <div className="md:w-1/2 flex flex-col gap-6">
                                {[
                                    { img: '/images/69.webp', date: 'February 10, 2025', link: '', title: 'Can Be Monit roade year with Program.' },
                                    { img: '/images/69.webp', date: 'June 06, 2025', link: '', title: 'Can Be Monit roade year with Program.' },
                                    { img: '/images/69.webp', date: 'August 22, 2025', link: '', title: 'Can Be Monit roade year with Program.' },
                                ].map((item, idx) => (
                                    <div key={idx} className="flex bg-white shadow-md  overflow-hidden h-[119px]">
                                        <Link href={item.link} className="w-1/3">
                                            <Image src={`${item.img}`} alt="news" width={150} height={100} className="w-full h-full object-cover" />
                                        </Link>
                                        <div className="p-4 w-2/3">
                                            <div className="text-sm  flex items-center gap-2 mb-2">
                                                <FaCalendar />
                                                <span>{item.date}</span>
                                            </div>
                                            <h3 className="text-md font-semibold hover:text-green-700 transition">
                                                <Link href={item.link}>{item.title}</Link>
                                            </h3>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Sidebar */}
                    <aside className="lg:w-1/3 w-full">
                        {/* Social Media */}
                        <div className="mb-8">

                            <div className="topic-border color-scampi w-full black relative mb-8">
                                <div className="topic-box-lg color-scampi relative black">Stay Connected</div>

                            </div>
                            <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-center">
                                {[
                                    { icon: <FaFacebook />, label: 'Fans', count: '50.2 k', className: 'bg-blue-600' },
                                    { icon: <FaXTwitter />, label: 'Followers', count: '10.3 k', className: 'bg-sky-500' },
                                    { icon: <FaLinkedin />, label: 'Fans', count: '25.4 k', className: 'bg-blue-800' },
                                    { icon: <FaRss />, label: 'Subscriber', count: '20.8 k', className: 'bg-orange-500' },
                                ].map((item, idx) => (
                                    <li key={idx} className={`${item.className} text-white py-4 px-2  shadow`}>
                                        <a href="#" className="flex flex-col items-center gap-1">
                                            {item.icon}
                                            <div className="text-lg font-semibold">{item.count}</div>
                                            <p className="text-sm">{item.label}</p>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Banner Ad */}
                        <div className="text-center">
                            <Link href="#">
                                <Image src="/images/69.webp" alt="ad" width={350} height={200} className="mx-auto  shadow" />
                            </Link>
                        </div>
                    </aside>
                </div>
            </div>
        </section>
    );
}
