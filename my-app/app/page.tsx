"use client";

import Image from "next/image";
import { useEffect, useState, useRef } from "react";

/* ------------------------------------------------------------------ */
/*  Intersection Observer hook for scroll-triggered animations        */
/* ------------------------------------------------------------------ */
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.unobserve(el);
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return { ref, inView };
}

/* ================================================================== */
/*  NAVIGATION BAR                                                     */
/* ================================================================== */
function NavigationBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 backdrop-blur-md border-b transition-all duration-300 ${
        scrolled
          ? "bg-white/95 border-slate-200 shadow-sm"
          : "bg-white/90 border-slate-200/60"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full border-2 border-sky-600 bg-sky-50 text-sky-700 flex items-center justify-center font-black text-lg shadow-sm animate-pulse-glow">
            D
          </div>
          <span className="text-2xl font-bold tracking-tight text-slate-900">
            Demo <span className="text-sky-600">1</span>
          </span>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-semibold text-slate-600">
          <a
            href="#hero"
            className="hover:text-sky-600 transition-colors duration-200"
          >
            Home
          </a>
          <span className="text-slate-300">→</span>
          <a
            href="#about"
            className="hover:text-sky-600 transition-colors duration-200"
          >
            About Us
          </a>
          <span className="text-slate-300">→</span>
          <a
            href="#services"
            className="hover:text-sky-600 transition-colors duration-200"
          >
            Services
          </a>
          <span className="text-slate-300">→</span>
          <a
            href="#why-us"
            className="hover:text-sky-600 transition-colors duration-200"
          >
            Why Choose Us
          </a>
          <span className="text-slate-300">→</span>
          <a
            href="#contact"
            className="hover:text-sky-600 transition-colors duration-200"
          >
            Contact
          </a>
        </nav>

        {/* CTA Button */}
        <div className="flex items-center space-x-4">
          <a
            href="#contact"
            className="px-5 py-2.5 bg-sky-600 hover:bg-sky-700 text-white rounded-lg font-semibold text-sm shadow-md shadow-sky-600/20 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
          >
            Get Started
          </a>
        </div>
      </div>
    </header>
  );
}

