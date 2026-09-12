import { business, legal, navLinks, social } from "../data/siteData";
import "./Footer.css";

interface FooterProps {
  /** See Header's isSubpage: standalone pages need home-page-prefixed anchors. */
  isSubpage?: boolean;
}

export default function Footer({ isSubpage = false }: FooterProps) {
  const hasSocial = social.instagram || social.facebook || social.email;
  const sectionHref = (href: string) => (isSubpage ? `/${href}` : href);

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
                <a href={sectionHref(link.href)}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="site-footer__col">
          <h3>Plan Your Visit</h3>
          <ul>
            <li>
              <a href={sectionHref("#visit")}>Business Hours</a>
            </li>
            <li>
              <a href={business.bookingUrl} target="_blank" rel="noopener noreferrer">
                Book an Appointment
              </a>
            </li>
            <li>
              <a href={legal.privacyPolicyUrl}>Privacy Policy</a>
            </li>
            <li>
              <a href={legal.termsUrl}>Terms &amp; Conditions</a>
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
