import Link from 'next/link'
import React from 'react'


const Banner = ({ title }) => {
    return (
        <>

            <section
                className="bg-cover bg-center bg-no-repeat relative  banner py-10 px-5 lg:px-24"
                style={{ backgroundImage: `url('/images/breadcrumbs-banner.webp')` }}
            >
                <div className="container mx-auto ">
                    <div className="text-white relative z-10">
                        <h1 className="text-xl lg:text-3xl font-bold mb-2">{title}</h1>
                        <ul className=" items-center space-x-2 text-sm hidden lg:flex" >
                            <li>
                                <Link href="/" className="hover:underline text-white">
                                    Home
                                </Link>
                            </li>
                            <li>-</li>
                            <li className="text-white">{title}</li>
                        </ul>
                    </div>
                </div>
            </section>


         

        </>
    )
}

export default Banner


