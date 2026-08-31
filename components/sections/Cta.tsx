import React from 'react'

const Cta = () => {
  return (
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
  )
}

export default Cta