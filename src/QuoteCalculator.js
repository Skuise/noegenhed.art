import React, { useState } from 'react';

const QuoteCalculator = () => {
  const [commissionType, setCommissionType] = useState('');
  const [size, setSize] = useState('');
  const [complexity, setComplexity] = useState('');
  const [extras, setExtras] = useState([]);
  const [quote, setQuote] = useState(null);

  const commissionPrices = {
    'Commission type 1': { base: 50, sizes: { small: 0, medium: 25, large: 50 } },
    'Commission type 2': { base: 30, sizes: { small: 0, medium: 15, large: 30 } },
    'Project commissions': { base: 100, sizes: { small: 0, medium: 50, large: 100 } },
  };

  const complexityMultipliers = {
    simple: 1,
    moderate: 1.5,
    complex: 2,
  };

  const extrasPrices = {
    background: 20,
    'additional character': 30,
    'rush order': 50,
  };

  const calculateQuote = () => {
    if (!commissionType || !size || !complexity) {
      alert('Please fill out all required fields');
      return;
    }

    let total = commissionPrices[commissionType].base + commissionPrices[commissionType].sizes[size];
    total *= complexityMultipliers[complexity];
    extras.forEach(extra => {
      total += extrasPrices[extra];
    });

    setQuote(Math.round(total));
  };

  return (
    <div className="quote-calculator">
      <h2>Commission Quote Calculator</h2>
      <div>
        <label>Commission Type:</label>
        <select value={commissionType} onChange={(e) => setCommissionType(e.target.value)}>
          <option value="">Select a type</option>
          {Object.keys(commissionPrices).map(type => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>
      </div>
      <div>
        <label>Size:</label>
        <select value={size} onChange={(e) => setSize(e.target.value)}>
          <option value="">Select a size</option>
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>
      </div>
      <div>
        <label>Complexity:</label>
        <select value={complexity} onChange={(e) => setComplexity(e.target.value)}>
          <option value="">Select complexity</option>
          <option value="simple">Simple</option>
          <option value="moderate">Moderate</option>
          <option value="complex">Complex</option>
        </select>
      </div>
      <div>
        <label>Extras:</label>
        {Object.keys(extrasPrices).map(extra => (
          <label key={extra}>
            <input
              type="checkbox"
              checked={extras.includes(extra)}
              onChange={() => {
                setExtras(extras.includes(extra) 
                  ? extras.filter(e => e !== extra)
                  : [...extras, extra]
                );
              }}
            />
            {extra}
          </label>
        ))}
      </div>
      <button onClick={calculateQuote}>Calculate Quote</button>
      {quote !== null && (
        <div className="quote-result">
          <h3>Estimated Quote: ${quote}</h3>
          <p>Please note that this is an estimate. Final price may vary based on specific requirements.</p>
        </div>
      )}
    </div>
  );
};

export default QuoteCalculator;