import React, { useState } from "react";
import Dropdown from "./Dropdown";
import List from "./List";

const ParentComponent = () => {
  const [selectedCurrency, setSelectedCurrency] = useState("USD");

  const conversionRates = {
    USD: 1, // Since the base currency is USD, 1 USD = 1 USD (no conversion)
    EUR: 0.85, // Example conversion rate for EUR
    GBP: 0.73, // Example conversion rate for GBP
    // Add more conversion rates for other currencies as needed
  };

  const handleCurrencyChange = (e) => {
    setSelectedCurrency(e.target.value);
  };

  // Sample data for rows, replace this with your actual data
  const rows = [
    {
      id: 1,
      "&id": "ORD123",
      executionDetails: {
        buySellIndicator: "Buy",
        orderStatus: "Completed",
      },
      orderSubmitted: "2023-08-01",
      bestExecutionData: {
        orderVolume: {
          USD: 100,
        },
      },
    },
    // Add more rows as needed
  ];

  return (
    <div>
      <h1>Currency Conversion Dashboard</h1>
      <Dropdown
        options={Object.keys(conversionRates)}
        onChange={handleCurrencyChange}
        selectedItem={selectedCurrency}
      />
      <List
        rows={rows}
        selectedCurrency={selectedCurrency}
        conversionRates={conversionRates}
      />
    </div>
  );
};

export default ParentComponent;