/* ================================================================== */
/*  HERO SECTION                                                       */
/* ================================================================== */
function HeroSection() {
  const { ref, inView } = useInView(0.1);
  const pills = [
    "What is your core business?",
    "Growth ROI Estimates",
    "Enterprise Audits",
  ];

  return (
    <section
      id="hero"
      ref={ref}
      className="relative overflow-hidden bg-gradient-to-b from-slate-100 via-white to-slate-50 border-b border-slate-200 py-20 lg:py-28"
    >
      {/* Watermark */}
      <div className="absolute -right-12 top-10 watermark-text text-slate-900 select-none pointer-events-none">
        DEMO 1
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column */}
        <div
          className={`lg:col-span-7 space-y-6 ${
            inView ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider">
            <svg
              className="w-4 h-4 text-sky-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
            Next-Gen Business Accelerators
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-950 tracking-tight leading-[1.15]">
            Curious How We Scale Your Enterprise?
          </h1>

          <p className="text-lg text-slate-600 max-w-xl leading-relaxed">
            Unlocking market potential through targeted keyword growth,
            strategic positioning, and end-to-end operational intelligence.
          </p>

          {/* Exploration Pills */}
          <div className="pt-2">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
              <span>Frequently explored solutions</span>
              <span className="text-sky-500">↓</span>
            </p>
            <div className="flex flex-wrap gap-2.5">
              {pills.map((pill, i) => (
                <span
                  key={pill}
                  className={`inline-flex items-center px-3.5 py-2 rounded-xl bg-white border border-slate-200 shadow-sm text-sm font-medium text-slate-700 hover:border-sky-500 hover:text-sky-600 transition cursor-pointer ${
                    inView ? "animate-slide-right" : "opacity-0"
                  }`}
                  style={{ animationDelay: `${300 + i * 120}ms` }}
                >
                  {pill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column — Strategy Card */}
        <div
          className={`lg:col-span-5 relative ${
            inView ? "animate-fade-in-up delay-200" : "opacity-0"
          }`}
        >
          <div className="relative bg-white p-8 rounded-2xl border border-slate-200/80 shadow-xl overflow-hidden animate-float-up">
            {/* Chevron overlay */}
            <div className="absolute -right-8 -top-8 w-36 h-36 chevron-pattern rounded-full opacity-60 pointer-events-none" />

            <div className="flex items-center justify-between pb-6 border-b border-slate-100">
              <div className="text-sm font-bold uppercase tracking-wider text-slate-500">
                Strategic Performance
              </div>
              <span className="px-2.5 py-1 bg-emerald-100 text-emerald-700 text-xs font-semibold rounded-md flex items-center gap-1">
                ↑ Trending 99.4%
              </span>
            </div>

            {/* Keyword Cluster */}
            <div className="mt-6 space-y-4">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest text-center">
                Core Target Keywords
              </p>
              <div className="grid grid-cols-2 gap-3 text-center">
                {[
                  { label: "Strategy", tag: "High Volume" },
                  { label: "Conversion", tag: "High Intent" },
                  { label: "Optimization", tag: "Market Leader" },
                  { label: "Analytics", tag: "Real-time Insights" },
                ].map((kw) => (
                  <div
                    key={kw.label}
                    className="p-3 bg-slate-50 border border-slate-200/70 rounded-xl hover:border-sky-400 transition-colors duration-200"
                  >
                    <span className="text-sky-600 font-bold block text-base">
                      ↑ {kw.label}
                    </span>
                    <span className="text-xs text-slate-500">{kw.tag}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Chevron Vector */}
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-center gap-2 text-sky-600 font-mono text-sm tracking-widest font-bold">
              <span>&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;</span>
              <span className="text-xs text-slate-700 uppercase font-sans tracking-normal font-semibold">
                Continuous Trajectory
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================================================================== */
/*  ABOUT US SECTION                                                   */
/* ================================================================== */
function AboutSection() {
  const { ref, inView } = useInView();

  const stats = [
    { value: "98%", label: "Client Retention" },
    { value: "12x", label: "Avg. Revenue Lift" },
    { value: "24/7", label: "Dedicated Support" },
  ];

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-20 bg-white border-b border-slate-200 overflow-hidden"
    >
      {/* Watermark */}
      <div className="absolute right-6 bottom-4 watermark-text text-slate-900 pointer-events-none">
        Demo
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex items-center space-x-3 mb-6">
          <span className="text-sky-600 text-2xl font-bold tracking-tighter">
            〰→
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            About Us
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div
            className={`lg:col-span-7 space-y-6 ${
              inView ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            <h3 className="text-2xl font-bold text-slate-800 leading-snug">
              Pioneering Data-Backed Architecture &amp; Transformative
              Strategies.
            </h3>
            <p className="text-slate-600 leading-relaxed">
              At Demo 1, we combine engineering rigor with high-velocity
              creative problem solving. Our mission is to dismantle operational
              bottlenecks, establish authoritative brand visibility, and deliver
              frictionless customer journeys that convert.
            </p>

            <div className="grid grid-cols-3 gap-6 pt-4">
              {stats.map((s, i) => (
                <div
                  key={s.label}
                  className={`border-l-2 border-sky-600 pl-4 ${
                    inView ? "animate-fade-in-up" : "opacity-0"
                  }`}
                  style={{ animationDelay: `${200 + i * 150}ms` }}
                >
                  <div className="text-2xl font-black text-slate-900">
                    {s.value}
                  </div>
                  <div className="text-xs font-medium text-slate-500">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            className={`lg:col-span-5 ${
              inView ? "animate-fade-in-up delay-300" : "opacity-0"
            }`}
          >
            <div className="bg-gradient-to-br from-slate-50 to-sky-50/50 p-8 rounded-2xl border border-slate-200 relative">
              <div className="text-xs font-bold uppercase tracking-widest text-sky-700 mb-2">
                Our Manifesto
              </div>
              <blockquote className="text-slate-700 italic leading-relaxed text-sm">
                &ldquo;We reject generic frameworks. We decode enterprise
                problems, align strategic vectors, and construct reliable,
                automated growth engines.&rdquo;
              </blockquote>
              <div className="mt-4 flex items-center space-x-3">
                <div className="w-9 h-9 rounded-full bg-sky-600 text-white flex items-center justify-center font-bold text-sm">
                  D1
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900">
                    Executive Leadership Team
                  </p>
                  <p className="text-[11px] text-slate-500">Demo 1 Group</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================================================================== */
/*  SERVICES SECTION                                                   */
/* ================================================================== */
const services = [
  {
    title: "Growth & Search Strategy",
    description:
      "Data-driven content clustering, SEO positioning, and continuous optimization pipelines to dominate competitive niches.",
    cta: "Explore Strategy",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      </svg>
    ),
  },
  {
    title: "Custom Digital Architecture",
    description:
      "Engineered web applications and modular landing solutions designed for blistering speed, accessibility, and high conversions.",
    cta: "Learn Architecture",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
        />
      </svg>
    ),
  },
  {
    title: "Enterprise Advisory",
    description:
      "Hands-on business advisory to align organizational teams, refine sales funnels, and safeguard long-term brand equity.",
    cta: "Consult With Us",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
  },
];

function ServicesSection() {
  const { ref, inView } = useInView();

  return (
    <section
      id="services"
      ref={ref}
      className="relative py-24 bg-slate-50 border-b border-slate-200"
    >
      {/* Watermark */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 watermark-text text-slate-900 pointer-events-none">
        WATERMARK
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="flex items-center space-x-3 mb-2">
              <span className="text-sky-600 text-2xl font-bold tracking-tighter">
                〰→
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                My Services
              </h2>
            </div>
            <p className="text-slate-600 text-sm">
              Dynamic service arrangements engineered for measurable
              performance.
            </p>
          </div>
          <div className="hidden md:flex items-center space-x-2 text-xs font-semibold text-slate-400 uppercase tracking-widest">
            <span>Adaptive Architecture</span>
            <span>⇄</span>
            <span>Fluid Workflows</span>
          </div>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((svc, i) => (
            <div
              key={svc.title}
              className={`group bg-white rounded-2xl p-7 border border-slate-200/90 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between ${
                inView ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 150}ms` }}
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-600 mb-5 group-hover:bg-sky-600 group-hover:text-white transition-colors duration-300">
                  {svc.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2.5">
                  {svc.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {svc.description}
                </p>
              </div>
              <a
                href="#contact"
                className="inline-flex items-center text-sm font-bold text-sky-600 group-hover:text-sky-700 transition"
              >
                {svc.cta}
                <span className="ml-1.5 transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================================================================== */
/*  WHY CHOOSE US SECTION                                              */
/* ================================================================== */
const quadrants = [
  {
    tag: "01 / Agility",
    title: "Uncompromising Velocity",
    desc: "Rapid prototype-to-production cycles reducing time to market by 45%.",
    img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
    alt: "Enterprise Scalability",
  },
  {
    tag: "02 / Quality",
    title: "Battle-Tested Solutions",
    desc: "Robust architectures verified through rigorous load profiling and validation.",
    img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
    alt: "Performance Intelligence",
  },
  {
    tag: "03 / Security",
    title: "Comprehensive Security",
    desc: "End-to-end encryption protocols adhering to premier global governance benchmarks.",
    img: "https://images.unsplash.com/photo-1563986768609-322da13575f2?w=800&q=80",
    alt: "Data Security",
  },
  {
    tag: "04 / Synergy",
    title: "Direct Strategic Partnership",
    desc: "Collaborating as a direct extension of your leadership and product engineering core.",
    img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
    alt: "Client Alignment",
  },
];

function WhyChooseUsSection() {
  const { ref, inView } = useInView();

  return (
    <section
      id="why-us"
      ref={ref}
      className="py-24 bg-white border-b border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center space-x-3 mb-10">
          <span className="text-sky-600 text-2xl font-bold tracking-tighter">
            〰→
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            WHY CHOOSE US
          </h2>
        </div>

        {/* 2×2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {quadrants.map((q, i) => (
            <div
              key={q.tag}
              className={`relative overflow-hidden rounded-2xl bg-slate-900 text-white p-8 group min-h-[260px] flex flex-col justify-end ${
                inView ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 120}ms` }}
            >
              <Image
                src={q.img}
                alt={q.alt}
                fill
                className="object-cover opacity-35 group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="relative z-10 space-y-2">
                <span className="px-2.5 py-1 rounded bg-sky-500/30 text-sky-300 text-xs font-bold uppercase tracking-wider border border-sky-400/30">
                  {q.tag}
                </span>
                <h3 className="text-2xl font-bold">{q.title}</h3>
                <p className="text-sm text-slate-300 max-w-md">{q.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 text-right">
          <span className="text-xs text-slate-400 font-mono tracking-wider">
            Demo Watermark → Demo
          </span>
        </div>
      </div>
    </section>
  );
}

/* ================================================================== */
/*  CONTACT SECTION                                                    */
/* ================================================================== */
function ContactSection() {
  const { ref, inView } = useInView();
  const [submitted, setSubmitted] = useState(false);

  return (
    <section
      id="contact"
      ref={ref}
      className="py-24 bg-slate-100/70 border-b border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center space-x-3 mb-12">
          <span className="text-sky-600 text-2xl font-bold tracking-tighter">
            〰→
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Contact
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left — Contact Info */}
          <div
            className={`lg:col-span-6 space-y-6 ${
              inView ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Find Us */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:border-sky-500 transition-colors duration-200 flex items-start space-x-4">
                <div className="p-3 bg-sky-50 text-sky-600 rounded-xl">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-bold uppercase text-slate-900 tracking-wide">
                    Find Us
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    100 Innovation Parkway,
                    <br />
                    Tech District, CA 94107
                  </p>
                </div>
              </div>

              {/* Call Us */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:border-sky-500 transition-colors duration-200 flex items-start space-x-4">
                <div className="p-3 bg-sky-50 text-sky-600 rounded-xl">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-bold uppercase text-slate-900 tracking-wide">
                    Call Us
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    +1 (800) 555-DEMO
                    <br />
                    Mon - Fri, 9am - 6pm EST
                  </p>
                </div>
              </div>
            </div>

            {/* Email Form */}
            <div className="bg-white p-3 rounded-2xl border border-slate-200 shadow-sm">
              <form
                className="flex flex-col sm:flex-row items-center gap-2"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                  setTimeout(() => setSubmitted(false), 3000);
                }}
              >
                <div className="flex items-center px-3 text-slate-400">
                  <svg
                    className="w-5 h-5 text-sky-600 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="text-xs font-bold uppercase text-slate-700">
                    EMAIL
                  </span>
                </div>
                <input
                  type="email"
                  required
                  placeholder="example@gmail.com"
                  className="flex-1 w-full bg-slate-50 border-0 focus:ring-2 focus:ring-sky-500 rounded-xl text-sm px-4 py-3 placeholder:text-slate-400 outline-none"
                />
                <button
                  type="submit"
                  className={`w-full sm:w-auto px-6 py-3 rounded-xl text-sm font-bold transition duration-200 shadow-md ${
                    submitted
                      ? "bg-emerald-600 text-white"
                      : "bg-slate-900 hover:bg-sky-600 text-white"
                  }`}
                >
                  {submitted ? "✓ Sent!" : "Send Inquiry"}
                </button>
              </form>
            </div>
          </div>

          {/* Right — Map */}
          <div
            className={`lg:col-span-6 ${
              inView ? "animate-fade-in-up delay-200" : "opacity-0"
            }`}
          >
            <div className="bg-white p-3 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden group">
              <div className="relative h-64 sm:h-72 w-full rounded-xl overflow-hidden bg-slate-200">
                <Image
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=80"
                  alt="Corporate Location Map"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />

                {/* Pin Marker */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="relative flex items-center justify-center">
                    <span className="animate-ping absolute inline-flex h-8 w-8 rounded-full bg-sky-400 opacity-75" />
                    <div className="relative w-6 h-6 bg-sky-600 text-white rounded-full border-2 border-white shadow-lg flex items-center justify-center">
                      <div className="w-1.5 h-1.5 bg-white rounded-full" />
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-200 shadow-sm">
                  <p className="text-xs font-bold text-slate-800">
                    Global Tech Center
                  </p>
                  <p className="text-[10px] text-slate-500">
                    Live Navigation Enabled
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================================================================== */
/*  FOOTER                                                             */
/* ================================================================== */
function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 text-slate-600">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start border-b border-slate-100 pb-12">
          {/* Brand */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full border border-sky-600 bg-sky-50 text-sky-700 flex items-center justify-center font-bold text-sm">
                D
              </div>
              <span className="text-xl font-bold text-slate-900">Demo 1</span>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed max-w-sm">
              Setting benchmarks in enterprise digital growth, keyword strategy,
              and frictionless systems engineering.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: "Home Overview", href: "#hero" },
                { label: "About Our Firm", href: "#about" },
                { label: "Specialized Services", href: "#services" },
                { label: "Why Choose Demo 1", href: "#why-us" },
                { label: "Get In Touch", href: "#contact" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-sky-600 transition"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Associate Company */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
              Our Associate Company
            </h4>
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
              <p className="text-sm font-semibold text-slate-800">
                NM Example Communications Group
              </p>
              <p className="text-xs text-slate-500">
                Global affiliate in media distribution, syndication, and network
                communications.
              </p>
              <div className="text-xs font-bold text-sky-600 pt-1">
                nm.example.comm
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 text-center text-xs text-slate-400 font-medium">
          © {new Date().getFullYear()} Demo 1. All Rights Reserved. Designed
          from technical specification blueprint.
        </div>
      </div>
    </footer>
  );
}

/* ================================================================== */
/*  PAGE EXPORT                                                        */
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
