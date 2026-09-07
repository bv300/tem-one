import { SectionTitle } from "./shared";
import "./Contact.css";

export function ContactSection() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        {/* Header row */}
        <div className="contact-header-row">
          <div className="contact-title-wrap">
            {/* <svg className="contact-wavy-arrow" viewBox="0 0 100 20" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M0,10 Q5,0 10,10 T20,10 T30,10 T40,10 T50,10 T60,10 T70,10 T80,10 L85,5 M80,10 L85,15" strokeLinecap="round" strokeLinejoin="round"/>
            </svg> */}
            <SectionTitle>contact</SectionTitle>
          </div>
        </div>

        <div className="contact-content">
          <div className="contact-grid-layout">
            {/* Left Column: Email & Buttons */}
            <div className="contact-left-col">
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
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                  <span className="email-label">EMAIL</span>
                </div>
                <div className="email-text">example@gmail.com</div>
              </div>

              <div className="contact-buttons-row">
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
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                  <span className="contact-card-title">CALL US</span>
                </div>

                {/* WhatsApp */}
                <div className="contact-card">
                  <svg
                    className="contact-icon"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.8}
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
                    />
                  </svg>
                  <span className="contact-card-title">WhatsApp</span>
                </div>

                {/* Instagram */}
                <div className="contact-card">
                  <svg
                    className="contact-icon"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.8}
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <rect
                      width="14"
                      height="14"
                      x="5"
                      y="5"
                      rx="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <circle
                      cx="12"
                      cy="12"
                      r="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <circle cx="16.5" cy="7.5" r="0.5" fill="currentColor" />
                  </svg>
                  <span className="contact-card-title">Instagram</span>
                </div>
              </div>

              {/* find us location row */}
              <div className="email-row" style={{ flexShrink: 0 }}>
                <div className="email-icon-wrapper">
                  <svg
                    className="email-icon"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.8}
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                  <span className="email-label">FIND US</span>
                </div>
                <div className="email-text">Kerala, India</div>
              </div>
            </div>

            {/* Right Column: Map */}
            <div className="contact-right-col">
              <div className="map-card">
                <svg
                  viewBox="0 0 400 300"
                  preserveAspectRatio="xMidYMid slice"
                  className="map-svg"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="400" height="300" fill="#F7F9FC" />
                  <path
                    d="M -20 230 C 60 222 90 150 180 138 C 240 130 300 80 330 -20"
                    fill="none"
                    stroke="#0B2545"
                    strokeWidth="26"
                    strokeLinecap="round"
                    opacity="0.22"
                  />
                  <path
                    d="M -20 230 C 60 222 90 150 180 138 C 240 130 300 80 330 -20"
                    fill="none"
                    stroke="#EF8354"
                    strokeWidth="12"
                    strokeLinecap="round"
                  />
                  <ellipse
                    cx="96"
                    cy="62"
                    rx="52"
                    ry="30"
                    fill="#EF8354"
                    opacity="0.35"
                  />
                  <ellipse
                    cx="330"
                    cy="200"
                    rx="60"
                    ry="34"
                    fill="#EF8354"
                    opacity="0.35"
                    transform="rotate(-10 330 200)"
                  />
                  <ellipse
                    cx="210"
                    cy="266"
                    rx="46"
                    ry="24"
                    fill="#EF8354"
                    opacity="0.3"
                  />
                  <ellipse
                    cx="60"
                    cy="150"
                    rx="28"
                    ry="16"
                    fill="#EF8354"
                    opacity="0.25"
                  />
                  <rect
                    x="120"
                    y="30"
                    width="34"
                    height="24"
                    rx="3"
                    fill="#0B2545"
                    opacity="0.12"
                  />
                  <rect
                    x="180"
                    y="70"
                    width="26"
                    height="22"
                    rx="3"
                    fill="#0B2545"
                    opacity="0.12"
                  />
                  <rect
                    x="250"
                    y="150"
                    width="40"
                    height="26"
                    rx="3"
                    fill="#0B2545"
                    opacity="0.12"
                  />
                  <rect
                    x="40"
                    y="80"
                    width="24"
                    height="30"
                    rx="3"
                    fill="#0B2545"
                    opacity="0.12"
                  />
                  <rect
                    x="60"
                    y="270"
                    width="30"
                    height="20"
                    rx="3"
                    fill="#0B2545"
                    opacity="0.12"
                  />
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
                      <line
                        x1={l[0]}
                        y1={l[1]}
                        x2={l[2]}
                        y2={l[3]}
                        stroke="#0B2545"
                        strokeWidth="13"
                        opacity="0.2"
                      />
                      <line
                        x1={l[0]}
                        y1={l[1]}
                        x2={l[2]}
                        y2={l[3]}
                        stroke="#F7F9FC"
                        strokeWidth="9"
                      />
                    </g>
                  ))}
                  <line
                    x1="0"
                    y1="300"
                    x2="400"
                    y2="20"
                    stroke="#0B2545"
                    strokeWidth="13"
                    opacity="0.2"
                  />
                  <line
                    x1="0"
                    y1="300"
                    x2="400"
                    y2="20"
                    stroke="#F7F9FC"
                    strokeWidth="9"
                  />
                  <line
                    x1="320"
                    y1="300"
                    x2="400"
                    y2="230"
                    stroke="#0B2545"
                    strokeWidth="13"
                    opacity="0.2"
                  />
                  <line
                    x1="320"
                    y1="300"
                    x2="400"
                    y2="230"
                    stroke="#F7F9FC"
                    strokeWidth="9"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
