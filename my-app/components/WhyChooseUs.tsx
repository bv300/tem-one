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
            {[
              "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80",
              "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=600&q=80",
              "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80",
              "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80"
            ].map((src, i) => (
              <div key={i} className="wcu-grid-item">
                <img src={src} alt="Feature highlight" className="wcu-grid-img" />
              </div>
            ))}
          </div>

          {/* crosshair at the centre */}
          <div className="wcu-crosshair-h" />
          <div className="wcu-crosshair-v" />

          {/* four small nested placeholders at the intersection */}
          <div className="wcu-nested-wrapper">
            {["Quality", "Speed", "Trust", "24/7"].map((text, i) => (
              <div key={i} className="wcu-nested-item">
                <span className="wcu-nested-text">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
