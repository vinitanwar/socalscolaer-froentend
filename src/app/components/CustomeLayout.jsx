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
      <div className="flex flex-col h-screen overflow-hidden relative">
        {/* Sidebar - Overlay Style */}
        <div
          className={`fixed top-0 left-0 z-[150] h-full w-[80%] sm:w-[60%] md:w-[40%] lg:w-[20%] bg-white shadow-lg overflow-y-auto transition-transform duration-300 scrollbar-hide ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`} 
        >
          <SidebarMenu closeSidebar={closeSidebar} />
        </div>

        {/* Overlay backdrop when sidebar is open */}
        {/* {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-0.5 z-[100]"
            
          ></div>   
        )} */}

        {/* Main Content */}
        <div className="flex flex-col flex-1 h-full overflow-y-auto relative z-10">
          <Navbar toggleSidebar={toggleSidebar} />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </div>
    </ReduxProvider>
  );
}
