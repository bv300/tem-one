import { SectionTitle } from "./shared";
import "./Services.css";

export function ServicesSection() {
  return (
    <section id="services" className="services-section">
      <div className="services-container">
        {/* heading row with the annotation on the right */}
        <div className="services-header">
          <SectionTitle>my services</SectionTitle>
        </div>

        {/* stacked card swapping animation */}
        <div className="services-content-wrapper">
          <div className="services-stacked-rows">
            {/* Row 1 */}
            <div className="stacked-deck">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className={`stacked-card stacked-card-${i + 1}`}
                  style={{ animationDelay: `${i * 3}s` }}
                >
                  <span className="service-card-text">Service {i + 1}</span>
                </div>
              ))}
            </div>

            {/* Row 2 */}
            <div className="stacked-deck">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className={`stacked-card stacked-card-${i + 1}`}
                  style={{ animationDelay: `${i * 3}s` }}
                >
                  <span className="service-card-text">Feature {i + 1}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
