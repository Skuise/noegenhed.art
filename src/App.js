import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import CommissionHomePage from './CommissionHomePage';
import Gallery from './Gallery';
import About from './About';
import Contact from './Contact';
import Terms from './Terms';

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<CommissionHomePage />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
