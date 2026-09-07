import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="bg-black min-h-screen text-white">
      {/* 1. Navigation Bar */}
      <Navbar />
      
      {/* 2. Hero Section */}
      <Hero />
      
      {/* 3. Services Section */}
      <Services />
      
      {/* 4. Portfolio / Recent Works */}
      <Portfolio />
      
      {/* 5. Contact Form (Firebase Connected) */}
      <ContactForm />
      
      {/* 6. Footer */}
      <Footer />
    </main>
  );
}