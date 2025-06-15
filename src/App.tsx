import React from 'react';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <About />
            <Skills />
            <Projects />
            <Contact />
          </>
        } />
        <Route path="/projects" element={<Projects />} />
        {/* Add more pages if needed */}
      </Routes>
    </Router>
  );
}

export default App;
