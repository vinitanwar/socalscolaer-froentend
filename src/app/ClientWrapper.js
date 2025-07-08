"use client";

import { useEffect, useState } from "react";
import CustomeLayout from "./components/CustomeLayout";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Navbar from "./components/Navbar";

export default function ClientWrapper({ children }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return !isMobile ? (
    <CustomeLayout>{children}</CustomeLayout>
  ) : (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
