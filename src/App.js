import Navbar from "./components/Navbar/Navbar"
import "./App.css"
import Intro from "./components/Intro/intro"
import Services  from "./components/Services/Services";
import Experience from "./components/Experience/Experience";
import Work from "./components/Work/Work";
import { Portfolio } from "./components/Portfolio/Portfolio";
import Testimonial from "./components/Testimonial/Testimonial";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
function App() {
  return ( 
    <div className="App">
    <Navbar/>
    <Intro/>
    <Services/>
    <Experience/>
    <Work/>
    <Portfolio/>
    <Testimonial/>
    <Contact/>
    <Footer/>
    
    </div>
  );
}
export default App;
