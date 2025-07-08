'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaCalendar } from 'react-icons/fa';

export default function Hero() {
    return (
        <section className="bg-gray-100 py-10 lg:py-10 px-5 lg:px-24">
            <div className="container mx-auto ">
                <div className="grid md:grid-cols-3 gap-6">
                    {/* Left Big Image (2/3 width) */}
                    <div className="md:col-span-2">
                        <div className="relative overflow-hidden img-overlay-70  group">
                            <Image
                                src="/images/Picture1.webp"
                                alt="news"
                                width={900}
                                height={550}
                                className="w-full h-[265px] lg:h-[550px] object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                            <div className="absolute inset-0  z-20 p-6 flex flex-col justify-end">
                                <span className="bg-red-600 text-white text-xs w-max px-2 py-1 inline-block mb-4">Environment</span>
                                <div className="text-gray-200 text-sm mb-2 hidden sm:block">

                                    <span className='flex gap-2'>  <Link href="/author-profile/dr-rohil-oberoi">by </Link><Link href="" className="underline">Editor</Link> &nbsp;|&nbsp;
                                        <FaCalendar /> March 22, 2025</span>
                                </div>
                                <h2 className="text-white text-lg lg:text-2xl font-semibold  leading-snug">
                                    <Link href="/news/plastic-pollution" className="hover:underline">
                                        The Plastic Pollution: A Global Crisis and India’s Response
                                    </Link>
                                </h2>
                            </div>
                        </div>
                    </div>

                    {/* Right Small News Items */}
                    <div className="space-y-4">
                        {/* Travel News */}
                        <div className="relative overflow-hidden img-overlay-70 group">
                            <Image
                                src="/images/RisingCrime.webp"
                                alt="Travel News"
                                width={600}
                                height={250}
                                className="w-full h-[265px] object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 z-20 p-4 flex flex-col justify-end">
                                <span className="bg-pink-600 w-max text-white text-xs px-2 py-1 inline-block mb-2">World</span>
                                <h3 className="text-white text-lg font-semibold leading-snug">
                                    <Link href="" className="hover:underline">
                                        Rising Crimes Against Foreign Women Tourists in India
                                    </Link>
                                </h3>
                            </div>
                        </div>

                        {/* Business News */}
                        <div className="relative overflow-hidden img-overlay-70  group">
                            <Image
                                src="/images/iran.webp"
                                alt="Business News"
                                width={600}
                                height={200}
                                className="w-full h-[265px] transition-transform duration-300 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 z-20 p-4 flex flex-col justify-end">
                                <span className="bg-green-600 w-max text-white text-xs px-2 py-1 inline-block mb-2">World</span>
                                <h3 className="text-white text-lg font-semibold leading-snug">
                                    <Link href="/news/escalating-iran-israel-tensions" className="hover:underline">
                                        A Conflict Rewriting West Asia’s Strategic Map
                                    </Link>
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
