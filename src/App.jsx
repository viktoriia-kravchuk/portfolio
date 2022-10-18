import './App.css';
import React, {useState} from "react";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Work from './components/Work';
import Contact from './components/Contact';

function App() {

  const [showNav, setShowNav] = useState(false);


  const handleClick = () => {
    setShowNav(!showNav);
  };

  return (
    <div>
      <Navbar showNav={showNav} handleClick={handleClick}/>
      <Home showNav={showNav}/>
      <About/>
      <Skills/>
      <Work/>
      <Contact/>
    </div>
  );
}

export default App;
