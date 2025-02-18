import React, { useState } from "react";
import axios from "axios";

const UpdateStockPrice = () => {
  const [stockId, setStockId] = useState("");
  const [newPrice, setNewPrice] = useState("");
  const [message, setMessage] = useState("");

  const handleUpdatePrice = async (e) => {
    e.preventDefault();

    if (!stockId || !newPrice) {
      setMessage("Please provide both Stock ID and New Price.");
      return;
    }

    try {
      const response = await axios.put(
        `http://localhost:8080/api/v1/stock`, // API endpoint
        null, // No request body
        {
          params: {
            stockId: stockId,
            newPrice: newPrice,
          },
        }
      );

      if (response.status === 200) {
        setMessage("Stock price updated successfully!");
      } else {
        setMessage("Failed to update stock price.");
      }
    } catch (error) {
      setMessage("An error occurred while updating the stock price.");
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <h1>Update Stock Price</h1>
      <form onSubmit={handleUpdatePrice}>
        <div>
          <label htmlFor="stockId">Stock ID:</label>
          <input
            type="text"
            id="stockId"
            value={stockId}
            onChange={(e) => setStockId(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="newPrice">New Price:</label>
          <input
            type="number"
            id="newPrice"
            value={newPrice}
            onChange={(e) => setNewPrice(e.target.value)}
            step="0.01"
            required
          />
        </div>
        <button type="submit">Update Price</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default UpdateStockPrice;