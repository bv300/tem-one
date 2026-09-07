import "./Footer.css";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Demo 1 */}
          <div className="footer-brand">
            <p className="footer-brand-title">Demo 1</p>
          </div>

          {/* Quick Link */}
          <div className="footer-links">
            <p className="footer-links-title">Quick Link</p>
            <ul className="footer-links-list">
              {[
                { label: "Home", href: "#hero" },
                { label: "About us", href: "#about" },
                { label: "service", href: "#services" },
                { label: "contact", href: "#contact" },
              ].map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="footer-link">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Associate company */}
          <div className="footer-company">
            <p className="footer-company-title">OUR Associate company</p>
            <p className="footer-company-desc">
              nm example
              <br />
              comm
            </p>
          </div>
        </div>

        <div className="footer-copyright">
          @ copyright Reserved
        </div>
      </div>
    </footer>
  );
}
