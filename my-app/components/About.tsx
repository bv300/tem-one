import { SectionTitle } from "./shared";
import "./About.css";

export function AboutSection() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        {/* watermark, top-right */}
        <div className="watermark">
          <p className="watermark-text">
            Demo
          </p>
        </div>

        <div className="about-content">
          <SectionTitle>About US</SectionTitle>
          <p className="about-description">
            demo
          </p>
        </div>
      </div>
    </section>
  );
}
