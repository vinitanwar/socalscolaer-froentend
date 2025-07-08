"use client";
import React, { useState } from "react";
import Footer from "./Footer";
import SidebarMenu from "./Sidebar";
import Navbar from "./Navbar";
import ReduxProvider from "../ReduxProvider";

export default function CustomeLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <ReduxProvider>
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar - Fixed on the left */}
      <div
        className={`
          ${isSidebarOpen ? "w-full lg:w-[20%]" : "w-0"}
          transition-all duration-300
          bg-white shadow-lg
          fixed top-0 lg:top-0 left-0  z-[150] overflow-y-auto h-full  scrollbar-hide 
        `}
      >
        {isSidebarOpen && <SidebarMenu closeSidebar={closeSidebar} />}
      </div>

      {/* Right Content - fills remaining space */}
      <div
        className={`
          ${isSidebarOpen ? "lg:ml-[20%]" : "ml-0"}
          w-full h-full overflow-y-auto
          transition-all duration-300
          flex flex-col
        `}
      >
        <Navbar toggleSidebar={toggleSidebar} />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </div>
    </ReduxProvider>
  );
}
