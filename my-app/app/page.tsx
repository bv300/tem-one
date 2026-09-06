"use client";

import { useEffect, useState, useRef } from "react";

/* ------------------------------------------------------------------ */
/*  Intersection Observer hook                                          */
/* ------------------------------------------------------------------ */
function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setInView(true); obs.unobserve(el); }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

/* ================================================================== */
/*  NAVIGATION BAR                                                      */
/* ================================================================== */
function NavigationBar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled ? "bg-white/95 shadow-sm border-slate-200" : "bg-white border-slate-200"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Left: Brand */}
        <span className="text-3xl font-bold text-slate-900 tracking-tight">Demo 1</span>

        {/* Center: D logo */}
        <div className="w-10 h-10 rounded-full border-2 border-slate-700 flex items-center justify-center font-bold text-slate-800 text-lg">
          D
        </div>

        {/* Right: Nav links */}
        <nav className="flex items-center gap-1 text-sm font-medium text-slate-600">
          <a href="#hero" className="hover:text-slate-900 transition-colors">Home</a>
          <span className="text-slate-400 mx-1">→</span>
          <a href="#about" className="hover:text-slate-900 transition-colors">About us</a>
          <span className="text-slate-400 mx-1">→</span>
          <a href="#services" className="hover:text-slate-900 transition-colors">service</a>
          <span className="text-slate-400 mx-1">→</span>
          <a href="#contact" className="hover:text-slate-900 transition-colors">contact</a>
        </nav>
      </div>
    </header>
  );
}

/* ================================================================== */
/*  HERO SECTION                                                        */
/* ================================================================== */
function HeroSection() {
  const { ref, inView } = useInView(0.05);

  return (
    <section
      id="hero"
      ref={ref}
      className="bg-slate-100 border-b border-slate-200 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-6 py-12 grid grid-cols-2 gap-0 items-stretch min-h-[340px]">

        {/* LEFT COLUMN */}
        <div className={`flex flex-col justify-center space-y-4 pr-8 transition-all duration-700 ${inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"}`}>
          {/* Arrows scatter */}
          <div className="relative h-12 w-48">
            <span className="absolute top-0 left-4 text-slate-600 text-lg font-bold rotate-[-30deg]">↗</span>
            <span className="absolute top-0 left-10 text-slate-600 text-lg font-bold rotate-[20deg]">↗</span>
            <span className="absolute top-1 left-16 text-slate-600 text-lg font-bold rotate-[-10deg]">↖</span>
            <span className="absolute top-0 left-24 text-slate-600 text-lg font-bold rotate-[35deg]">↗</span>
            <span className="absolute top-2 left-32 text-slate-600 text-lg font-bold rotate-[-25deg]">↙</span>
          </div>

          {/* test label */}
          <p className="font-black text-slate-800 text-base -mt-2">test</p>

          {/* Malayalam headline */}
          <h1 className="text-2xl font-extrabold text-slate-900 leading-snug">
            എന്താണ് ബിസിനസ്സ് അറിയാൻ
          </h1>

          {/* Question marks */}
          <div className="flex items-center gap-3 text-slate-700">
            {["↓","↓","↓","↓","↓"].map((a, i) => (
              <span key={i} className="text-base text-slate-500">{a}</span>
            ))}
          </div>
          <div className="flex items-center gap-4 text-xl font-bold text-slate-700">
            <span>?</span><span>?</span><span>?</span><span>?</span><span>?</span>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className={`relative flex flex-col justify-center transition-all duration-700 delay-200 ${inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6"}`}>

          {/* Keywords top */}
          <div className="flex items-end justify-end gap-3 mb-3">
            {["↑","↑","↑","↑","↑","↑"].map((a,i) => (
              <span key={i} className="text-slate-600 font-bold text-lg">{a}</span>
            ))}
            <span className="text-sm font-semibold text-slate-600 ml-1">keywords</span>
          </div>

          {/* Big Chevron/Arrow shape — striped */}
          <div className="relative flex items-center justify-center my-2">
            <svg viewBox="0 0 280 160" className="w-full max-w-xs" xmlns="http://www.w3.org/2000/svg">
              {/* Striped chevron */}
              <defs>
                <pattern id="chevStripe" patternUnits="userSpaceOnUse" width="10" height="10" patternTransform="rotate(45)">
                  <rect width="5" height="10" fill="#64748b" opacity="0.5"/>
                  <rect x="5" width="5" height="10" fill="#94a3b8" opacity="0.2"/>
                </pattern>
              </defs>
              {/* Chevron shape */}
              <polygon
                points="0,0 160,0 280,80 160,160 0,160 120,80"
                fill="url(#chevStripe)"
                stroke="#475569"
                strokeWidth="1.5"
              />
              {/* Inner outline chevron */}
              <polygon
                points="20,20 150,20 250,80 150,140 20,140 130,80"
                fill="none"
                stroke="#64748b"
                strokeWidth="1.5"
                opacity="0.5"
              />
            </svg>
          </div>

          {/* Keywords middle right */}
          <div className="flex items-center justify-end mt-2">
            <span className="text-sm font-semibold text-slate-600">keywords</span>
          </div>
        </div>

      </div>
    </section>
  );
}

