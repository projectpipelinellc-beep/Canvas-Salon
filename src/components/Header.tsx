import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { business, navLinks } from "../data/siteData";
import "./Header.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const barRef = useRef<HTMLDivElement>(null);

  // The header sits below the concept banner until scrolled to the top of
  // the viewport (only the header itself is sticky). Measure its actual
  // bottom edge so the mobile menu panel and its scrim always start exactly
  // beneath it, at any scroll position.
  useLayoutEffect(() => {
    const setOffset = () => {
      const bottom = barRef.current?.getBoundingClientRect().bottom ?? 0;
      document.documentElement.style.setProperty(
        "--mobile-menu-top",
        `${bottom}px`
      );
    };
    setOffset();
    window.addEventListener("resize", setOffset);
    window.addEventListener("scroll", setOffset, { passive: true });
    return () => {
      window.removeEventListener("resize", setOffset);
      window.removeEventListener("scroll", setOffset);
    };
  }, [menuOpen]);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Close on Escape, return focus to the toggle button.
  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  // Clear the scroll lock synchronously (not just via the effect above) so
  // an in-page anchor's native hash-jump — which fires as part of this same
  // click's default action — isn't blocked by a body still locked to
  // overflow: hidden.
  const closeMenu = () => {
    document.body.style.overflow = "";
    setMenuOpen(false);
  };

  return (
    <header className="site-header">
      {/*
        The blur/background lives on this inner bar rather than the <header>
        itself: a backdrop-filter establishes a new containing block for any
        `position: fixed` descendant, which would otherwise size the mobile
        menu and its scrim relative to this bar instead of the viewport.
      */}
      <div className="site-header__bar" ref={barRef}>
        <div className="container site-header__row">
          <a href="#top" className="site-header__logo" aria-label="Canvas Salon Studio, back to top">
            Canvas <span>Salon Studio</span>
          </a>

          <nav className="site-header__nav" aria-label="Primary">
            <ul>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="site-header__actions">
            <a href={`tel:${business.phone.tel}`} className="site-header__phone">
              {business.phone.display}
            </a>
            <a
              href={business.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-sm"
            >
              Book Now
            </a>
          </div>

          <button
            ref={toggleRef}
            type="button"
            className="site-header__toggle"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="visually-hidden">
              {menuOpen ? "Close menu" : "Open menu"}
            </span>
            <span className={`hamburger ${menuOpen ? "is-open" : ""}`} aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        ref={menuRef}
        className={`mobile-menu ${menuOpen ? "is-open" : ""}`}
        aria-hidden={!menuOpen}
      >
        <nav aria-label="Mobile">
          <ul>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={closeMenu} tabIndex={menuOpen ? 0 : -1}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="mobile-menu__actions">
          <a
            href={`tel:${business.phone.tel}`}
            className="btn btn-ghost btn-block"
            tabIndex={menuOpen ? 0 : -1}
          >
            Call {business.phone.display}
          </a>
          <a
            href={business.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-block"
            tabIndex={menuOpen ? 0 : -1}
          >
            Book Now
          </a>
        </div>
      </div>

      {menuOpen && (
        <button
          type="button"
          className="mobile-menu__scrim"
          aria-label="Close menu"
          onClick={closeMenu}
        />
      )}
    </header>
  );
}
