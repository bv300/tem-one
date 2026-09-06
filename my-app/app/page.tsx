/* ================================================================== */
/*  Shared bits                                                       */
/* ================================================================== */

function WavyArrow({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 46 16"
      className={className}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 8 Q 4 3 7 8 T 13 8 T 19 8 T 25 8 T 31 8"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path d="M32 3 L40 8 L32 13" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 text-[#2a2a2a]">
      <WavyArrow className="w-12 shrink-0 text-[#2a2a2a]/70" />
      <h2 className="text-2xl sm:text-[28px] font-extrabold tracking-tight">
        {children}
      </h2>
    </div>
  );
}

/* ================================================================== */
/*  HEADER                                                             */
/* ================================================================== */

function Header() {
  return (
    <header className="relative border-b border-[#d5d5e0]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-4 sm:py-5 flex flex-wrap items-center justify-between gap-x-8 gap-y-3">
        {/* Left brand */}
        <span className="text-[26px] sm:text-3xl font-extrabold tracking-tight text-[#2a2a2a]">
          Demo 1
        </span>

        {/* Center circular D emblem */}
        <div className="hidden sm:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 rounded-full border-2 border-[#2a2a2a] items-center justify-center">
          <span className="text-lg font-bold text-[#2a2a2a]">D</span>
        </div>

        {/* Right nav links joined by arrows */}
        <nav className="flex items-center gap-1.5 text-sm sm:text-[15px] font-semibold text-[#2a2a2a]/75 w-full sm:w-auto order-3 sm:order-none justify-center sm:justify-end flex-wrap">
          <a href="#hero" className="hover:text-[#2a2a2a] transition-colors">Home</a>
          <span className="text-[#2a2a2a]/30">→</span>
          <a href="#about" className="hover:text-[#2a2a2a] transition-colors">About us</a>
          <span className="text-[#2a2a2a]/30">→</span>
          <a href="#services" className="hover:text-[#2a2a2a] transition-colors">service</a>
          <span className="text-[#2a2a2a]/30">→</span>
          <a href="#contact" className="hover:text-[#2a2a2a] transition-colors">contact</a>
        </nav>
      </div>
    </header>
  );
}

/* ================================================================== */
/*  HERO                                                               */
/* ================================================================== */

function HeroSection() {
  return (
    <section id="hero" className="border-b border-[#d5d5e0]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-14 sm:py-20 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-6 items-center">
        {/* ---------- LEFT COLUMN ---------- */}
        <div className="flex flex-col items-center md:items-start justify-center gap-4">
          {/* three arrows radiating up/outward from "test" */}
          <div className="relative w-44 h-12">
            <span className="absolute left-[6px] top-[26px] text-lg text-[#2a2a2a]/80 font-bold">↖</span>
            <span className="absolute left-[76px] top-0 text-lg text-[#2a2a2a] font-bold">↑</span>
            <span className="absolute right-[6px] top-[26px] text-lg text-[#2a2a2a]/80 font-bold">↗</span>
          </div>

          <p className="text-4xl sm:text-[44px] font-black tracking-tight text-[#2a2a2a] leading-none">
            test
          </p>

          <p className="text-xl sm:text-2xl font-bold text-[#2a2a2a] leading-snug">
            എന്താണ് ബിസിനസ്സ് അറിയാൻ
          </p>

          {/* three downward arrows pointing at five question marks */}
          <div className="mt-2 grid grid-cols-5 w-40">
            <span className="text-center text-lg text-[#2a2a2a]/85">↓</span>
            <span />
            <span className="text-center text-lg text-[#2a2a2a]/85">↓</span>
            <span />
            <span className="text-center text-lg text-[#2a2a2a]/85">↓</span>
          </div>
          <div className="grid grid-cols-5 w-40">
            {[0, 1, 2, 3, 4].map((i) => (
              <span key={i} className="text-center text-2xl font-extrabold text-[#2a2a2a]">
                ?
              </span>
            ))}
          </div>
        </div>

        {/* ---------- CENTER COLUMN: double-outlined chevron ---------- */}
        <div className="flex justify-center">
          <svg
            viewBox="0 0 300 240"
            className="w-[260px] sm:w-[300px] max-w-full h-auto"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern id="chevFill" patternUnits="userSpaceOnUse" width="24" height="24">
                <rect width="24" height="24" fill="#E8E8F2" />
                <path d="M4 5 L12 12 L4 19" fill="none" stroke="#2a2a2a" strokeOpacity="0.5" strokeWidth="1.6" strokeLinecap="round" />
                <path d="M12 5 L20 12 L12 19" fill="none" stroke="#2a2a2a" strokeOpacity="0.25" strokeWidth="1.4" strokeLinecap="round" />
              </pattern>
            </defs>
            {/* outer chevron (charcoal silhouette, pointing right) */}
            <polygon points="30,18 288,120 30,222" fill="#2a2a2a" />
            {/* hollow inner opening filled with nested small chevrons */}
            <polygon points="95,74 212,120 95,166" fill="url(#chevFill)" />
            {/* inner outline (second parallel band edge) */}
            <polygon
              points="95,74 212,120 95,166"
              fill="none"
              stroke="#2a2a2a"
              strokeOpacity="0.55"
              strokeWidth="1.4"
            />
          </svg>
        </div>

        {/* ---------- RIGHT COLUMN ---------- */}
        <div className="flex flex-col items-center justify-center gap-10">
          {/* six upward arrows in a row */}
          <div className="flex items-center gap-2 sm:gap-3">
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <span key={i} className="text-lg sm:text-xl text-[#2a2a2a] font-bold">
                ↑
              </span>
            ))}
          </div>
          <p className="text-sm font-semibold text-[#2a2a2a]/80 -mt-6">keywords</p>

          <div className="h-10" />

          <p className="text-sm font-semibold text-[#2a2a2a]/80">keywords</p>
        </div>
      </div>
    </section>
  );
}

