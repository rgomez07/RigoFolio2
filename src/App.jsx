import { Test } from "./Test";
import"./app.scss"
import Navbar from "./components/Navbar/Navbar/Navbar";
import Parallax from "./components/Parallax/Parallax";
import Hero from "./components/hero/Hero";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";

const App = () => {
  return <div>
    <section id="Homepage">
      <Navbar/>
      <Hero/>
      </section>
    <section id="Services"><Parallax type="services"/></section>
    <section><Services/></section>
    <section id="Portfolio"><Parallax type="portfolio"/></section>
    <Portfolio />

    <section id="Contact">Contact</section>

  </div>;
};

export default App;
