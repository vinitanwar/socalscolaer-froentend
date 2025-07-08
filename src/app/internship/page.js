// components/ContactInfo.js
"use client";

import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import Banner from "../components/Banner";

import ContactRight from "../components/ContactRight";

export default function page() {
  return (
    <>
      <Banner title="Internship Program" />
      <div className="">
        <div className="container mx-auto ">
          {/* 3-column grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-5 lg:px-24">
            {/* Let’s talk */}
            {/* <div className="bg-white p-6  shadow">
              <h3 className="text-xl font-semibold mb-2">Let’s talk</h3>
              <span className="flex items-center  mb-2">
                <FaPhone className="mr-2 text-blue-600" />
                CALL NOW:
              </span>
              <ul className="text-black list-disc list-inside">
                <li>+41 27 966 26690</li>
                <li>+880 1945 381758</li>
              </ul>x
            </div> */}

            {/* Let’s chat */}
          </div>

          <section className=" bg-gray-100 py-20 px-5 lg:px-24">
            <div className="container mx-auto">
              <div className="flex flex-col lg:flex-row gap-8">
                {/* Left Side - Contact Form */}
                <div className="w-full lg:w-2/3 bg-white  p-6  shadow">
                  <form>
                    <p className="text-sm md:text-base  mb-4">
                      📌{" "}
                      <strong>
                        Forward your interest by filling out the form below to
                        apply for our internship program. Fields marked with{" "}
                        <span className="text-red-500">*</span> are required.
                      </strong>{" "}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <input
                        type="text"
                        placeholder="Full name"
                        className="border border-gray-300 rounded px-4 py-2 w-full outline-none"
                      />
                      <input
                        type="text"
                        placeholder="Subject"
                        className="border border-gray-300 rounded px-4 py-2 w-full outline-none"
                      />
                      <input
                        type="email"
                        placeholder="Email address"
                        className="border border-gray-300 rounded px-4 py-2 w-full outline-none"
                      />
                      <input
                        type="text"
                        placeholder="Phone number"
                        className="border border-gray-300 rounded px-4 py-2 w-full outline-none"
                      />
                      <div className="md:col-span-2">
                        <textarea
                          rows="6"
                          placeholder="Tell us about your message…"
                          className="border border-gray-300 rounded px-4 py-2 w-full outline-none"
                        ></textarea>
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="mt-6 bg-black text-white hover:text-black px-6 py-3 transition cursor-pointer border hover:bg-white"
                    >
                      SEND MESSAGE
                    </button>
                  </form>
                </div>

                {/* Right Side - Social & Newsletter */}
                <div className="w-full bg-white lg:w-1/3">
                  <ContactRight />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
