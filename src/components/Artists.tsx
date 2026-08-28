import { artists, artistsNotice, business } from "../data/siteData";
import Reveal from "./Reveal";
import "./Artists.css";

export default function Artists() {
  return (
    <section className="artists section section--ivory" id="artists" aria-labelledby="artists-title">
      <div className="container">
        <div className="section-header">
          <p className="eyebrow">Our Team</p>
          <h2 id="artists-title" className="section-title">
            Meet the Artists
          </h2>
          <p className="notice">{artistsNotice}</p>
        </div>

        <div className="artists__grid">
          {artists.map((artist, i) => (
            <Reveal as="article" className="artist-card" delay={i * 60} key={artist.id}>
              <div className="artist-card__portrait">
                <img
                  src={artist.portrait}
                  alt={`Portrait placeholder for ${artist.name}`}
                  loading="lazy"
                  width={700}
                  height={800}
                />
              </div>
              <h3 className="artist-card__name">{artist.name}</h3>
              <p className="artist-card__specialty">{artist.specialty}</p>
              <p className="artist-card__bio">{artist.bio}</p>
              <a
                href={business.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost btn-sm artist-card__cta"
              >
                Book With This Artist
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
