import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Why } from "./components/Why";
import { Features } from "./components/Features";
import { HowItWorks } from "./components/HowItWorks";
import { Principles } from "./components/Principles";
import { Personas } from "./components/Personas";
import { FAQ } from "./components/FAQ";
import { Closing } from "./components/Closing";
import { Footer } from "./components/Footer";
import { StickyCTA } from "./components/StickyCTA";
export default function App() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <Why />
        <Features />
        <HowItWorks />
        <Principles />
        <Personas />
        <FAQ />
        <Closing />
      </main>
      <Footer />
      <StickyCTA />
    </>
  );
}
