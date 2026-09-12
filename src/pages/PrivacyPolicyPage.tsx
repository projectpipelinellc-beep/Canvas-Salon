import LegalPage from "../components/LegalPage";
import { business, legal } from "../data/siteData";

/**
 * DEVELOPER / OWNER NOTE ───────────────────────────────────────────────
 * This page is placeholder legal content written for a private redesign
 * concept, not a substitute for legal advice. It describes, honestly,
 * what this demo site itself does and does not do — it does not invent
 * data practices the site doesn't actually have. Before this concept is
 * published as a real, live website, a qualified professional should
 * review and finalize this policy (including the "Last updated" date).
 * ───────────────────────────────────────────────────────────────────────
 */
export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy Policy"
      updated="Concept draft — last updated September 12, 2026. To be finalized before launch."
    >
      <div className="legal__notice" role="note">
        This Privacy Policy is placeholder content prepared for a private
        website redesign concept for {business.name}. It has not been
        reviewed by the business owner or a legal professional and should
        not be relied on as the salon's actual privacy practices until it
        is finalized and published on the live site.
      </div>

      <h2>Overview</h2>
      <p>
        This website is a single-page informational site. It does not
        include a contact form, user account system, or online checkout,
        and it does not knowingly collect personal information directly
        through the pages you are viewing.
      </p>

      <h2>Appointment Booking</h2>
      <p>
        Booking an appointment happens on Vagaro, a third-party scheduling
        platform, not on this website. Any personal information you provide
        when booking — such as your name, phone number, or email address —
        is submitted to and handled by Vagaro under its own privacy policy.
        We encourage you to review{" "}
        <a href="https://www.vagaro.com" target="_blank" rel="noopener noreferrer">
          Vagaro's privacy policy
        </a>{" "}
        before booking.
      </p>

      <h2>Cookies and Local Storage</h2>
      <p>
        This site does not use tracking or advertising cookies. The cookie
        notice shown on your first visit stores a small marker in your
        browser's local storage only so the notice isn't shown again — no
        other data is stored or shared as a result of dismissing it. If
        this site later adds analytics or other tools that use cookies,
        this policy will be updated to describe them before they are
        turned on.
      </p>

      <h2>External Links</h2>
      <p>
        This site links to third-party services, including Vagaro
        (booking), Instagram, Facebook, and Google Maps. Each of these
        services has its own privacy policy governing how it handles your
        information, which we do not control.
      </p>

      <h2>Children's Privacy</h2>
      <p>
        This website is not directed at children and does not knowingly
        collect information from children.
      </p>

      <h2>Changes to This Policy</h2>
      <p>
        This policy may be updated from time to time, for example if the
        site adds new features that affect how information is handled. The
        date above reflects the most recent update.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about this policy can be directed to {business.name} by
        phone at{" "}
        <a href={`tel:${business.phone.tel}`}>{business.phone.display}</a>.
      </p>

      <p>
        See also our <a href={legal.termsUrl}>Terms &amp; Conditions</a>.
      </p>
    </LegalPage>
  );
}
