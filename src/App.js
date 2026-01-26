import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import EndUapSecrecy from './components/EndUapSecrecy';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Navigate to="/work" replace />} />
          <Route path="/work" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/end-uap-secrecy" element={<EndUapSecrecy />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;