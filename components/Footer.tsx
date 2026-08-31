const links = [
  { label: "About", href: "#about" },
  { label: "Properties", href: "#properties" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

const companyLinks = [
  { label: "Careers", href: "#careers" },
  { label: "News", href: "#news" },
];

const SOCIALS = [
  { label: "Instagram", href: "#" },
  { label: "LinkedIn", href: "#" },
];

const EMAIL = "info@estatecore.com";
const PHONE = "+91 (798) 2500442";
const ADDRESS_FULL = "Suite 500\n123 Commerce Way\nNew York, NY 10001";

const buildMapUrl = () => {
  const fragments =
    "q=123+Commerce+Way%2C+New+York&z=18&output=embed&ll=40.7128,-74.0060";
  return `https://www.google.com/maps/embed?${fragments}`;
};

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container-shell">
        <div className="footer-main">
          <div className="footer-brand flex-col">
            <a href="#" className="footer-logo">
              J.K<span>Estate</span>
            </a>

            <p className="footer-description">
              Refining the standard of commercial real estate. We believe the
              space you work in is more than a location — it is part of what
              makes your business possible.
            </p>

            <a
              href={`mailto:${EMAIL}`}
              className="footer-link mt-2"
            >
              {EMAIL}
            </a>

            <a href={`tel:${PHONE}`} className="footer-link">
              {PHONE}
            </a>

            <ul className="footer-socials">
              {SOCIALS.map((social) => (
                <li key={social.href}>
                  <a
                    href={social.href}
                    className="social-link"
                    aria-label={social.label}
                  >
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="footer-heading">Explore</h3>

            <ul className="footer-links">
              {links.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="footer-link">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="footer-heading">Visit</h3>

            <div className="footer-map-list">
              <div className="map-map-card">
                <iframe
                  title="J.K Estate office location on the map"
                  src={buildMapUrl()}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="map-frame"
                  aria-hidden="true"
                />
              </div>

              <div className="map-caption">
                <span className="map-caption-pin" aria-hidden="true">
                  ◉
                </span>
                <span className="map-caption-address">
                  {ADDRESS_FULL.split("\n").map((line) => (
                    <span key={line} className="map-caption-line">
                      {line}
                    </span>
                  ))}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} J.K Estate. All rights
            reserved.
          </p>

          <p>Built around better spaces.</p>
        </div>
      </div>
    </footer>
  );
}
