import React from 'react'
import { useNavigate } from "react-router-dom";

export default function OpenAccount() {

  const navigate = useNavigate();

  return (
    <div className="container-fluid p-5">
      <div className="row text-center">
        <h1 className="mt-5 mb-3">Open a CashCurve account</h1>
        <p className="text-muted mb-3">
          Modern platfroms and apps , ₹0 investment and flat ₹20 intraday and F&O trades
        </p>

        <button
          className="p-2 btn btn-primary mb-5 mt-3"
          style={{ margin: "0 auto", width: "20%" }}
          onClick={() => navigate("/signup")}
        >
          Signup Now
        </button>
      </div>
    </div>
  )
}
