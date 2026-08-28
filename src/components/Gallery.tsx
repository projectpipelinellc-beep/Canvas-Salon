import { galleryImages, galleryNotice } from "../data/siteData";
import Reveal from "./Reveal";
import "./Gallery.css";

export default function Gallery() {
  return (
    <section className="gallery section section--soft" id="gallery" aria-labelledby="gallery-title">
      <div className="container">
        <div className="section-header">
          <p className="eyebrow">Portfolio</p>
          <h2 id="gallery-title" className="section-title">
            Our Work
          </h2>
          <p className="notice">{galleryNotice}</p>
        </div>

        <ul className="gallery__grid">
          {galleryImages.map((image, i) => (
            <li key={image.id}>
              <Reveal as="figure" className="gallery__item" delay={(i % 4) * 60}>
                <img src={image.src} alt={image.alt} loading="lazy" width={900} height={900} />
                <figcaption>{image.category}</figcaption>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
