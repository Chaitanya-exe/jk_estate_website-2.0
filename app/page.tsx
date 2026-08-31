import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import Properties from "@/components/sections/Properties";
import Services from "@/components/sections/Services";
import Footer from "@/components/Footer";
import ScrollStory from "@/components/sections/ScrollStory";
import Section from "@/components/sections/Section";
import Cta from "@/components/sections/Cta";

export default function Home() {
  return (
    <div className="site-shell">
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />
      <div className="ambient ambient-three" aria-hidden="true" />

      <Navbar />

      <main>
        <Hero />
        <Stats />

        <Section />
        
        {/* <ScrollStory /> */}
        <Properties />
        <Services />

        <Cta />
      </main>

      <Footer />
    </div>
  );
}