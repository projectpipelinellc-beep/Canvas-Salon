import "./ConceptBanner.css";

/**
 * Slim, always-visible disclosure that this is a private redesign concept,
 * not the salon's published website. Intentionally simple markup — no
 * dismiss control — so the disclosure can't be hidden by a visitor.
 */
export default function ConceptBanner() {
  return (
    <div className="concept-banner" role="note">
      <p className="concept-banner__text">
        Website Redesign Concept — Final content and imagery subject to
        owner approval.
      </p>
    </div>
  );
}
