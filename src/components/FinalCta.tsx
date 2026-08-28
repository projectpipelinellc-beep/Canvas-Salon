import { business } from "../data/siteData";
import Reveal from "./Reveal";
import "./FinalCta.css";

export default function FinalCta() {
  return (
    <section className="final-cta" aria-labelledby="final-cta-title">
      <div className="container final-cta__inner">
        <Reveal>
          <h2 id="final-cta-title" className="final-cta__title">
            Ready for Your Next Look?
          </h2>
          <p className="final-cta__text">
            Explore available services and reserve your next appointment
            with Canvas Salon Studio.
          </p>
          <a
            href={business.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-on-dark final-cta__btn"
          >
            Book Your Appointment
          </a>
        </Reveal>
      </div>
    </section>
  );
}
