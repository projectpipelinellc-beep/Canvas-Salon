import { business, navLinks, privacyPolicyUrl, social } from "../data/siteData";
import "./Footer.css";

export default function Footer() {
  const hasSocial = social.instagram || social.facebook || social.email;

  return (
    <footer className="site-footer">
      <div className="container site-footer__grid">
        <div className="site-footer__brand">
          <p className="site-footer__logo">{business.name}</p>
          <p>Mahopac, NY</p>
          <a href={`tel:${business.phone.tel}`}>{business.phone.display}</a>
        </div>

        <div className="site-footer__col">
          <h3>Explore</h3>
          <ul>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="site-footer__col">
          <h3>Plan Your Visit</h3>
          <ul>
            <li>
              <a href="#visit">Business Hours</a>
            </li>
            <li>
              <a href={business.bookingUrl} target="_blank" rel="noopener noreferrer">
                Book an Appointment
              </a>
            </li>
            <li>
              {privacyPolicyUrl ? (
                <a href={privacyPolicyUrl}>Privacy Policy</a>
              ) : (
                <span className="site-footer__placeholder">
                  Privacy Policy (coming soon)
                </span>
              )}
            </li>
          </ul>
        </div>

        <div className="site-footer__col">
          <h3>Connect</h3>
          {hasSocial ? (
            <ul>
              {social.instagram && (
                <li>
                  <a href={social.instagram} target="_blank" rel="noopener noreferrer">
                    Instagram
                  </a>
                </li>
              )}
              {social.facebook && (
                <li>
                  <a href={social.facebook} target="_blank" rel="noopener noreferrer">
                    Facebook
                  </a>
                </li>
              )}
              {social.email && <li><a href={`mailto:${social.email}`}>Email</a></li>}
            </ul>
          ) : (
            <p className="site-footer__placeholder">
              Social &amp; email links to be added by the owner.
            </p>
          )}
        </div>
      </div>

      <div className="site-footer__bottom">
        <div className="container site-footer__bottom-inner">
          <p>
            &copy; {new Date().getFullYear()} {business.name}. Redesign
            concept — not the live site.
          </p>
          <p className="site-footer__credit">Website concept by Project Pipeline</p>
        </div>
      </div>
    </footer>
  );
}
