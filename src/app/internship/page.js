"use client";

import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import Banner from "../components/Banner";

import ContactRight from "../components/ContactRight";
import axios from "axios";
import { baseurl } from "../components/reduxstore/utils";
import { useState } from "react";
import Swal from "sweetalert2";

export default function page() {
const [internshipData,setInternShipData]=useState({
  name:"",
  email:"",
  phone:"",
  message:"",
  subject:""
})
const [loading,setLoading]=useState(false)

const handelinput=(e)=>{
e.preventDefault()
setInternShipData({...internshipData,[e.target.name]:e.target.value})
}



  const sendIntership=async(e)=>{
    e.preventDefault()
  setLoading(true)

    const response = await axios.post(`${baseurl}/internship`,internshipData);
    const data=response.data;
    if(data.success){
  Swal.fire({
  title: data.message,
  icon: "success",
  draggable: true
});
setInternShipData({
   name:"",
  email:"",
  phone:"",
  message:"",
  subject:""
})
setLoading(false)

    }
    else{
     
          Swal.fire({
        icon: "error",
        title: "Oops...",
        text: data.message
      });

      setLoading(false)
    }

      

  }


  return (
    <>
      <Banner title="Internship Program" />
      <div className="">
        <div className="container mx-auto ">
          {/* 3-column grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-5 lg:px-24">
          
          </div>

          <section className=" bg-gray-100 py-20 px-5 lg:px-24">
            <div className="container mx-auto">
              <div className="flex flex-col lg:flex-row gap-8">
                {/* Left Side - Contact Form */}
                <div className="w-full lg:w-2/3 bg-white  p-6  shadow">
                  <form onSubmit={sendIntership}>
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
                        name="name"
                        value={internshipData.name}
                        required
                        onChange={(e)=>handelinput(e)}
                      />
                      <input
                        type="text"
                        placeholder="Subject"
                        className="border border-gray-300 rounded px-4 py-2 w-full outline-none"
                         name="subject"
                        value={internshipData.subject}
                        onChange={(e)=>handelinput(e)}
                      />
                      <input
                        type="email"
                        placeholder="Email address"
                        className="border border-gray-300 rounded px-4 py-2 w-full outline-none"
                         name="email"
                         required
                        value={internshipData.email}
                        onChange={(e)=>handelinput(e)}
                      />
                      <input
                        type="text"
                        placeholder="Phone number"
                        className="border border-gray-300 rounded px-4 py-2 w-full outline-none"
                        name="phone"
                        required
                        value={internshipData.phone}
                        onChange={(e)=>handelinput(e)}
                      />
                      <div className="md:col-span-2">
                        <textarea
                          rows="6"
                          placeholder="Tell us about your message…"
                          className="border border-gray-300 rounded px-4 py-2 w-full outline-none"
                              name="message"
                              required
                        value={internshipData.message}
                        onChange={(e)=>handelinput(e)}
                        ></textarea>
                      </div>
                    </div>
                    <button
                    disabled={loading}
                      type="submit"
                      className="mt-6 bg-black text-white hover:text-black px-6 py-3 transition cursor-pointer border hover:bg-white"
                    >
                      {loading?"Loading...":"SEND MESSAGE"}
                      
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
