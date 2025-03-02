import React, { useState } from "react";
import axios from "axios";

const AddStockToExchange = () => {
    const [stockExchangeName, setStockExchangeName] = useState("");
    const [stocks, setStocks] = useState([{ name: "", currentPrice: "" }]);
    const [message, setMessage] = useState("");

    // Handle changes in stock input fields
    const handleStockChange = (index, event) => {
        const { name, value } = event.target;
        const newStocks = [...stocks];
        newStocks[index][name] = value; // Update the specific field
        setStocks(newStocks);
    };

    // Add a new stock input field
    const addStock = () => {
        setStocks([...stocks, { name: "", currentPrice: "" }]);
    };

    // Remove a stock input field
    const removeStock = (index) => {
        const newStocks = stocks.filter((_, i) => i !== index);
        setStocks(newStocks);
    };

    // Submit the form
    const handleSubmit = async (event) => {
        event.preventDefault();

        // Log the stocks data for debugging
        console.log("Stocks Data:", stocks);

        try {
            const response = await axios.post(
                `http://localhost:8080/api/v1/stock-exchange/${stockExchangeName}`,
                { stocks }, // Send the entire stocks array
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );

            setMessage("Stocks added successfully!");
            // Reset form fields
            setStockExchangeName("");
            setStocks([{ name: "", currentPrice: "" }]);
        } catch (error) {
            setMessage("Failed to add stocks.");
            console.error("There was an error!", error.response || error);
        }
    };

    return (
        <div className="AddStockToExchange">
            <h1>Stock Exchange Management</h1>
            <form onSubmit={handleSubmit}>
                <div className="section">
                    <h2>Add Stock to Stock Exchange By Name</h2>
                    <input
                        type="text"
                        placeholder="Enter Stock Exchange Name"
                        value={stockExchangeName}
                        onChange={(e) => setStockExchangeName(e.target.value)}
                        required
                    />
                    <h3>Stocks</h3>
                    {stocks.map((stock, index) => (
                        <div key={index}>
                            <input
                                type="text"
                                name="name" // Match the key in the state
                                placeholder="Stock Name"
                                value={stock.name}
                                onChange={(e) => handleStockChange(index, e)}
                                required
                            />
                            <input
                                type="number"
                                name="currentPrice" // Match the key in the state
                                placeholder="Stock Price"
                                value={stock.currentPrice}
                                onChange={(e) => handleStockChange(index, e)}
                                required
                            />
                            <button type="button" onClick={() => removeStock(index)}>
                                Remove
                            </button>
                        </div>
                    ))}
                    <button type="button" onClick={addStock}>
                        Add Stock
                    </button>
                    <button type="submit">Submit</button>
                </div>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default AddStockToExchange;