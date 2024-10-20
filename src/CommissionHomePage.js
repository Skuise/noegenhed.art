import React, { useState } from 'react';
import './CommissionHomePage.css';

const XMarkIcon = () => <span>×</span>;
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
      "https://noegenhed.s3.amazonaws.com/art/Sketches/July Sketchbook 2022 my art Lycandope Hyena Commission.png"
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
    images: [],
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
    images: [],
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
    images: [],
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
          <li><a href="/">Home</a></li>
          <li><a href="/gallery">Gallery</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/terms">Terms</a></li>
        </ul>
      </div>
    </nav>
  );
};

const ScrollingBanner = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const bannerImages = [
    'https://noegenhed.s3.amazonaws.com/art/Paintings and Illustrations/Kane dragon commission my art 2024 done--.png',
    'https://noegenhed.s3.amazonaws.com/art/Paintings and Illustrations/Roses commission noegenhed.png',
    'https://noegenhed.s3.amazonaws.com/art/Paintings and Illustrations/Lycandope wolfizen train commission.png',
    'https://noegenhed.s3.amazonaws.com/art/Paintings and Illustrations/Klarry beholder my art print 2 single.png',
    'https://noegenhed.s3.amazonaws.com/art/Paintings and Illustrations/December sketchbook 2022 my art space gays ben betty desert cooking.png',
    'https://noegenhed.s3.amazonaws.com/art/Paintings and Illustrations/March 2022 sketchbook my art brooke cow commission bench ver clit sig.png',
    'https://noegenhed.s3.amazonaws.com/art/Paintings and Illustrations/September sketchbook 2020 Pris commission slime time 3.png',
    'https://noegenhed.s3.amazonaws.com/art/Paintings and Illustrations/Yari painting commission fix.png',
    'https://noegenhed.s3.amazonaws.com/art/Paintings and Illustrations/Merv commission final small.png',
    'https://noegenhed.s3.amazonaws.com/art/Paintings and Illustrations/antstump.png'
  ];

  return (
    <>
      <div className="scrolling-banner">
        <div className="banner-content">
          {bannerImages.concat(bannerImages).map((img, index) => (
            <img 
              key={index} 
              src={img} 
              alt={`Banner ${index + 1}`} 
              onClick={() => setSelectedImage(img)}
            />
          ))}
        </div>
      </div>
      {selectedImage && (
        <div className="modal-overlay" onClick={() => setSelectedImage(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={() => setSelectedImage(null)}>
              <XMarkIcon className="w-6 h-6" />
            </button>
            <img src={selectedImage} alt="Selected Banner" className="full-size-image" />
          </div>
        </div>
      )}
    </>
  );
};

const CommissionImages = ({ images }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="commission-images">
      <div className="image-fan" onClick={() => setIsOpen(true)}>
        {images.slice(0, 3).map((img, index) => (
          <img key={index} src={img} alt={`Commission ${index + 1}`} className={`fan-image fan-image-${index}`} />
        ))}
      </div>
      
      {isOpen && (
        <div className="modal-overlay" onClick={() => setIsOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={() => setIsOpen(false)}>
              <XMarkIcon className="w-6 h-6" />
            </button>
            <div className="image-grid">
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Commission ${index + 1}`}
                  className="grid-image"
                  onClick={() => setSelectedImage(img)}
                />
              ))}
            </div>
          </div>
        </div>
      )}
      
      {selectedImage && (
        <div className="modal-overlay" onClick={() => setSelectedImage(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={() => setSelectedImage(null)}>
              <XMarkIcon className="w-6 h-6" />
            </button>
            <img src={selectedImage} alt="Selected Commission" className="full-size-image" />
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
              <MinusIcon className="w-4 h-4" />
            </button>
            <input 
              type="number" 
              min="0" 
              value={additionalCharacters} 
              onChange={(e) => setAdditionalCharacters(Math.max(0, parseInt(e.target.value) || 0))}
              readOnly
            />
            <button onClick={() => handleAdditionalCharacters(1)}>
              <PlusIcon className="w-4 h-4" />
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
  const [showReferenceSheetPopup, setShowReferenceSheetPopup] = useState(false);

  const toggleReferenceSheetPopup = () => {
    setShowReferenceSheetPopup(!showReferenceSheetPopup);
  };

  return (
    <div className="commission-home-page">
      <header>
        <img src="/logo-colorized.png" alt="Nogenhed Logo" className="logo" />
        <Navigation />
      </header>
      <div className="scrolling-banner-container">
        <ScrollingBanner />
      </div>
      <div className="commission-types-container">
        {commissionTypes.map((type) => {
          const isCompactType = ['Sketchpage', 'Reference sheet', 'Experimental'].includes(type.name);
          const typeClasses = `commission-type-section ${isCompactType ? 'compact-commission-type left-aligned-commission-type' : ''}`;
          
          return (
            <div key={type.id} className={typeClasses}>
<div className="commission-type-header">
  <h2 className="type-title">{type.name}</h2>
  <p className="type-description">{type.description}</p>
  {type.disclaimer && (
    <p className={`type-disclaimer ${type.name === 'Reference sheet' ? 'left-aligned-disclaimer' : ''}`}>
      {type.disclaimer}
    </p>
  )}
</div>
              <div className="commission-type-row">
                {!isCompactType && <CommissionImages images={type.images} />}
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
            </div>
          );
        })}
      </div>
      <QuoteCalculator />
      <Footer />
      {showReferenceSheetPopup && (
        <div className="popup-overlay" onClick={toggleReferenceSheetPopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <h3>A full reference sheet will on average include:</h3>
            <ul>
              <li>2 full-bodies (+ optional alt shot)</li>
              <li>1 half-body shot</li>
              <li>1 horizontal shot (can have background)</li>
              <li>2 expression shots</li>
              <li>Some detail shots</li>
            </ul>
            <button onClick={toggleReferenceSheetPopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CommissionHomePage;
