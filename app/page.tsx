import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import Properties from "@/components/sections/Properties";
import Services from "@/components/sections/Services";
import Footer from "@/components/Footer";
import ScrollStory from "@/components/sections/ScrollStory";
import Section from "@/components/sections/Section";

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

        <section id="contact" className="cta-section">
          <div className="container-shell">
            <div className="cta-card">
              <div className="cta-content">
                <span className="eyebrow eyebrow-light">
                  Start a conversation
                </span>

                <h2 className="cta-title">
                  The right space can change
                  <span> what comes next.</span>
                </h2>

                <p>
                  Tell us what you are looking for and let&apos;s find the
                  opportunity that fits.
                </p>
              </div>

              <a
                href="mailto:jkestate99@gmail.com"
                className="button button-light"
              >
                Speak with an advisor
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}