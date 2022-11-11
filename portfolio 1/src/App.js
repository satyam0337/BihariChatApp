import About from "./components/About";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";
import Footer from "./components/Footer"
import Statistics from "./components/Statistics";
import Projects from "./components/Projects";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Skills />
<Projects/>
      {/* <Portfolio /> */}
      <Statistics />
      <Contact />
      <Footer />
      <SocialLinks />
 



    </div>
  );
}

export default App;
