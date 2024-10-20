import React, { useState, useRef } from 'react';
import './CommissionHomePage.css';

const MinusIcon = () => <span>-</span>;
const PlusIcon = () => <span>+</span>;


const commissionTypes = [
  {
    id: 1,
    name: "Sketches",
    description: "Sketches can be rougher or cleaner, have some simple colour-toning, or just be lines.",
    images: [
      "https://noegenhed.s3.amazonaws.com/art/Sketches/april sketchbook 2023 my art wolfizen commission.png",
      "https://noegenhed.s3.amazonaws.com/art/Sketches/December sketchbook 2021 myart BROOKE BIRTHDAY .png",
      "https://noegenhed.s3.amazonaws.com/art/Sketches/December sketchbook 2022 my art lycandope jan patreon commission.png",
      "https://noegenhed.s3.amazonaws.com/art/Sketches/December sketchbook 2022 my art lycandope patreon commission.png",
      "https://noegenhed.s3.amazonaws.com/art/Sketches/December sketchbook 2022 my art telv.png",
      "https://noegenhed.s3.amazonaws.com/art/Sketches/February Sketchbook 2023 my art redthedragon commission 1.png",
      "https://noegenhed.s3.amazonaws.com/art/Sketches/February sketchbook 2024 Brooke BJ commission.png",
      "https://noegenhed.s3.amazonaws.com/art/Sketches/January sketchbook 2021 commission Brooke Jordy knot.png",
      "https://noegenhed.s3.amazonaws.com/art/Sketches/July Sketchbook 2022 my art Lycandope Hyena Commission.png",
      "https://noegenhed.s3.amazonaws.com/art/Sketches/Screenshot 2024-05-14 at 11.54.05.png"
    ],
    tableData: [
      { coverage: "Full-body", price: "$60", additionalCharacters: "$50" },
      { coverage: "Half-body", price: "$40", additionalCharacters: "$30" },
      { coverage: "Bust", price: "$30", additionalCharacters: "$20" },
      { coverage: "Head shot / detail shot", price: "$20", additionalCharacters: "$10" },
    ],
    backgroundPrice: { min: 30, max: 70 }
  },
  {
    id: 2,
    name: "Coloured Sketches",
    description: "Coloured sketches will be flat-coloured and will have some minor additional rendering.",
    images: [
      "https://noegenhed.s3.amazonaws.com/art/Coloured Sketches/May 2022 sketchbook my art cow breed 1.png",
      "https://noegenhed.s3.amazonaws.com/art/Coloured Sketches/Noegenhed october sketchbook 2024 Gentle Abraham commission tits.png",
      "https://noegenhed.s3.amazonaws.com/art/Coloured Sketches/Screenshot 2024-09-11 at 03.45.04.png",
      "https://noegenhed.s3.amazonaws.com/art/Coloured Sketches/Noegenhed september sketchbook 2024 Gentle goop wyvern 1.png",
      "https://noegenhed.s3.amazonaws.com/art/Coloured Sketches/Noegenhed september sketchbook 2024 Nerius cheetah commission colours.png",
      "https://noegenhed.s3.amazonaws.com/art/Coloured Sketches/Screenshot 2024-09-21 at 15.02.51.png",
      "https://noegenhed.s3.amazonaws.com/art/Coloured Sketches/space gays shopkeep.png",
      "https://noegenhed.s3.amazonaws.com/art/Coloured Sketches/april sketchbook 2023 my art Gentle snake parasites commission.png",
      "https://noegenhed.s3.amazonaws.com/art/Coloured Sketches/april sketchbook 2023 my art Lycandope Telv payback commission.png"
    ],   
    tableData: [
      { coverage: "Full-body", price: "$80", additionalCharacters: "$50" },
      { coverage: "Half-body", price: "$40", additionalCharacters: "$30" },
      { coverage: "Bust", price: "$30", additionalCharacters: "$20" },
      { coverage: "Head shot / detail shot", price: "$20", additionalCharacters: "$10" },
    ],
    backgroundPrice: { min: 50, max: 100 }
  },
  {
    id: 3,
    name: "Illustrations and paintings",
    description: "You can choose between lines (illustration) or no lines (painting).",
    disclaimer: "This type is more time consuming, and complexity of design and rendering will affect the estimated price.",
    images: [
      "https://noegenhed.s3.amazonaws.com/art/Paintings and Illustrations/February sketchbook 2024 Husky painting noegenhed.png",
      "https://noegenhed.s3.amazonaws.com/art/Paintings and Illustrations/antstump.png",
      "https://noegenhed.s3.amazonaws.com/art/Paintings and Illustrations/April sketchbook 2021 lycandoe commission no watermark copy.png",
      "https://noegenhed.s3.amazonaws.com/art/Paintings and Illustrations/brooke cow painting nomyulk.png",
      "https://noegenhed.s3.amazonaws.com/art/Paintings and Illustrations/CloudyOriginal commission my art.png",
      "https://noegenhed.s3.amazonaws.com/art/Paintings and Illustrations/December sketchbook 2022 my art space gays ben on betty concept my art.png",
      "https://noegenhed.s3.amazonaws.com/art/Paintings and Illustrations/February sketchbook 2024 Pike Katja sex roulette commission Brooke.png",
      "https://noegenhed.s3.amazonaws.com/art/Paintings and Illustrations/Kane dragon commission my art 2024 done--.png",
      "https://noegenhed.s3.amazonaws.com/art/Paintings and Illustrations/Klarry beholder my art print 2 single.png"
    ],  
    tableData: [
      { coverage: "Full-body", price: "$100", additionalCharacters: "$80" },
      { coverage: "Half-body", price: "$80", additionalCharacters: "$60" },
      { coverage: "Bust", price: "$60", additionalCharacters: "$40" },
      { coverage: "Head shot / detail shot", price: "$40", additionalCharacters: "$30" },
    ],
    backgroundPrice: { min: 70, max: 200 }
  },
  {
    id: 4,
    name: "Sketchpage",
    description: "These will on average be looser than the above categories, and will be more based on vibes than exact scenarios.",
    images: [
      "https://noegenhed.s3.amazonaws.com/art/Sketches/Screenshot 2024-03-28 at 20.06.02.png",
      "https://noegenhed.s3.amazonaws.com/art/Sketches/Screenshot 2024-04-17 at 02.46.22.png",
      "https://noegenhed.s3.amazonaws.com/art/Sketches/Screenshot 2024-04-18 at 07.33.20.png",
    ],
    tableData: [
      { coverage: "Sketch", price: "$150" },
      { coverage: "Coloured sketch", price: "$200" },
      { coverage: "Illustration/painting", price: "$350" },
    ]
  },
  {
    id: 5,
    name: "Reference sheet",
    description: "These can range from just a simple full-body with some text to fully fledged reference sheets.",
    disclaimer: "A full reference sheet will on average include: 2 full-bodies (+ optional alt shot), 1 half-body shot, 1 horizontal shot (can have background), 2 expression shots, and some detail shots.",
    images: [
      "https://noegenhed.s3.amazonaws.com/art/Reference sheets/Brooke cow ref sheet 2023.png",
      "https://noegenhed.s3.amazonaws.com/art/Reference sheets/Brooke Era ref sheet small meow small file also.png",
      "https://noegenhed.s3.amazonaws.com/art/Reference sheets/Lycandope werewolf ref sheet my art July 2023 copy.png",
    ],
    tableData: [
      { coverage: "Simple", price: "$90" },
      { coverage: "Medium", price: "$200" },
      { coverage: "Full", price: "$300" },
    ]
  },
  {
    id: 6,
    name: "Experimental",
    description: "This option is a no-control situation, sign up for a surprise!",
    images: [
      "https://noegenhed.s3.amazonaws.com/art/Sketches/Screenshot 2024-05-14 at 11.54.05.png",
      "https://noegenhed.s3.amazonaws.com/art/Sketches/Screenshot 2024-05-14 at 12.40.24.png",
      "https://noegenhed.s3.amazonaws.com/art/Coloured Sketches/Screenshot 2024-05-14 at 14.57.31.png",
    ],
    tableData: [
      { coverage: "Flat price", price: "$50" },
    ]
  }
];