/* ================================================================== */
/*  ABOUT US                                                           */
/* ================================================================== */

function AboutSection() {
  return (
    <section id="about" className="relative border-b border-[#d5d5e0] overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-14 sm:py-16 relative">
        {/* watermark top-right */}
        <div className="absolute right-2 sm:right-6 top-2 sm:top-4 text-right pointer-events-none select-none">
          <p className="text-[11px] sm:text-xs font-medium text-[#2a2a2a]/40">water mark</p>
          <p className="text-[11px] text-[#2a2a2a]/35 mt-0.5">↓</p>
          <p className="text-[72px] sm:text-[96px] font-black leading-none text-[#2a2a2a]/[0.06] mt-1">
            Demo
          </p>
        </div>

        <div className="relative z-10">
          <SectionTitle>About US</SectionTitle>
          <p className="mt-2 ml-[60px] text-base sm:text-lg font-semibold text-[#2a2a2a]/70">demo</p>
        </div>
      </div>
    </section>
  );
}

/* ================================================================== */
/*  MY SERVICES                                                        */
/* ================================================================== */

function ServicesSection() {
  return (
    <section id="services" className="relative border-b border-[#d5d5e0] overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-14 sm:py-16 relative">
        {/* heading row with caption text on the right */}
        <div className="flex flex-wrap items-start justify-between gap-x-10 gap-y-3">
          <SectionTitle>my services</SectionTitle>

          {/* top-right text, curved arrow after it */}
          <div className="flex items-start gap-2 text-[13px] font-medium text-[#2a2a2a]/60 text-right max-w-[210px]">
            <span className="leading-snug pt-0.5">Arrangement position change to animation</span>
            <svg
              viewBox="0 0 26 30"
              className="w-5 h-6 shrink-0 mt-0.5 text-[#2a2a2a]/60"
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
              <path d="M14 2 L23 6 L18 14" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

        {/* cards + curved arrows */}
        <div className="relative mt-12">
          {/* curved arrow from the heading down to card 1 */}
          <svg
            viewBox="0 0 1000 180"
            preserveAspectRatio="none"
            className="absolute left-0 right-0 -top-12 h-40 sm:h-44 w-full pointer-events-none"
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

          {/* three cards */}
          <div className="grid grid-cols-3 gap-4 sm:gap-5">
            <div className="h-36 sm:h-44 rounded-2xl bg-[#c9cad6] shadow-[0_2px_8px_rgba(42,42,42,0.08)]" />
            <div className="h-36 sm:h-44 rounded-2xl bg-[#c9cad6] shadow-[0_2px_8px_rgba(42,42,42,0.08)] flex items-center justify-center">
              <span className="text-[13px] font-medium text-[#2a2a2a]/40">water mark →</span>
            </div>
            <div className="h-36 sm:h-44 rounded-2xl bg-[#c9cad6] shadow-[0_2px_8px_rgba(42,42,42,0.08)]" />
          </div>

          {/* labels beneath the cards */}
          <div className="grid grid-cols-3 gap-4 sm:gap-5 mt-4">
            <span />
            <span />
            <span className="text-center text-[13px] font-semibold text-[#2a2a2a]/60">
              position animation
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================================================================== */
/*  WHY CHOOSE US                                                      */
/* ================================================================== */

function WhyChooseUsSection() {
  return (
    <section id="why-us" className="border-b border-[#d5d5e0]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-14 sm:py-16">
        <SectionTitle>WHY CHOOSE US</SectionTitle>

        {/* large grey rectangle with a thin black cross */}
        <div className="relative mt-8 max-w-3xl">
          <div className="grid grid-cols-2">
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="h-36 sm:h-44 bg-[#c5c6d2] flex items-center justify-center">
                <span
                  className="text-[13px] sm:text-sm font-medium text-[#2a2a2a]/60 -rotate-[15deg] leading-tight text-center"
                >
                  image കൊടുക്കുക
                </span>
              </div>
            ))}
          </div>

          {/* crosshair at the centre */}
          <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[2px] bg-[#2a2a2a]" />
          <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[2px] bg-[#2a2a2a]" />

          {/* four small white inset squares at the intersection */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 grid grid-cols-2 gap-[2px]">
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className="w-16 h-12 sm:w-20 sm:h-14 bg-white border border-[#d5d5e0] shadow-sm flex items-center justify-center"
              >
                <span className="text-[7px] sm:text-[8px] text-[#2a2a2a]/60 text-center leading-tight">
                  image
                  <br />
                  കൊടുക്കുക
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* bottom-right */}
        <div className="mt-8 text-right">
          <p className="text-2xl font-extrabold text-[#2a2a2a]/85">Demo</p>
          <p className="text-xs font-medium text-[#2a2a2a]/50 mt-1">water mark → Demo</p>
        </div>
      </div>
    </section>
  );
}

/* ================================================================== */
/*  CONTACT                                                            */
/* ================================================================== */

function ContactSection() {
  return (
    <section id="contact" className="border-b border-[#d5d5e0]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-14 sm:py-16">
        <SectionTitle>contact</SectionTitle>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* LEFT — buttons + email row */}
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              {/* find us */}
              <div className="flex items-center gap-3 bg-white rounded-2xl px-5 py-4 shadow-[0_2px_10px_rgba(42,42,42,0.08)] border border-[#e3e3ec]">
                <svg
                  className="w-5 h-5 text-[#2a2a2a]/75 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.8}
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <span className="text-sm font-semibold text-[#2a2a2a]">find us</span>
              </div>

              {/* CALL US */}
              <div className="flex items-center gap-3 bg-white rounded-2xl px-5 py-4 shadow-[0_2px_10px_rgba(42,42,42,0.08)] border border-[#e3e3ec]">
                <svg
                  className="w-5 h-5 text-[#2a2a2a]/75 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.8}
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                <span className="text-sm font-bold uppercase tracking-wide text-[#2a2a2a]">CALL US</span>
              </div>
            </div>

            {/* email row */}
            <div className="flex items-stretch bg-white rounded-2xl shadow-[0_2px_10px_rgba(42,42,42,0.08)] border border-[#e3e3ec] overflow-hidden">
              <div className="flex flex-col items-center justify-center gap-1 px-4 py-4 border-r border-[#eeeef5] min-w-[64px]">
                <svg
                  className="w-5 h-5 text-[#2a2a2a]/75"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.8}
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                <span className="text-[9px] font-bold uppercase tracking-[0.14em] text-[#2a2a2a]/75">EMAIL</span>
              </div>
              <input
                type="email"
                defaultValue="example@gmail.com"
                readOnly
                aria-label="example@gmail.com"
                className="flex-1 px-4 text-sm text-[#2a2a2a]/80 bg-transparent outline-none cursor-default"
              />
            </div>
          </div>

          {/* RIGHT — rounded map graphic */}
          <div className="rounded-2xl border border-[#d9d9e4] overflow-hidden shadow-[0_2px_12px_rgba(42,42,42,0.07)] bg-[#eaecdd]">
            <svg viewBox="0 0 400 300" className="w-full h-auto block" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
              {/* light map base */}
              <rect width="400" height="300" fill="#eaecdd" />

              {/* river */}
              <path d="M -20 230 C 60 222 90 150 180 138 C 240 130 300 80 330 -20" fill="none" stroke="#9ec3e3" strokeWidth="26" strokeLinecap="round" />
              <path d="M -20 230 C 60 222 90 150 180 138 C 240 130 300 80 330 -20" fill="none" stroke="#bcd7ec" strokeWidth="12" strokeLinecap="round" />

              {/* green parks */}
              <ellipse cx="96" cy="62" rx="52" ry="30" fill="#c3dab4" />
              <ellipse cx="330" cy="200" rx="60" ry="34" fill="#c3dab4" transform="rotate(-10 330 200)" />
              <ellipse cx="210" cy="266" rx="46" ry="24" fill="#bfd7b0" />
              <ellipse cx="60" cy="150" rx="28" ry="16" fill="#c8ddbb" />

              {/* city blocks */}
              <rect x="120" y="30" width="34" height="24" rx="3" fill="#dcded0" />
              <rect x="180" y="70" width="26" height="22" rx="3" fill="#dcded0" />
              <rect x="250" y="150" width="40" height="26" rx="3" fill="#dcded0" />
              <rect x="40" y="80" width="24" height="30" rx="3" fill="#dcded0" />
              <rect x="60" y="270" width="30" height="20" rx="3" fill="#dcded0" />

              {/* streets (casing + white core) */}
              {[
                [70, 0, 70, 300],
                [165, 0, 165, 300],
                [240, 0, 240, 300],
                [355, 0, 355, 300],
                [0, 110, 400, 110],
                [0, 190, 400, 190],
                [0, 258, 400, 258],
              ].map((l, idx) => (
                <g key={idx}>
                  <line x1={l[0]} y1={l[1]} x2={l[2]} y2={l[3]} stroke="#c9cbbb" strokeWidth="13" />
                  <line x1={l[0]} y1={l[1]} x2={l[2]} y2={l[3]} stroke="#ffffff" strokeWidth="9" />
                </g>
              ))}

              {/* diagonal avenue */}
              <g>
                <line x1="0" y1="300" x2="400" y2="20" stroke="#c9cbbb" strokeWidth="13" />
                <line x1="0" y1="300" x2="400" y2="20" stroke="#ffffff" strokeWidth="9" />
              </g>
              <g>
                <line x1="320" y1="300" x2="400" y2="230" stroke="#c9cbbb" strokeWidth="13" />
                <line x1="320" y1="300" x2="400" y2="230" stroke="#ffffff" strokeWidth="9" />
              </g>
            </svg>
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
    <footer className="text-[#2a2a2a]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 sm:divide-x divide-[#d5d5e0] border-b border-[#d5d5e0]">
          {/* Demo 1 */}
          <div className="py-8 sm:pr-6">
            <p className="text-2xl font-extrabold tracking-tight">Demo 1</p>
          </div>

          {/* Quick Link */}
          <div className="py-8 sm:px-6">
            <p className="text-base font-bold mb-4">Quick Link</p>
            <ul className="space-y-2 text-sm font-medium text-[#2a2a2a]/70">
              {[
                { label: "Home", href: "#hero" },
                { label: "About us", href: "#about" },
                { label: "service", href: "#services" },
                { label: "contact", href: "#contact" },
              ].map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="hover:text-[#2a2a2a] transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Associate company */}
          <div className="py-8 sm:pl-6">
            <p className="text-base font-bold">OUR Associate company</p>
            <p className="mt-4 text-sm font-medium text-[#2a2a2a]/70 leading-relaxed">
              nm example
              <br />
              comm
            </p>
          </div>
        </div>

        <div className="py-5 text-center text-sm text-[#2a2a2a]/60">@ copyright Reserved</div>
      </div>
    </footer>
  );
}

/* ================================================================== */
/*  PAGE                                                               */
/* ================================================================== */

export default function HomePage() {
  return (
    <>
      <Header />
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
