import { SectionTitle } from "./shared";
import "./WhyChooseUs.css";

export function WhyChooseUsSection() {
  return (
    <section id="why-us" className="wcu-section">
      <div className="wcu-container">
        <SectionTitle>WHY CHOOSE US</SectionTitle>

        {/* large gray content grid split by a thin black cross */}
        <div className="wcu-grid-wrapper">
          <div className="wcu-main-grid">
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className="wcu-grid-item"
              >
                <span className="wcu-item-text">
                  image കൊടുക്കുക
                </span>
              </div>
            ))}
          </div>

          {/* crosshair at the centre */}
          <div className="wcu-crosshair-h" />
          <div className="wcu-crosshair-v" />

          {/* four small nested placeholders at the intersection */}
          <div className="wcu-nested-wrapper">
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className="wcu-nested-item"
              >
                <span className="wcu-nested-text">
                  image
                  <br />
                  കൊടുക്കുക
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
