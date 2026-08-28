import { business } from "../data/siteData";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero" id="top" aria-label="Introduction">
      <div className="hero__media">
        <img
          src="/assets/hero/hero-main.svg"
          alt="Placeholder for a premium salon-interior or hair-styling photograph"
          loading="eager"
          fetchPriority="high"
          width={1920}
          height={1280}
        />
        <div className="hero__scrim" aria-hidden="true" />
      </div>

      <div className="container hero__content">
        <p className="eyebrow hero__eyebrow">Mahopac, New York</p>
        <h1 className="hero__title">Your Hair. Your Style. Your Canvas.</h1>
        <p className="hero__lede">
          Personalized hair and beauty services in a modern, welcoming salon
          in the heart of Mahopac.
        </p>

        <div className="hero__actions">
          <a
            href={business.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Book Your Appointment
          </a>
          <a href="#services" className="btn btn-secondary hero__secondary">
            Explore Our Services
          </a>
        </div>

        <p className="hero__categories">{business.categoriesShort}</p>
      </div>
    </section>
  );
}
