import PageChrome from "./components/PageChrome";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import Services from "./components/Services";
import Artists from "./components/Artists";
import Gallery from "./components/Gallery";
import Reviews from "./components/Reviews";
import Experience from "./components/Experience";
import Visit from "./components/Visit";
import FinalCta from "./components/FinalCta";

export default function App() {
  return (
    <PageChrome>
      <Hero />
      <Intro />
      <Services />
      <Artists />
      <Gallery />
      <Reviews />
      <Experience />
      <Visit />
      <FinalCta />
    </PageChrome>
  );
}
