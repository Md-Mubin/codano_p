import Blog from "@/Components/Blog";
import Contact from "@/Components/Contact";
import HeroSection from "@/Components/HeroSection";
import NextProject from "@/Components/NextProject";
import Process from "@/Components/Process";
import Services from "@/Components/Services";
import Work from "@/Components/Work";

export default function Home() {
  return (
    <>
      <HeroSection/>
      <Services/>
      <Process/>
      <Work/>
      <Blog/>
      <NextProject/>
      <Contact/>
    </>
  );
}
