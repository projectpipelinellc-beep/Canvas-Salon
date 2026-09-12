import type { ReactNode } from "react";
import PageChrome from "./PageChrome";
import "./LegalPage.css";

interface LegalPageProps {
  eyebrow: string;
  title: string;
  updated: string;
  children: ReactNode;
}

/** Shared layout for the standalone Privacy Policy and Terms pages. */
export default function LegalPage({ eyebrow, title, updated, children }: LegalPageProps) {
  return (
    <PageChrome isSubpage>
      <section className="legal section section--ivory">
        <div className="container legal__container">
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="legal__title">{title}</h1>
          <p className="legal__updated">{updated}</p>
          <div className="legal__body">{children}</div>
        </div>
      </section>
    </PageChrome>
  );
}