/* ================================================================== */
/*  ABOUT US SECTION                                                    */
/* ================================================================== */
function AboutSection() {
  const { ref, inView } = useInView();

  return (
    <section
      id="about"
      ref={ref}
      className="relative bg-white border-b border-slate-200 py-12 overflow-hidden"
    >
      {/* Watermark label + text */}
      <div className="absolute right-8 top-6 text-right pointer-events-none select-none">
        <p className="text-xs text-slate-400 font-medium">water mark</p>
        <p className="text-xs text-slate-400">↓</p>
        <p className="text-[5rem] font-black text-slate-900 opacity-5 leading-none">Demo</p>
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          {/* Section header */}
          <div className="flex items-center gap-3 mb-3">
            <span className="text-slate-700 text-xl font-bold">〰→</span>
            <h2 className="text-3xl font-extrabold text-slate-900">About US</h2>
          </div>
          <p className="text-base text-slate-500 ml-10">demo</p>
        </div>
      </div>
    </section>
  );
}

/* ================================================================== */
/*  SERVICES SECTION                                                    */
/* ================================================================== */
function ServicesSection() {
  const { ref, inView } = useInView();

  return (
    <section
      id="services"
      ref={ref}
      className="relative bg-slate-50 border-b border-slate-200 py-12 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className={`flex items-center gap-3 mb-8 transition-all duration-500 ${inView ? "opacity-100" : "opacity-0"}`}>
          <span className="text-slate-700 text-xl font-bold">〰→</span>
          <h2 className="text-3xl font-extrabold text-slate-900">my services</h2>
        </div>

        {/* Layout: cards left + labels right */}
        <div className="flex gap-6 items-start">

          {/* Service Cards — 3 blank white boxes */}
          <div className="flex gap-4 flex-1">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className={`flex-1 bg-white border border-slate-200 rounded-xl shadow-sm min-h-[140px] transition-all duration-500 hover:shadow-md hover:-translate-y-1 ${
                  inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: `${i * 120}ms` }}
              />
            ))}
          </div>

          {/* Right labels */}
          <div className="flex flex-col justify-between text-xs text-slate-400 self-stretch min-w-[120px] py-1">
            <div>
              <p className="font-semibold text-slate-500">Arrangement</p>
              <p>position</p>
              <p>change to animation</p>
              <span className="text-slate-400">→</span>
            </div>
            <div className="mt-auto text-right">
              <p className="text-slate-400">water mark →</p>
              <p className="text-slate-400 mt-4">position</p>
              <p className="text-slate-400">animation</p>
            </div>
          </div>
        </div>

        {/* Watermark arrow label */}
        <div className="mt-2 flex items-center gap-2 text-slate-300">
          <span className="text-sm">↓</span>
          <span className="text-sm">↙</span>
        </div>
      </div>
    </section>
  );
}

/* ================================================================== */
/*  WHY CHOOSE US                                                       */
/* ================================================================== */
function WhyChooseUsSection() {
  const { ref, inView } = useInView();

  return (
    <section
      id="why-us"
      ref={ref}
      className="bg-white border-b border-slate-200 py-12"
    >
      <div className="max-w-5xl mx-auto px-6">
        {/* Heading */}
        <div className={`flex items-center gap-3 mb-8 transition-all duration-500 ${inView ? "opacity-100" : "opacity-0"}`}>
          <span className="text-slate-700 text-xl font-bold">〰〰→</span>
          <h2 className="text-3xl font-extrabold text-slate-900">WHY CHOOSE US</h2>
        </div>

        {/* Image grid — large 2x2 with blank gray boxes, small ones overlapping center */}
        <div
          className={`relative transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {/* Outer grid */}
          <div className="grid grid-cols-2 gap-1 bg-slate-300 rounded-xl overflow-hidden">
            {/* Top-left */}
            <div className="bg-slate-400 h-48 flex items-center justify-center rounded-tl-xl">
              <div className="text-center">
                <p className="text-slate-600 text-sm font-medium italic">image</p>
                <p className="text-slate-700 font-bold text-sm">കൊടുക്കുക</p>
              </div>
            </div>
            {/* Top-right */}
            <div className="bg-slate-400 h-48 flex items-center justify-center rounded-tr-xl">
              <div className="text-center">
                <p className="text-slate-600 text-sm font-medium italic">image</p>
                <p className="text-slate-700 font-bold text-sm">കൊടുക്കുക</p>
              </div>
            </div>
            {/* Bottom-left */}
            <div className="bg-slate-500 h-48 flex items-center justify-center rounded-bl-xl">
              <div className="text-center">
                <p className="text-slate-300 text-sm font-medium italic">image</p>
                <p className="text-slate-200 font-bold text-sm">കൊടുക്കുക</p>
              </div>
            </div>
            {/* Bottom-right */}
            <div className="bg-slate-500 h-48 flex items-center justify-center rounded-br-xl">
              <div className="text-center">
                <p className="text-slate-300 text-sm font-medium italic">image</p>
                <p className="text-slate-200 font-bold text-sm">കൊടുക്കുക</p>
              </div>
            </div>
          </div>

          {/* Small overlapping boxes in center */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="grid grid-cols-2 gap-1">
              {[0,1,2,3].map((i) => (
                <div
                  key={i}
                  className="w-14 h-10 bg-slate-200 border border-slate-300 rounded shadow-sm flex items-center justify-center"
                >
                  <p className="text-[9px] text-slate-500 italic text-center leading-tight">image<br/>കൊടുക്കുക</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Watermark bottom right */}
        <div className="mt-2 text-right text-xs text-slate-400 space-y-0.5">
          <p>Demo</p>
          <p>water mark</p>
          <p>→ Demo</p>
        </div>
      </div>
    </section>
  );
}

/* ================================================================== */
/*  CONTACT SECTION                                                     */
/* ================================================================== */
function ContactSection() {
  const { ref, inView } = useInView();
  const [submitted, setSubmitted] = useState(false);

  return (
    <section
      id="contact"
      ref={ref}
      className="bg-slate-100 border-b border-slate-200 py-12"
    >
      <div className="max-w-5xl mx-auto px-6">
        {/* Heading */}
        <div className={`flex items-center gap-3 mb-8 transition-all duration-500 ${inView ? "opacity-100" : "opacity-0"}`}>
          <span className="text-slate-700 text-xl font-bold">〰→</span>
          <h2 className="text-3xl font-extrabold text-slate-900">contact</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">

          {/* Left — Cards + Email */}
          <div className={`space-y-4 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            {/* Find us + Call us row */}
            <div className="grid grid-cols-2 gap-4">
              {/* Find us */}
              <div className="bg-white border border-slate-200 rounded-2xl p-5 flex items-center gap-3 shadow-sm hover:border-slate-400 transition-colors">
                <div className="text-slate-600">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                </div>
                <span className="font-semibold text-slate-800 text-sm">find us</span>
              </div>

              {/* Call us */}
              <div className="bg-white border border-slate-200 rounded-2xl p-5 flex items-center gap-3 shadow-sm hover:border-slate-400 transition-colors">
                <div className="text-slate-600">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                </div>
                <span className="font-bold text-slate-800 text-sm uppercase tracking-wide">CALL US</span>
              </div>
            </div>

            {/* Email input row */}
            <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
              <form
                suppressHydrationWarning
                className="flex items-center"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                  setTimeout(() => setSubmitted(false), 3000);
                }}
              >
                {/* Email icon + label */}
                <div className="flex flex-col items-center justify-center px-4 py-4 border-r border-slate-100 min-w-[64px]">
                  <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                  <span className="text-[10px] font-bold uppercase text-slate-600 mt-1 tracking-wider">EMAIL</span>
                </div>

                <input
                  suppressHydrationWarning
                  type="email"
                  required
                  placeholder="example@gmail.com"
                  className="flex-1 px-4 py-4 text-sm text-slate-700 placeholder:text-slate-400 outline-none bg-transparent"
                />

                {submitted && (
                  <span className="px-4 text-emerald-600 font-bold text-sm">✓ Sent!</span>
                )}
              </form>
            </div>
          </div>

          {/* Right — Map placeholder */}
          <div className={`transition-all duration-700 delay-200 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            <div className="bg-slate-200 border border-slate-300 rounded-2xl overflow-hidden h-48 lg:h-full min-h-[160px] flex items-center justify-center relative">
              {/* Fake map grid lines */}
              <svg className="absolute inset-0 w-full h-full opacity-40" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="mapgrid" width="24" height="24" patternUnits="userSpaceOnUse">
                    <path d="M 24 0 L 0 0 0 24" fill="none" stroke="#94a3b8" strokeWidth="0.5"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#mapgrid)"/>
                {/* Some fake road lines */}
                <line x1="0" y1="60" x2="100%" y2="55" stroke="#94a3b8" strokeWidth="3"/>
                <line x1="80" y1="0" x2="75" y2="100%" stroke="#94a3b8" strokeWidth="2"/>
                <line x1="0" y1="110" x2="100%" y2="115" stroke="#94a3b8" strokeWidth="4"/>
                <line x1="160" y1="0" x2="155" y2="100%" stroke="#94a3b8" strokeWidth="2"/>
                <rect x="85" y="65" width="70" height="40" fill="#b0bec5" rx="2"/>
                <rect x="30" y="30" width="40" height="25" fill="#b0bec5" rx="2"/>
                <rect x="170" y="80" width="50" height="30" fill="#b0bec5" rx="2"/>
              </svg>
              {/* Pin */}
              <div className="relative z-10 flex flex-col items-center gap-1">
                <div className="w-5 h-5 bg-slate-600 rounded-full border-2 border-white shadow-md"/>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

/* ================================================================== */
/*  FOOTER                                                              */
/* ================================================================== */
function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 text-slate-700">
      {/* Main 3-col grid */}
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-3 divide-x divide-slate-200 border-b border-slate-200">
          {/* Demo 1 */}
          <div className="py-8 pr-6">
            <p className="text-xl font-bold text-slate-900">Demo 1</p>
          </div>

          {/* Quick Link */}
          <div className="py-8 px-6">
            <p className="text-lg font-bold text-slate-900 mb-3">Quick Link</p>
            <ul className="space-y-1.5 text-sm text-slate-600">
              {[
                { label: "Home", href: "#hero" },
                { label: "About us", href: "#about" },
                { label: "service", href: "#services" },
                { label: "contact", href: "#contact" },
              ].map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="hover:text-slate-900 transition-colors">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Associate company */}
          <div className="py-8 pl-6">
            <p className="text-sm font-bold text-slate-900 leading-snug mb-2">OUR Associate<br/>company</p>
            <p className="text-sm text-slate-600">nm example<br/>comm</p>
          </div>
        </div>

        {/* Copyright */}
        <div className="py-4 text-center text-sm text-slate-500">
          @ copyright Reserved
        </div>
      </div>
    </footer>
  );
}

/* ================================================================== */
/*  PAGE EXPORT                                                         */
/* ================================================================== */
export default function HomePage() {
  return (
    <>
      <NavigationBar />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <WhyChooseUsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
