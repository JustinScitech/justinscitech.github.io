// App.js
import React, { useState, useEffect } from "react";
import { BrowserRouter } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ThreeDim from './components/ThreeDim';
import Footer from './components/Footer';
import Awards from './components/Awards';

const App = () => {
  const fade = useSpring({ from: { opacity: 0 }, to: { opacity: 1 }, delay: 800 });

  return (
    <animated.div style={fade}>
      <BrowserRouter>
        <div className="relative bg-primary">
          <div className='bg-topbg bg-cover bg-no-repeat bg-center'>
            <div className="relative z-50"><Navbar /></div>
            <div className="pt-20 z-0">
              <ThreeDim />
            </div>
          </div>
        </div>
        <div className="relative bg-primary">
          <About />
          <div className="pt-20 z-0"><Skills /></div>
          <div className="pt-20 z-0"><Experience /></div>
          <div className="pt-10 relative bg-primary"><Projects /></div>
        </div>
        <div className="pt-10 relative bg-primary">
          <Awards />
        </div>
        <div className="pt-10 relative bg-primary">
          <Contact />
        </div>
        <Footer />
      </BrowserRouter>
    </animated.div>
  );
}

export default App;
