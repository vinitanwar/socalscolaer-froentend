import Hero from "./components/Hero";
import TopStoriesSection from "./components/TopStoriesSection";
import EditorPicksCarousel from "./components/Editors";
import MoreNewsSection from "./components/Morenews";
import InternationalNewsSection from "./components/InternationalNewsSection";
import Nav from "./components/Nav";
import Script from "next/script";

export default function Home() {
  return (
    <>
      <div className="bg-white shadow-sm px-5 lg:px-24">
        <div className="container mx-auto overflow-x-auto scrollbar-hide">
          <ul className="flex space-x-4 justify-between whitespace-nowrap">
            <Nav />
          </ul>
        </div>
      </div>

      <Hero />

      {/* Google AdSense Script */}
      <Script
        async
        strategy="afterInteractive"
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2655358665967568"
        crossOrigin="anonymous"
      />

      {/* Ad Banner */}
      <div
        className="my-4"
        dangerouslySetInnerHTML={{
          __html: `
            <ins class="adsbygoogle"
                 style="display:block"
                 data-ad-client="ca-pub-2655358665967568"
                 data-ad-slot="6977336533"
                 data-ad-format="auto"
                 data-full-width-responsive="true"></ins>
            <script>
                 (adsbygoogle = window.adsbygoogle || []).push({});
            </script>
          `,
        }}
      />

      <TopStoriesSection />
      <EditorPicksCarousel />

      {/* Another Ad Banner */}
      <div
        className="my-4"
        dangerouslySetInnerHTML={{
          __html: `
            <ins class="adsbygoogle"
                 style="display:block"
                 data-ad-client="ca-pub-2655358665967568"
                 data-ad-slot="6977336533"
                 data-ad-format="auto"
                 data-full-width-responsive="true"></ins>
            <script>
                 (adsbygoogle = window.adsbygoogle || []).push({});
            </script>
          `,
        }}
      />

      <MoreNewsSection />
      <InternationalNewsSection />
    </>
  );
}
