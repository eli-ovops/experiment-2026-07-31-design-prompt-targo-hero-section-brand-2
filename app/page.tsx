import { ArrowUpRight, Phone } from "lucide-react";

const VIDEO_URL =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260227_042027_c4b2f2ea-1c7c-4d6e-9e3d-81a78063703f.mp4";

function TargoLogo() {
  return (
    <svg
      aria-label="targo"
      className="targo-logo"
      viewBox="0 0 154 38"
      role="img"
    >
      <path
        d="M1 5.5h27.5L36 13H18.5v20H8V13H1V5.5Z"
        fill="currentColor"
      />
      <path
        d="M29.5 20.5 37 13v20h-7.5V20.5Z"
        fill="currentColor"
        opacity=".62"
      />
      <text
        x="47"
        y="28"
        fill="currentColor"
        fontFamily="var(--font-rubik)"
        fontSize="28"
        fontWeight="700"
        letterSpacing="-1.8"
      >
        targo
      </text>
    </svg>
  );
}

export default function Home() {
  return (
    <main className="hero">
      <video
        aria-hidden="true"
        autoPlay
        className="hero-video"
        loop
        muted
        playsInline
        preload="metadata"
      >
        <source src={VIDEO_URL} type="video/mp4" />
      </video>

      <header className="site-header">
        <a className="logo-link" href="#" aria-label="Targo home">
          <TargoLogo />
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          <a className="nav-link is-active" href="#home">
            Home
          </a>
          <a className="nav-link" href="#about">
            About
          </a>
          <a className="nav-link" href="#contact">
            Contact Us
          </a>
        </nav>

        <a className="button button-small header-action" href="#contact">
          Contact Us
          <ArrowUpRight aria-hidden="true" size={15} strokeWidth={2.2} />
        </a>
      </header>

      <section className="hero-copy" id="home" aria-labelledby="hero-title">
        <p className="eyebrow">
          <span className="eyebrow-line" />
          Logistics, without limits
        </p>
        <h1 id="hero-title">
          Swift and Simple
          <br />
          Transport
        </h1>
        <a className="button button-primary hero-action" href="#contact">
          Get Started
          <ArrowUpRight aria-hidden="true" size={18} strokeWidth={2.2} />
        </a>
      </section>

      <aside className="consultation-card" id="contact">
        <div className="consultation-copy">
          <p className="consultation-kicker">Let&apos;s move forward</p>
          <h2>Book a Free Consultation</h2>
        </div>
        <a
          className="button button-light consultation-action"
          href="tel:+[REDACTED_PHONE]"
          aria-label="Book a call with Targo"
        >
          <Phone aria-hidden="true" size={17} strokeWidth={2.2} />
          Book a Call
        </a>
      </aside>

      <div className="route-note" aria-hidden="true">
        <span>Global freight solutions</span>
        <span className="route-dot" />
        <span>Road · Air · Sea</span>
      </div>
    </main>
  );
}
