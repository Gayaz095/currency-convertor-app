import React, { useState } from "react";
//npm install bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
//Importing required Dashboard.css for styling
import "./Dashboard.css";

const Dashboard = ({ setLoggedIn }) => {
  const currencies = [
    "Indian Rupee",
    "US Dollar",
    "UAE Dirhams",
    "Chinese Yuan",
  ];

  const conversionRates = {
    "Indian Rupee": 1,
    "US Dollar": 0.014,
    "UAE Dirhams": 0.051,
    "Chinese Yuan": 0.089,
  };

  const [currencyFrom, setCurrencyFrom] = useState("Indian Rupee");
  const [toCurrency, setToCurrency] = useState("US Dollar");
  const [amount, setAmount] = useState("");
  const [convertedAmount, setConvertedAmount] = useState(null);

  //Conversion formula and with validating Amount input field
  const handleConvert = () => {
    if (!amount || isNaN(amount)) {
      alert("Please enter a valid amount");
      return;
    }
    const result =
      (parseFloat(amount) / conversionRates[currencyFrom]) *
      conversionRates[toCurrency];
    setConvertedAmount(result.toFixed(2));
  };

  return (
    <div className="container mt-5">
      <h3 className="mb-4">Currency Converter</h3>
      {/* Form for currency From -> To currency rates */}
      <form>
        <div className="mb-3">
          <label className="form-label">From Currency:</label>
          <select
            className="form-select"
            value={currencyFrom}
            onChange={(e) => setCurrencyFrom(e.target.value)}>
            {currencies.map((currency) => (
              <option key={currency}>{currency}</option>
            ))}
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">To Currency:</label>
          <select
            className="form-select"
            value={toCurrency}
            onChange={(e) => setToCurrency(e.target.value)}>
            {currencies.map((currency) => (
              <option key={currency}>{currency}</option>
            ))}
          </select>
        </div>
        <div className="mb-3 row">
          <label htmlFor="amount" className="col-sm-3 col-form-label">
            Amount:
          </label>
          <input
            type="text"
            className="form-control amount-input"
            placeholder="Enter Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleConvert}>
          Convert
        </button>
      </form>

      {/* Displaying the result after the conversion of currency */}
      {convertedAmount !== null && (
        <div className="mt-4">
          <h4>Conversion Result:</h4>
          <p>
            {amount} {currencyFrom} is equal to {convertedAmount} {toCurrency}
          </p>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
