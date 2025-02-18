import React, { useState } from "react";
import axios from "axios";
import "./FetchDetailsOfStockBySExchangeName.css";

const App = () => {
  const [stockExchangeName, setStockExchangeName] = useState("");
  const [stockExchange, setStockExchange] = useState(null);
  // Fetch stock exchange by name
  const FetchDetailsOfStockBySExchangeName = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api/v1/stock-exchange/${stockExchangeName}`);
      setStockExchange(response.data);
    } catch (error) {
      console.error("Error fetching stock exchange:", error);
    }
  };

  return (
    <div className="App">
      <h1>Stock Exchange Management</h1>

      {/* Fetch Stock Exchange */}
      <div className="section">
        <h2>Fetch Stock Exchange</h2>
        <input
          type="text"
          placeholder="Enter Stock Exchange Name"
          value={stockExchangeName}
          onChange={(e) => setStockExchangeName(e.target.value)}
        />
        <button onClick={FetchDetailsOfStockBySExchangeName}>Fetch</button>
        {stockExchange && (
          <div className="stock-exchange-details">
            <h3>{stockExchange.name}</h3>
            <p>{stockExchange.description}</p>
            <p>Live in Market: {stockExchange.liveInMarket ? "Yes" : "No"}</p>
            <h4>Stocks:</h4>
            <ul>
              {stockExchange.stocks.map((stock) => (
                <li key={stock.id}>
                  <p>{stock.description}</p>
                  <p>Current Price: ${stock.currentPrice}</p>
                  <p>Last Updated: {new Date(stock.lastUpdate).toLocaleString()}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
     
      </div>
   
  );
};

export default App;