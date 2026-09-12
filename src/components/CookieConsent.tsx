import { useState } from "react";
import "./CookieConsent.css";

const STORAGE_KEY = "canvas-salon-cookie-notice-ack";

function readAcknowledged(): boolean {
  try {
    return window.localStorage.getItem(STORAGE_KEY) === "1";
  } catch {
    // Storage unavailable — fall back to showing the notice each visit.
    return false;
  }
}

/**
 * A straightforward cookie/privacy notice rather than a fake "Accept /
 * Reject" choice: this site does not set tracking or advertising cookies,
 * so there is nothing to opt in or out of. Dismissing the notice is
 * remembered in localStorage (guarded, since it can be unavailable in
 * private browsing or with storage blocked).
 */
export default function CookieConsent() {
  const [visible, setVisible] = useState(() => !readAcknowledged());

  const dismiss = () => {
    try {
      window.localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      // Ignore — the notice will simply reappear next visit.
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="cookie-consent" role="region" aria-label="Cookie notice">
      <div className="container cookie-consent__inner">
        <p className="cookie-consent__text">
          This website does not use tracking or advertising cookies. A small
          amount of local data is stored on your device only to remember
          your preferences, such as dismissing this notice. See our{" "}
          <a href="/privacy.html">Privacy Policy</a> for details.
        </p>
        <button type="button" className="btn btn-primary btn-sm cookie-consent__btn" onClick={dismiss}>
          Got it
        </button>
      </div>
    </div>
  );
}
