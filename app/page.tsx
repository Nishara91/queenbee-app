import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Gallery from "./components/Gallery"; // <--- අලුතින් හදපු ෆයිල් එක Import කරා
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="bg-black min-h-screen text-white">
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      
      {/* <--- අලුත් Gallery සෙක්ෂන් එක Portfolio එකට යටින් දැම්මා ---> */}
      <Gallery /> 
      
      <ContactForm />
      <Footer />
    </main>
  );
}