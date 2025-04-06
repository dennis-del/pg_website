import Hero from "./components/Hero";
import Facilities from "./components/Facilities";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import Price_details from "./components/Price_details";
import Chatbot from "./components/Chatbot";

export default function Home() {
  return (
    <div>
      <Hero />
      <Facilities />
      <Gallery />
      <Testimonials />
      <Price_details />
      <Chatbot /> {/* Floating chatbot button */}
    </div>
  );
}
