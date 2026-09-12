import LegalPage from "../components/LegalPage";
import { business, legal } from "../data/siteData";

/**
 * DEVELOPER / OWNER NOTE ───────────────────────────────────────────────
 * Placeholder legal content for a private redesign concept — not legal
 * advice, and not a substitute for review by a qualified professional.
 * Keeps to general, defensible statements about use of the website
 * itself; it does not invent licensing, warranty, or business terms that
 * haven't been confirmed by the owner. Finalize before this concept is
 * published as a real, live website.
 * ───────────────────────────────────────────────────────────────────────
 */
export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Terms & Conditions"
      updated="Concept draft — last updated September 12, 2026. To be finalized before launch."
    >
      <div className="legal__notice" role="note">
        These Terms &amp; Conditions are placeholder content prepared for a
        private website redesign concept for {business.name}. They have not
        been reviewed by the business owner or a legal professional and
        should not be relied on until finalized and published on the live
        site.
      </div>

      <h2>Acceptance of Terms</h2>
      <p>
        By using this website, you agree to these Terms &amp; Conditions.
        If you do not agree, please do not use the site.
      </p>

      <h2>Use of This Website</h2>
      <p>
        This website is provided for general information about{" "}
        {business.name} — its services, location, and hours. We aim to
        keep this information accurate, but details such as hours,
        services, and availability can change. Please call{" "}
        <a href={`tel:${business.phone.tel}`}>{business.phone.display}</a>{" "}
        or check the booking page to confirm current information before
        making plans.
      </p>

      <h2>Booking and Estimates</h2>
      <p>
        Appointment booking is handled through Vagaro, a third-party
        platform, and is subject to Vagaro's own terms of use in addition
        to any policies {business.name} communicates to you directly. This
        website itself does not process bookings, payments, or estimates.
      </p>

      <h2>Intellectual Property</h2>
      <p>
        The design, layout, and original text on this website are provided
        as part of a redesign concept and may not be copied or reused
        without permission. Placeholder images used in this concept are
        for demonstration purposes only and are not represented as
        completed {business.name} work.
      </p>

      <h2>Third-Party Links</h2>
      <p>
        This site links to third-party services, including Vagaro,
        Instagram, Facebook, and Google Maps. We are not responsible for
        the content, accuracy, or practices of those external sites.
      </p>

      <h2>No Warranty</h2>
      <p>
        This website is provided "as is," without warranties of any kind,
        express or implied. We do not guarantee that the site will be
        uninterrupted, error-free, or fully up to date at all times.
      </p>

      <h2>Limitation of Liability</h2>
      <p>
        To the fullest extent permitted by law, {business.name} is not
        liable for any indirect or consequential damages arising from your
        use of this website.
      </p>

      <h2>Governing Law</h2>
      <p>
        These terms are intended to be governed by the laws of the State
        of New York, subject to confirmation by the business owner and
        legal counsel before this concept is published.
      </p>

      <h2>Changes to These Terms</h2>
      <p>
        These terms may be updated from time to time. The date above
        reflects the most recent update.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about these terms can be directed to {business.name} by
        phone at{" "}
        <a href={`tel:${business.phone.tel}`}>{business.phone.display}</a>.
      </p>

      <p>
        See also our <a href={legal.privacyPolicyUrl}>Privacy Policy</a>.
      </p>
    </LegalPage>
  );
}
