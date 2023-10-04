import React, { useState } from 'react';
import './App.css';

function App() {
  const [currentEfficiency, setCurrentEfficiency] = useState('');
  const [currentCost, setCurrentCost] = useState('');
  const [milesDriven, setMilesDriven] = useState('');
  const [electricCost, setElectricCost] = useState('');
  const [savings, setSavings] = useState('');

  const calculateSavings = () => {
    if (
      isNaN(currentEfficiency) ||
      isNaN(currentCost) ||
      isNaN(milesDriven) ||
      isNaN(electricCost)
    ) {
      alert('Please enter valid numeric values.');
      return;
    }

    // Calculate annual fuel consumption in gallons
    const annualFuelConsumption = milesDriven / currentEfficiency;

    // Calculate annual fuel cost
    const annualFuelCost = annualFuelConsumption * currentCost;

    // Calculate electric vehicle cost
    const electricVehicleCost = (milesDriven / 100) * electricCost;

    // Calculate savings
    const savingsAmount = annualFuelCost - electricVehicleCost;

    setSavings(savingsAmount.toFixed(2));
  };

  return (
    <div className="App">
      <h1>Savings Calculator</h1>
      <div className="input-container">
        <label>Current Vehicle Efficiency (MPG):</label>
        <input
          type="number"
          value={currentEfficiency}
          onChange={(e) => setCurrentEfficiency(e.target.value)}
        />
      </div>
      <div className="input-container">
        <label>Cost per Gallon (USD):</label>
        <input
          type="number"
          value={currentCost}
          onChange={(e) => setCurrentCost(e.target.value)}
        />
      </div>
      <div className="input-container">
        <label>Miles Driven per Year:</label>
        <input
          type="number"
          value={milesDriven}
          onChange={(e) => setMilesDriven(e.target.value)}
        />
      </div>
      <div className="input-container">
        <label>Cost per kWh (USD):</label>
        <input
          type="number"
          value={electricCost}
          onChange={(e) => setElectricCost(e.target.value)}
        />
      </div>
      <button onClick={calculateSavings}>Calculate Savings</button>
      {savings && <p>Savings: ${savings}</p>}
    </div>
  );
}

export default App;
