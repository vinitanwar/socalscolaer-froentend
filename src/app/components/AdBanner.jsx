"use client"; // required because we use useEffect
import { useEffect } from "react";
import Script from "next/script";

export default function AdBanner({ slot }) {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error("Adsense error:", e);
    }
  }, []);

  return (
    <>
      {/* Load AdSense library only once */}
      <Script
        async
        strategy="afterInteractive"
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2655358665967568"
        crossOrigin="anonymous"
      />
      {/* Ad slot */}
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-2655358665967568"
        data-ad-slot={slot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </>
  );
}
