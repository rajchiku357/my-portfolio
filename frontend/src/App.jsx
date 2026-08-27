import React from 'react';
import BackgroundShader from './components/BackgroundShader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen bg-dark-900 text-gray-100 flex flex-col justify-between overflow-x-hidden selection:bg-brand-blue selection:text-white">
      {/* Dynamic Animated WebGL Shader Canvas Background */}
      <BackgroundShader />

      {/* Main Content Layer */}
      <div className="relative z-10 flex-1 flex flex-col justify-between">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
