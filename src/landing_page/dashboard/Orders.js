import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../config";

const Orders = () => {
  const [item, setItem] = useState([]);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/allOrders`) // make sure this route exists in backend
      .then((res) => setItem(res.data))
      .catch((err) => console.error("Error fetching orders:", err));
  },[]);

  return (
    <>
      <h3 className="title">All Orders ({item.length})</h3>
      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Qty.</th>
              <th>Price</th>
              <th>Mode</th>
            </tr>
          </thead>
          <tbody>
            {item.map((stock, index) => (
              <tr key={index}>
                <td>{stock.name}</td>
                <td>{stock.qty}</td>
                <td>{stock.price.toFixed(2)}</td>
                <td>{stock.mode}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Orders;
