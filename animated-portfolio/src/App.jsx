import "./app.scss";
import Navbar from "./components/navbar/Navbar";
import Portfolio from "./components/portfolio/Portfolio";
import Parallax from "./components/parallax/Parallax";
import Contact from "./components/contact/Contact";
import Hero from "./components/hero/Hero";

const App = () => {
  return <div>
  <section id = "Homepage">
    <Navbar/>
    <Hero/>
    </section>
    <section id = "Stages">
      <Parallax type="portfolio"/>
      </section>
    <Portfolio/>
    <section id = "Contact" >
      <Parallax type="contact"/>
    </section>
   


  </div>;
};

export default App;
