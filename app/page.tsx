import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import Properties from "@/components/sections/Properties";
import Services from "@/components/sections/Services";
import Footer from "@/components/Footer";
import ScrollStory from "@/components/sections/ScrollStory";

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

        <section id="about" className="section-shell">
          <div className="container-shell">
            <div className="about-grid">
              <div>
                <span className="eyebrow">The J.K Estate Standard</span>

                <h2 className="section-title mt-5">
                  Spaces chosen with
                  <span className="text-gradient"> intention.</span>
                </h2>
              </div>

              <div className="about-copy">
                <p>
                  We help ambitious businesses find, acquire, lease, and
                  manage commercial spaces that support where they are today
                  and where they want to go tomorrow.
                </p>

                <p>
                  Our approach combines local market knowledge, disciplined
                  analysis, and a deeply personal understanding of what makes
                  a property work for a business.
                </p>

                <div className="about-points">
                  <div>
                    <span>01</span>
                    <p>Market intelligence before every recommendation.</p>
                  </div>

                  <div>
                    <span>02</span>
                    <p>Commercial spaces selected around your objectives.</p>
                  </div>

                  <div>
                    <span>03</span>
                    <p>Long-term relationships over short-term transactions.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <ScrollStory />
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