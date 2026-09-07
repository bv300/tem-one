import { SectionTitle } from "./shared";
import "./Contact.css";

export function ContactSection() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        {/* watermark annotation, top-right */}
        <div className="contact-watermark">
          <p className="contact-watermark-title">Demo</p>
          <p className="contact-watermark-subtitle">water mark → Demo</p>
        </div>

        <SectionTitle>contact</SectionTitle>

        <div className="contact-content">
          {/* find us · CALL US · map */}
          <div className="contact-grid">
            {/* find us */}
            <div className="contact-card">
              <svg
                className="contact-icon"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.8}
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              <span className="contact-card-text">find us</span>
            </div>

            {/* CALL US */}
            <div className="contact-card">
              <svg
                className="contact-icon"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.8}
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              <span className="contact-card-title">
                CALL US
              </span>
            </div>

            {/* map card */}
            <div className="map-card">
              <svg
                viewBox="0 0 400 300"
                preserveAspectRatio="xMidYMid slice"
                className="map-svg"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="400" height="300" fill="#eaecdd" />
                {/* river */}
                <path d="M -20 230 C 60 222 90 150 180 138 C 240 130 300 80 330 -20" fill="none" stroke="#9ec3e3" strokeWidth="26" strokeLinecap="round" />
                <path d="M -20 230 C 60 222 90 150 180 138 C 240 130 300 80 330 -20" fill="none" stroke="#bcd7ec" strokeWidth="12" strokeLinecap="round" />
                {/* parks */}
                <ellipse cx="96" cy="62" rx="52" ry="30" fill="#c3dab4" />
                <ellipse cx="330" cy="200" rx="60" ry="34" fill="#c3dab4" transform="rotate(-10 330 200)" />
                <ellipse cx="210" cy="266" rx="46" ry="24" fill="#bfd7b0" />
                <ellipse cx="60" cy="150" rx="28" ry="16" fill="#c8ddbb" />
                {/* blocks */}
                <rect x="120" y="30" width="34" height="24" rx="3" fill="#dcded0" />
                <rect x="180" y="70" width="26" height="22" rx="3" fill="#dcded0" />
                <rect x="250" y="150" width="40" height="26" rx="3" fill="#dcded0" />
                <rect x="40" y="80" width="24" height="30" rx="3" fill="#dcded0" />
                <rect x="60" y="270" width="30" height="20" rx="3" fill="#dcded0" />
                {/* streets */}
                {[
                  [70, 0, 70, 300],
                  [165, 0, 165, 300],
                  [240, 0, 240, 300],
                  [355, 0, 355, 300],
                  [0, 110, 400, 110],
                  [0, 190, 400, 190],
                  [0, 258, 400, 258],
                ].map((l, idx) => (
                  <g key={idx}>
                    <line x1={l[0]} y1={l[1]} x2={l[2]} y2={l[3]} stroke="#c9cbbb" strokeWidth="13" />
                    <line x1={l[0]} y1={l[1]} x2={l[2]} y2={l[3]} stroke="#ffffff" strokeWidth="9" />
                  </g>
                ))}
                {/* diagonal avenues */}
                <line x1="0" y1="300" x2="400" y2="20" stroke="#c9cbbb" strokeWidth="13" />
                <line x1="0" y1="300" x2="400" y2="20" stroke="#ffffff" strokeWidth="9" />
                <line x1="320" y1="300" x2="400" y2="230" stroke="#c9cbbb" strokeWidth="13" />
                <line x1="320" y1="300" x2="400" y2="230" stroke="#ffffff" strokeWidth="9" />
              </svg>
            </div>
          </div>

          {/* email row */}
          <div className="email-row">
            <div className="email-icon-wrapper">
              <svg
                className="email-icon"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.8}
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              <span className="email-label">
                EMAIL
              </span>
            </div>
            <input
              type="email"
              placeholder="example@gmail.com"
              aria-label="Email address"
              className="email-input"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