const backgroundTypes = [
  { type: "Simple background", price: "Varies by commission type" },
  { type: "Basic background", price: "Varies by commission type" },
  { type: "Complex background", price: "Varies by commission type" },

];

const Navigation = () => {
  return (
    <nav>
      <div className="main-nav">
        <ul>
<li><a href="#/">Prices</a></li>
<li><a href="#/gallery">Gallery</a></li>
<li><a href="#/about">About</a></li>
<li><a href="#/contact">Contact</a></li>
<li><a href="#/terms">Terms</a></li>
        </ul>
      </div>
    </nav>
  );
};

const ImageRow = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const containerRef = useRef(null);

  const scrollImages = (direction) => {
    const container = containerRef.current;
    if (container) {
      const scrollAmount = direction === 'left' ? -200 : 200;
      container.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const handlePrev = () => scrollImages('left');
  const handleNext = () => scrollImages('right');

  return (
    <div className="image-row-container">
      <button className="nav-button prev" onClick={handlePrev}>
        <i className="fas fa-chevron-left"></i>
      </button>
      <div className="image-row" ref={containerRef}>
        <div className="image-container">
          {images.map((img, index) => (
            <div
              key={index}
              className="image-wrapper"
              onClick={() => setSelectedImage(img)}
            >
              <img src={img} alt={`Example ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
      <button className="nav-button next" onClick={handleNext}>
        <i className="fas fa-chevron-right"></i>
      </button>
      {selectedImage && (
        <div className="modal-overlay" onClick={() => setSelectedImage(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={() => setSelectedImage(null)}>
              <i className="fas fa-times"></i>
            </button>
            <img src={selectedImage} alt="Selected Example" className="full-size-image" />
          </div>
        </div>
      )}
    </div>
  );
};

const QuoteCalculator = () => {
  const [commissionType, setCommissionType] = useState('');
  const [coverage, setCoverage] = useState('');
  const [background, setBackground] = useState('');
  const [additionalCharacters, setAdditionalCharacters] = useState(0);
  const [quote, setQuote] = useState(null);

  const handleAdditionalCharacters = (change) => {
    setAdditionalCharacters(prev => Math.max(0, prev + change));
  };

  const calculateQuote = () => {
    if (!commissionType || !coverage) {
      alert('Please select a commission type and coverage');
      return;
    }

    const selectedType = commissionTypes.find(type => type.name === commissionType);
    const selectedCoverage = selectedType.tableData.find(item => item.coverage === coverage);
    const basePrice = parseInt(selectedCoverage.price.replace('$', ''));
    
    let total = basePrice;

    if (selectedType.backgroundPrice && background) {
      total += selectedType.backgroundPrice.min;
    }

    if (additionalCharacters > 0 && selectedCoverage.additionalCharacters) {
      const additionalPrice = parseInt(selectedCoverage.additionalCharacters.replace('$', ''));
      total += additionalPrice * additionalCharacters;
    }

    if (selectedType.backgroundPrice && background) {
      setQuote(`$${total} - $${total - selectedType.backgroundPrice.min + selectedType.backgroundPrice.max}`);
    } else {
      setQuote(`$${total}`);
    }
  };

  return (
    <div className="quote-calculator">
      <h2>Commission Quote Calculator</h2>
      <div>
        <label>Commission Type:</label>
        <select value={commissionType} onChange={(e) => setCommissionType(e.target.value)}>
          <option value="">Select a type</option>
          {commissionTypes.map(type => (
            <option key={type.id} value={type.name}>{type.name}</option>
          ))}
        </select>
      </div>
      {commissionType && (
        <div>
          <label>Coverage:</label>
          <select value={coverage} onChange={(e) => setCoverage(e.target.value)}>
            <option value="">Select coverage</option>
            {commissionTypes.find(type => type.name === commissionType).tableData.map((item, index) => (
              <option key={index} value={item.coverage}>{item.coverage}</option>
            ))}
          </select>
        </div>
      )}
      {commissionType && ['Sketches', 'Coloured Sketches', 'Illustrations and paintings'].includes(commissionType) && (
        <div>
          <label>Background:</label>
          <select value={background} onChange={(e) => setBackground(e.target.value)}>
            <option value="">No background</option>
            {backgroundTypes.map((bg, index) => (
              <option key={index} value={bg.type}>{bg.type}</option>
            ))}
          </select>
        </div>
      )}
      {commissionType && coverage && commissionTypes.find(type => type.name === commissionType).tableData.find(item => item.coverage === coverage).additionalCharacters && (
        <div>
          <label>Additional Characters:</label>
          <div className="additional-characters-input">
            <button onClick={() => handleAdditionalCharacters(-1)} disabled={additionalCharacters === 0}>
              <MinusIcon />
            </button>
            <input 
              type="number" 
              min="0" 
              value={additionalCharacters} 
              onChange={(e) => setAdditionalCharacters(Math.max(0, parseInt(e.target.value) || 0))}
              readOnly
            />
            <button onClick={() => handleAdditionalCharacters(1)}>
              <PlusIcon />
            </button>
          </div>
        </div>
      )}
      <button onClick={calculateQuote}>Calculate Quote</button>
      {quote !== null && (
        <div className="quote-result">
          <h3>Estimated Quote: {quote}</h3>
          <p>Please note that this is an estimate. Final price may vary based on specific requirements.</p>
        </div>
      )}
    </div>
  );
};

const Footer = () => {
  return (
    <footer>
      <div className="social-icons">
        <a href="https://www.furaffinity.net/user/noegenhed/" target="_blank" rel="noopener noreferrer">
          <i className="fa-solid fa-paw"></i>
        </a>
        <a href="https://x.com/noegenhed?lang=en" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://www.patreon.com/noegenhed" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-patreon"></i>
        </a>
      </div>
    </footer>
  );
};

const CommissionHomePage = () => {
  return (
    <div className="commission-home-page">
      <header>
        <img src="https://noegenhed.s3.amazonaws.com/logo-colorized.png" alt="Nogenhed Logo" className="logo" />
        <Navigation />
      </header>
      <div className="commission-types-container">
        {commissionTypes.map((type) => (
          <div key={type.id} className={`commission-type-section ${['Sketchpage', 'Reference sheet', 'Experimental'].includes(type.name) ? 'compact-commission-type' : ''}`}>
            <div className="commission-type-header">
              <h2 className="type-title">{type.name}</h2>
              <p className="type-description">{type.description}</p>
              {type.disclaimer && (
                <p className="type-disclaimer">{type.disclaimer}</p>
              )}
            </div>
            {type.images && type.images.length > 0 && (
              <ImageRow images={type.images} />
            )}
            <div className="commission-type">
              <div className="commission-content">
                <table className="commission-table">
                  <thead>
                    <tr>
                      <th>Coverage</th>
                      <th>Price</th>
                      {type.tableData[0].additionalCharacters && <th>Additional Characters</th>}
                    </tr>
                  </thead>
                  <tbody>
                    {type.tableData.map((row, index) => (
                      <tr key={index}>
                        <td>{row.coverage}</td>
                        <td>{row.price}</td>
                        {row.additionalCharacters && <td>{row.additionalCharacters}</td>}
                      </tr>
                    ))}
                  </tbody>
                </table>
                {type.backgroundPrice && (
                  <table className="background-price-table">
                    <thead>
                      <tr>
                        <th>
                          Background Price Range
                          <br />
                          <span className="background-price-subtitle">Varies with complexity</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>${type.backgroundPrice.min} - ${type.backgroundPrice.max}</td>
                      </tr>
                    </tbody>
                  </table>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <QuoteCalculator />
      <Footer />
    </div>
  );
};

export default CommissionHomePage;
