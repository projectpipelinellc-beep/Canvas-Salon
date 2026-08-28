import { reviews, reviewSummary } from "../data/siteData";
import Reveal from "./Reveal";
import "./Reviews.css";

function StarRow() {
  return (
    <span className="star-row" aria-hidden="true">
      {"★★★★★"}
    </span>
  );
}

export default function Reviews() {
  return (
    <section className="reviews section section--ivory" id="reviews" aria-labelledby="reviews-title">
      <div className="container">
        <div className="section-header">
          <p className="eyebrow">Guest Feedback</p>
          <h2 id="reviews-title" className="section-title">
            Loved by Our Guests
          </h2>
          <div className="reviews__summary">
            <StarRow />
            <span className="reviews__rating">
              {reviewSummary.rating.toFixed(1)} from {reviewSummary.count} reviews
            </span>
          </div>
          <p className="reviews__disclaimer">
            Rating information supplied from the salon's current booking
            profile and subject to confirmation.
          </p>
        </div>

        <div className="reviews__grid">
          {reviews.map((review, i) => (
            <Reveal as="figure" className="review-card" delay={i * 60} key={review.id}>
              <StarRow />
              <blockquote>
                <p>&ldquo;{review.quote}&rdquo;</p>
              </blockquote>
              <figcaption>
                {review.author} — {review.date}
              </figcaption>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
