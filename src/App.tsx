import ConceptBanner from "./components/ConceptBanner";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import Services from "./components/Services";
import Artists from "./components/Artists";
import Gallery from "./components/Gallery";
import Reviews from "./components/Reviews";
import Experience from "./components/Experience";
import Visit from "./components/Visit";
import FinalCta from "./components/FinalCta";
import Footer from "./components/Footer";
import MobileActionBar from "./components/MobileActionBar";

export default function App() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <ConceptBanner />
      <Header />

      <main id="main-content">
        <Hero />
        <Intro />
        <Services />
        <Artists />
        <Gallery />
        <Reviews />
        <Experience />
        <Visit />
        <FinalCta />
      </main>

      <Footer />
      <MobileActionBar />
    </>
  );
}
