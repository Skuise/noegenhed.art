import React from 'react';
import CommissionHomePage from './CommissionHomePage';
import Gallery from './Gallery';
import About from './About';
import Contact from './Contact';
import Terms from './Terms';

function App() {
  const path = window.location.pathname;

  return (
    <div className="App">
      {path === '/' && <CommissionHomePage />}
      {path === '/gallery' && <Gallery />}
      {path === '/about' && <About />}
      {path === '/contact' && <Contact />}
      {path === '/terms' && <Terms />}
    </div>
  );
}

export default App;
