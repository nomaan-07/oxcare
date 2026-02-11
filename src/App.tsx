import { Appointment } from "./components/sections/Appointment";
import { Callback } from "./components/sections/Callback";
import { Footer } from "./components/sections/Footer";
import { Header } from "./components/sections/Header";
import { Hero } from "./components/sections/Hero";
import { Services } from "./components/sections/Services";
import { Stats } from "./components/sections/Stats";
import { Testimonials } from "./components/sections/Testimonials";
import { WhyUs } from "./components/sections/WhyUs";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Stats />
      <Services />
      <Appointment />
      <Testimonials />
      <WhyUs />
      <Callback />
      <Footer />
    </>
  );
}

export default App;
