import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import EndUapSecrecy from './components/EndUapSecrecy';
import KoiBento from './components/KoiBento';
import AdaraFusion from './components/AdaraFusion';
import UFO from './components/UFO';
import EnsoBlend from './components/EnsoBlend';
import OptimalTreats from './components/OptimalTreats';
import Gallery1 from './components/Gallery1';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Navigate to="/work" replace />} />
          <Route path="/work" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/end-uap-secrecy" element={<EndUapSecrecy />} />
          <Route path="/koi-bento" element={<KoiBento />} />
          <Route path="/adara-fusion" element={<AdaraFusion />} />
          <Route path="/ufo-report" element={<UFO />} />
          <Route path="/enso-blend" element={<EnsoBlend />} />
          <Route path="/optimal-treats" element={<OptimalTreats />} />
          <Route path="/art-gallery-1" element={<Gallery1 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;