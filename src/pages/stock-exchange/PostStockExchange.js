import { useState } from "react";
import axios from "axios";

const StockExchangeForm = () => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [stocks, setStocks] = useState([{ name: "", currentPrice: "" }]);

    const handleStockChange = (index, event) => {
        const newStocks = [...stocks];
        newStocks[index][event.target.name] = event.target.value;
        newStocks[index][event.target.currentPrice] = event.target.value; 
        setStocks(newStocks);
    };

    const addStock = () => {
        setStocks([...stocks, { name: "", currentPrice: "" }]);
    };

    const removeStock = (index) => {
        const newStocks = stocks.filter((_, i) => i !== index);
        setStocks(newStocks);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const stockExchange = { name, description, stocks };

        try {
            const response = await axios.post("http://localhost:8080/api/v1/stock-exchange", stockExchange);
            alert(response.data);
        } catch (error) {
            console.error("Error submitting data", error);
        }
    };

    return (
        <div>
            <h2>Stock Exchange Form</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Stock Exchange Name:</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                    <label>Stock Exchange Description:</label>
                    <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} required />
                </div>

                <h3>Stocks</h3>
                {stocks.map((stock, index) => (
                    <div key={index}>
                        <input type="text" name="description" placeholder="Stock Name" value={stock.description} onChange={(e) => handleStockChange(index, e)} required />
                        <input type="number" name="currentPrice" placeholder="Stock Price" value={stock.currentPrice} onChange={(e) => handleStockChange(index, e)} required />
                        <button type="button" onClick={() => removeStock(index)}>Remove</button>
                    </div>
                ))}

                <button type="button" onClick={addStock}>Add Stock</button>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default StockExchangeForm;


