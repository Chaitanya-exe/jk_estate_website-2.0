import React from 'react'

const Section = () => {
  return (
    <section id="about" className="section-shell -mt-0.5">
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
  )
}

export default Section