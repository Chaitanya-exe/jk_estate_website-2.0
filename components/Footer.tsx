const links = [
  { label: "About", href: "#about" },
  { label: "Properties", href: "#properties" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container-shell">
        <div className="footer-main">
          <div className="footer-brand">
            <a href="#" className="footer-logo">
              ESTATE<span>CORE</span>
            </a>

            <p className="footer-description">
              Refining the standard of commercial real estate. We believe the
              space you work in is more than a location — it is part of what
              makes your business possible.
            </p>
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
            <h3 className="footer-heading">Contact</h3>

            <div className="footer-contact">
              <span>123 Commerce Way</span>
              <span>Suite 500</span>
              <span>New York, NY 10001</span>

              <a
                href="mailto:info@estatecore.com"
                className="footer-link mt-2"
              >
                info@estatecore.com
              </a>

              <a href="tel:+12125550184" className="footer-link">
                +1 (212) 555-0184
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} EstateCore Real Estate. All rights
            reserved.
          </p>

          <p>Built around better spaces.</p>
        </div>
      </div>
    </footer>
  );
}