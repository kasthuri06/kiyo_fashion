import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Collections from "./components/Collections";
import EditorialBanner from "./components/EditorialBanner";
import Features from "./components/Features";
import Reviews from "./components/Reviews";
import InstagramGallery from "./components/InstagramGallery";
import VisitStore from "./components/VisitStore";
import ContactCTA from "./components/ContactCTA";
import Footer from "./components/Footer";
import WhatsAppFAB from "./components/WhatsAppFAB";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Collections />
        <EditorialBanner />
        <Features />
        <Reviews />
        <InstagramGallery />
        <VisitStore />
        <ContactCTA />
      </main>
      <Footer />
      <WhatsAppFAB />
    </div>
  );
}
