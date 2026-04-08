import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Problem } from "./components/Problem";
import { Difference } from "./components/Difference";
import { Products } from "./components/Products";
import { Ecosystem } from "./components/Ecosystem";
import { AuthorityQuotes } from "./components/AuthorityQuotes";
import { GlobalSeal } from "./components/GlobalSeal";
import { Blog } from "./components/Blog";
import { Challenge } from "./components/Challenge";
import { ForWho } from "./components/ForWho";
import { Teachers } from "./components/Teachers";
import { Testimonials } from "./components/Testimonials";
import { MapSection } from "./components/MapSection";
import { Newsletter } from "./components/Newsletter";
import { Scores } from "./components/Scores";
import { Fluxogramas } from "./components/Fluxogramas";
import { FinalCTA } from "./components/FinalCTA";
import { Footer } from "./components/Footer";
import { WhatsAppButton } from "./components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Header />
      <WhatsAppButton />
      <main>
        <Hero />
        <Problem />
        <Difference />
        <Products />
        <Ecosystem />
        <AuthorityQuotes />
        <GlobalSeal />
        <Blog />
        <Challenge />
        <ForWho />
        <Teachers />
        <Testimonials />
        <MapSection />
        <Newsletter />
        <Scores />
        <Fluxogramas />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
