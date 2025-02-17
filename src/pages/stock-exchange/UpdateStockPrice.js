import "./UpdateStockPrice.css";
import React, { useState } from 'react';
import axios from 'axios';

const UpdateStockPrice = () => {

    const [stockId, setStockId] = useState('');
    const [newPrice, setNewPrice] = useState('');
    const handleUpdateStockPrice = () => {
         axios.put(`http://localhost:8080/api/v1/stock`, { id: stockId, currentPrice: parseFloat(newPrice) }) 
       
        

            .then((response) => {
                console.log('Stock price updated successfully:', response.data);
            })
            .catch((error) => {
                console.error("Error updating stock price", error);
            });
    };
    return (
        <div>
            <h2>Update Stock Price</h2>
            <input
                type="number"
                placeholder="Stock ID"
                value={stockId}
                onChange={(e) => setStockId(e.target.value)}
            />
            <input
                type="number"
                placeholder="New Price"
                value={newPrice}
                onChange={(e) => setNewPrice(e.target.value)}
            />
            <button onClick={handleUpdateStockPrice}>Update Price</button>
        </div>
    )
}

export default UpdateStockPrice;

