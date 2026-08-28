import { business } from "../data/siteData";
import "./MobileActionBar.css";

/** Fixed bottom action bar shown on small screens only (see CSS media query). */
export default function MobileActionBar() {
  return (
    <div className="mobile-action-bar" role="region" aria-label="Quick actions">
      <a href={`tel:${business.phone.tel}`} className="mobile-action-bar__btn">
        <span aria-hidden="true">📞</span> Call
      </a>
      <a
        href={business.bookingUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mobile-action-bar__btn mobile-action-bar__btn--primary"
      >
        Book Now
      </a>
    </div>
  );
}
