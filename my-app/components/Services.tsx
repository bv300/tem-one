import { SectionTitle } from "./shared";
import "./Services.css";

export function ServicesSection() {
  return (
    <section id="services" className="services-section">
      <div className="services-container">
        {/* heading row with the annotation on the right */}
        <div className="services-header">
          <SectionTitle>my services</SectionTitle>

          {/* handwritten-style annotation with a curved arrow */}
          <div className="services-annotation">
            <span className="services-annotation-text">
              Arrangement position change to animation
            </span>
            <svg
              viewBox="0 0 26 30"
              className="services-annotation-icon"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 24 C 3 10 10 2 22 6"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
              <path
                d="M14 2 L23 6 L18 14"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        {/* cards + curved arrows */}
        <div className="services-content-wrapper">
          <div className="services-scroll-area">
            {/* curved annotation arrows */}
            <svg
              viewBox="0 0 1000 180"
              preserveAspectRatio="none"
              className="services-curved-arrows"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* heading -> card 1 */}
              <path
                d="M 120 6 C 150 30 40 60 165 68"
                fill="none"
                stroke="#2a2a2a"
                strokeOpacity="0.55"
                strokeWidth="1.8"
                strokeLinecap="round"
                vectorEffect="non-scaling-stroke"
              />
              <path
                d="M 158 59 L 165 68 L 158 75"
                fill="none"
                stroke="#2a2a2a"
                strokeOpacity="0.55"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                vectorEffect="non-scaling-stroke"
              />
              {/* curved arrow over cards 1–2 */}
              <path
                d="M 220 60 C 300 6 540 6 700 44 C 770 62 810 58 838 62"
                fill="none"
                stroke="#2a2a2a"
                strokeOpacity="0.5"
                strokeWidth="1.8"
                strokeLinecap="round"
                vectorEffect="non-scaling-stroke"
              />
              <path
                d="M 826 54 L 837 62 L 828 71"
                fill="none"
                stroke="#2a2a2a"
                strokeOpacity="0.5"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                vectorEffect="non-scaling-stroke"
              />
            </svg>

            {/* three service cards (subtle position animation) */}
            <div className="services-cards-grid">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="service-card animate-card-drift"
                  style={{ animationDelay: `${i * 0.7}s` }}
                >
                  {i === 1 && (
                    <span className="service-card-text">
                      water mark →
                    </span>
                  )}
                </div>
              ))}
            </div>

            {/* label beneath the cards */}
            <div className="services-labels-grid">
              <span />
              <span />
              <span className="services-label">
                position animation
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
