"use client"
import React, { useState } from 'react'
import axios from "axios"
import {baseurl} from "./reduxstore/utils"
import Swal from "sweetalert2";
const CommentSection = () => {
    const [loader,setLoader]=useState(false)
const[userData,setUserData]=useState({
    name:"",
    email:"",
    message:"",
    website:""
})

const changetext=(e)=>{
    e.preventDefault();
setUserData({...userData,[e.target.name]:e.target.value})

}

const sendComment=async(e)=>{    
    e.preventDefault();
setLoader(true)
    const response = await axios.post(`${baseurl}/addcomment`,userData);
   const data = await response.data;
   if(data.success){
    Swal.fire({
  title: data.message,
  icon: "success",
  draggable: true
});
setUserData({
    name:"",
    email:"",
    message:"",
    website:""
})
setLoader(false)
   }
   else{
    Swal.fire({
  icon: "error",
  title: "Oops...",
  text: data.message
});
setLoader(false)

   }
}

  return (
      <div>
            <h2 className="text-2xl font-bold mb-4">Leave a Comment</h2>
            <form className="grid grid-cols-1 md:grid-cols-3 gap-4" onSubmit={sendComment}>
              <input
                type="text"
                placeholder="Name*"
                className="border p-2 col-span-1"
                name='name'
                onChange={(e)=>changetext(e)}
                value={userData.name}
                required

              />
              <input
                type="email"
                placeholder="Email*"
                className="border p-2 col-span-1"
                 name='email'
                onChange={(e)=>changetext(e)}
                value={userData.email}
                required
              />
              <input
                type="text"
                placeholder="Website"
                className="border p-2 col-span-1"
                 name='website'
                onChange={(e)=>changetext(e)}
                value={userData.website}
              />
              <textarea
                placeholder="Message*"
                className="border p-2 col-span-full"
                rows={6}
                  name='message'
                onChange={(e)=>changetext(e)}
                value={userData.message}
                required
              ></textarea>
              <button
                type="submit"
                disabled={loader}
                className="bg-[#e53935] border-2 border-[#e53935] w-max hover:bg-white hover:text-[#e53935] text-white px-5 py-2 col-span-full"
              >
                {loader?"Loading...":"Post Comment"}
                
              </button>
            </form>
          </div>
  )
}

export default CommentSection