
import Navbar from "./Component/NavBar/Navbar";
import Intro from "./Component/Intro/Intro"
import Skills from "./Component/Skills/Skills";
import Works from "./Component/Works/Works";
import Contact from "./Component/Contact/Contact";
import Footer from "./Component/Footer/Footer";


function App() {
  return (
    <div className="App">
      
        <>
        <Navbar/>
        <Intro/>
        <Skills/>
        <Works/>
        <Contact/>
        <Footer/>
        </>
      
    </div>
  );
}

export default App;
