import Reveal from "./Reveal";
import "./Intro.css";

export default function Intro() {
  return (
    <section className="intro section section--ivory" id="about" aria-labelledby="intro-title">
      <div className="container intro__grid">
        <Reveal className="intro__media">
          <img
            src="/assets/hero/salon-interior.svg"
            alt="Placeholder for an authentic photograph of the Canvas Salon Studio interior"
            loading="lazy"
            width={1200}
            height={1500}
          />
        </Reveal>

        <Reveal className="intro__copy" delay={80}>
          <p className="eyebrow">About the Studio</p>
          <h2 id="intro-title" className="section-title">
            Beauty, Artistry and Confidence
          </h2>
          <p className="section-lede">
            Canvas Salon Studio is a boutique beauty destination in Mahopac,
            New York. Our goal is to create a personalized, welcoming
            experience that helps every guest leave feeling confident and
            beautiful.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
