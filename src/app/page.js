import Hero from "./components/Hero";
import TopStoriesSection from "./components/TopStoriesSection";
import EditorPicksCarousel from "./components/Editors";
import MoreNewsSection from "./components/Morenews";
import InternationalNewsSection from "./components/InternationalNewsSection";
import Nav from "./components/Nav";
import Script from "next/script";
import AdBanner from "./components/AdBanner";

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

      

      <AdBanner slot="6977336533" />

      <TopStoriesSection />
            <AdBanner slot="6977336533" />

      <EditorPicksCarousel />

      
      <AdBanner slot="6977336533" />

      <MoreNewsSection />
      <InternationalNewsSection />
            <AdBanner slot="6977336533" />

    </>
  );
}
