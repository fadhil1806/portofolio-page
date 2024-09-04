// components
import { Navbar, Footer } from "@/components";

// sections
import Hero from "./hero";
import Clients from "./clients";
import Skills from "./skills";
import Projects from "./projects";
import Resume from "./resume";
import Testimonial from "./testimonial";
import PopularClients from "./popular-clients";
import ContactForm from "./contact-form";
import Blog from "@/components/Blog";
import App from "@/components/Slider";
import Stats from "@/components/Stats";
import Marketing from "@/components/MarketingCard";

export default function Portfolio() {
  return (
    <>
      <Navbar />
      <App/>
      <Hero />
      <Clients />
      <Skills />
      <Marketing/>
      <Projects />
      <Resume />
      <Stats/>
      <Blog/>
      <PopularClients />
      <ContactForm />
      <Footer />
    </>
  );
}
