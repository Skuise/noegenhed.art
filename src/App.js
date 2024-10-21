import React, { useState, useEffect } from 'react';
import './App.css';
import CommissionHomePage from './CommissionHomePage';
import Gallery from './Gallery';
import About from './About';
import Contact from './Contact';
import Terms from './Terms';

function App() {
  const [currentHash, setCurrentHash] = useState(window.location.hash.replace('#', '') || '/');

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash.replace('#', '') || '/');
    };

    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <div className="App">
      {currentHash === '/' && <CommissionHomePage />}
      {currentHash === '/gallery' && <Gallery />}
      {currentHash === '/about' && <About />}
      {currentHash === '/contact' && <Contact />}
      {currentHash === '/terms' && <Terms />}
    </div>
  );
}

export default App;