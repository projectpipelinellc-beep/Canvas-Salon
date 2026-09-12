import type { ReactNode } from "react";
import ConceptBanner from "./ConceptBanner";
import Header from "./Header";
import Footer from "./Footer";
import MobileActionBar from "./MobileActionBar";
import CookieConsent from "./CookieConsent";

interface PageChromeProps {
  /** True for standalone pages outside the one-page layout (legal pages). */
  isSubpage?: boolean;
  children: ReactNode;
}

/**
 * Shared page shell — concept banner, sticky header, footer, mobile action
 * bar and cookie notice — used by both the one-page home layout and the
 * standalone legal pages, so they stay visually and behaviorally identical.
 */
export default function PageChrome({ isSubpage = false, children }: PageChromeProps) {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <ConceptBanner />
      <Header isSubpage={isSubpage} />

      <main id="main-content">{children}</main>

      <Footer isSubpage={isSubpage} />
      <MobileActionBar />
      <CookieConsent />
    </>
  );
}
