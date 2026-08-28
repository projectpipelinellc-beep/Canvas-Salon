import { business, serviceCategories } from "../data/siteData";
import Reveal from "./Reveal";
import "./Services.css";

// DEVELOPER NOTE: exact treatment names, durations and prices must be
// imported from the salon's approved service menu only after owner
// sign-off. Do not hardcode specific services or pricing in this section.
export default function Services() {
  return (
    <section className="services section section--soft" id="services" aria-labelledby="services-title">
      <div className="container">
        <div className="section-header">
          <p className="eyebrow">What We Offer</p>
          <h2 id="services-title" className="section-title">
            Services Designed Around You
          </h2>
        </div>

        <div className="services__grid">
          {serviceCategories.map((service, i) => (
            <Reveal as="article" className="service-card" delay={i * 60} key={service.id}>
              <h3 className="service-card__title">{service.name}</h3>
              <p className="service-card__desc">
                <strong>{service.name}</strong> — {service.description}
              </p>
              <a
                href={business.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost btn-sm service-card__cta"
              >
                View &amp; Book
              </a>
            </Reveal>
          ))}
        </div>

        <p className="notice services__notice">
          For current services, availability and pricing, please visit our
          booking page.
        </p>
      </div>
    </section>
  );
}
