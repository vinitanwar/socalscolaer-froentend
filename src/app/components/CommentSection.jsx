"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { baseurl } from "./reduxstore/utils";
import Swal from "sweetalert2";
import { FaGlobe, FaUserAlt } from 'react-icons/fa';
import { FiClock } from 'react-icons/fi';

const CommentSection = ({ slug }) => {
  const [loader, setLoader] = useState(false);
  const [coment, setComent] = useState([]);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    message: "",
    website: "",
    image: "",
    slug,
  });

  const changetext = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUserData((prev) => ({ ...prev, image: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const sendComment = async (e) => {
    e.preventDefault();
    setLoader(true);

    try {
      const response = await axios.post(`${baseurl}/addcomment`, userData);
      const data = response.data;

      if (data.success) {
        Swal.fire({
          title: data.message,
          icon: "success",
        });

       window.location.reload();

        setUserData({
          name: "",
          email: "",
          message: "",
          website: "",
          image: "",
          slug,
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: data.message,
        });
      }
    } catch (err) {
      console.error("Comment submission failed", err);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong. Try again later.",
      });
    }

    setLoader(false);
  };

  const getComment = async () => {
    try {
      const response = await axios.get(`${baseurl}/comment/${slug}`);
      const data = response.data;
      if (data.success) {
        setComent(data.blog);
      }
    } catch (err) {
      console.error("Error fetching comments", err);
    }
  };

  useEffect(() => {
    getComment();
  }, []);


  const formattedDate=(date)=>{
const formattedDate = new Date(date).toLocaleString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
  return formattedDate;

  }

    const avatarLetter =(name)=>{ return name.charAt(0).toUpperCase();}

  return (
    <div className="space-y-6">
      {/* Show posted comments */}
      {coment?.length > 0 && (
        <div className="space-y-4 md:max-h-[23rem] overflow-y-auto">
          <h3 className="text-xl font-semibold">Recent Comments</h3>

          {coment.map((comment, index) => (
             <div className="flex gap-4 p-4 border-b border-gray-200" key={index}>
      {/* Avatar with first letter */}
      <div className="flex-shrink-0">
        <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-lg">
          {avatarLetter(comment.name)}
        </div>
      </div>

      <div className="flex-1 w-full">
        <div className="flex items-center text-xl gap-2 mb-1 justify-between w-full">
          <h3 className="font-semibold text-gray-800 capitalize">{comment.name}</h3>
          {comment.website && (
            <a 
              href={comment?.website} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700"
            >
             Visit Website
            </a>
          )}
        </div>

        <div className="flex items-center gap-3 text-xs text-gray-500 mb-2">
          <span className="flex items-center gap-1">
            <FaUserAlt className="w-3 h-3" />
            {comment.email}
          </span>
          <span className="flex items-center gap-1">
            <FiClock className="w-3 h-3" />
            {formattedDate(comment.created_at)}
          </span>
        </div>
        <p className="text-gray-700">{comment?.message}</p>

      </div>
    </div>
          ))}
        </div>
      )}

      {/* Comment form */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Leave a Comment</h2>
        <form
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
          onSubmit={sendComment}
        >
          <input
            type="text"
            placeholder="Name*"
            className="border p-2 col-span-1"
            name="name"
            onChange={changetext}
            value={userData.name}
            required
          />
          <input
            type="email"
            placeholder="Email*"
            className="border p-2 col-span-1"
            name="email"
            onChange={changetext}
            value={userData.email}
            required
          />
          <input
            type="text"
            placeholder="Website"
            className="border p-2 col-span-1"
            name="website"
            onChange={changetext}
            value={userData.website}
          />
          <textarea
            placeholder="Message*"
            className="border p-2 col-span-full"
            rows={6}
            name="message"
            onChange={changetext}
            value={userData.message}
            required
          ></textarea>

         


          <button
            type="submit"
            disabled={loader}
            className="bg-[#e53935] border-2 border-[#e53935] w-max hover:bg-white hover:text-[#e53935] text-white px-5 py-2 col-span-full"
          >
            {loader ? "Loading..." : "Post Comment"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CommentSection;
