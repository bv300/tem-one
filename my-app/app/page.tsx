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
import { TopButton } from "../components/shared";
import { ScrollReveal } from "../components/ScrollReveal";

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function HomePage() {
  return (
    <main className="main-layout">
      <div className="main-wrapper">
        <WireframeHeader />

        <section id="hero" className="hero-section">
          <ScrollReveal
            className="hero-reveal"
            variant="fade-down"
            duration="slow"
          >
            <WireframeHero />
          </ScrollReveal>
        </section>

        <AboutSection />
        <ServicesSection />
        <WhyChooseUsSection />
        <ContactSection />
        <Footer />
        <TopButton />
      </div>
    </main>
  );
}
