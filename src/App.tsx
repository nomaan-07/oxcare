import { Footer } from "./components/layout/Footer";
import { Header } from "./components/layout/Header";
import { About } from "./components/sections/About";
import { Appointment } from "./components/sections/Appointment";
import { Contact } from "./components/sections/Contact";
import { Hero } from "./components/sections/Hero";
import { Services } from "./components/sections/Services";
import { Stats } from "./components/sections/Stats";
import { Testimonials } from "./components/sections/Testimonials";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Stats />
      <Services />
      <Appointment />
      <Testimonials />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
