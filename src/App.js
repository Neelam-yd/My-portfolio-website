
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Service from './Components/Service';
import Skills from './Components/Skills';
import Project from './Components/Project';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Project/>
      <Service/>
      <Skills/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
