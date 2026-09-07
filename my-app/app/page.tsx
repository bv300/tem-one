/* ================================================================== */
/*  Demo 1 — full wireframe recreation of the reference image         */
/*  Hero drawn on a 1008×406 grid mapped from the reference.          */
/* ================================================================== */

import "./page.css";
import { WireframeHeader } from "../components/Header";
import { WireframeHero } from "../components/Hero";
import { AboutSection } from "../components/About";
import { ServicesSection } from "../components/Services";
import { WhyChooseUsSection } from "../components/WhyChooseUs";
import { ContactSection } from "../components/Contact";
import { Footer } from "../components/Footer";

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function HomePage() {
  return (
    <main className="main-layout">
      <div className="main-wrapper">
        <WireframeHeader />

        <section id="hero" className="hero-section">
          <WireframeHero />
        </section>

        <AboutSection />
        <ServicesSection />
        <WhyChooseUsSection />
        <ContactSection />
        <Footer />
      </div>
    </main>
  );
}
