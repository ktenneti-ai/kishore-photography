import { MotionConfig } from "framer-motion";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Gallery } from "./components/Gallery";
import { Story } from "./components/Story";
import { WeddingFeature } from "./components/WeddingFeature";
import { Services } from "./components/Services";
import { About } from "./components/About";
import { Testimonials } from "./components/Testimonials";
import { InstagramStrip } from "./components/InstagramStrip";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="bg-cream">
        <Navbar />
        <main>
          <Hero />
          <Gallery />
          <Story />
          <WeddingFeature />
          <Services />
          <About />
          <Testimonials />
          <InstagramStrip />
          <Contact />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  );
}
