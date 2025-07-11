import Hero from "./components/Hero";
import TopStoriesSection from "./components/TopStoriesSection";
import EditorPicksCarousel from "./components/Editors";
import MoreNewsSection from "./components/Morenews";
import InternationalNewsSection from "./components/InternationalNewsSection";
import Nav from "./components/Nav";

export default function Home() {
  return (
    <>
      <div className="bg-white shadow-sm not-[]: px-5 lg:px-24 ">
        <div className="container mx-auto  overflow-x-auto scrollbar-hide">
          <ul className="flex space-x-4 justify-between whitespace-nowrap ">
            <Nav />
          </ul>
        </div>
      </div>
      <Hero />
      <TopStoriesSection />
      <EditorPicksCarousel />
      <MoreNewsSection />
      <InternationalNewsSection />
    </>
  );
}
