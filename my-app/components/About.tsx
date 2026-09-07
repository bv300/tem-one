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

        <div className="about-grid">
          {/* Left Side: Overlapping Images */}
          <div className="about-images">
            <div className="about-img about-img-1">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=600&q=80"
                alt="Team collaboration"
                className="about-real-img"
              />
            </div>
            <div className="about-img about-img-2">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80"
                alt="Creative workspace"
                className="about-real-img"
              />
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="about-content">
            <SectionTitle>About US</SectionTitle>
            <p className="about-description">
              Welcome to our platform. We specialize in delivering high-quality 
              solutions tailored to your specific needs. Our expert team combines 
              creativity and technology to build modern, scalable, and beautifully 
              designed web experiences.
            </p>
            <button className="about-btn">Discover More</button>
          </div>
        </div>
      </div>
    </section>
  );
}
