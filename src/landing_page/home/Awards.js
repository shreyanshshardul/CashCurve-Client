import React from 'react'

export default function Awards() {
  return (
    <div className="container mt-5">
      <div className="row">
        {/* Left side image */}
        <div className="col-md-6 mb-5">
          <img
            src="/media/largestBroker.svg"
            alt="Largest Broker"
            className="img-fluid"
          />
        </div>

        {/* Right side text */}
        <div className="col-md-6 mt-5">
          <h1>Largest stock broker in India</h1>
          <p className="mt-4">
            2+ million CashCurve clients account for over 15% of all retail order
            volumes in India daily by trading and investing in:
          </p>

          <div className="row mt-5">
            <div className="col-6">
              <ul>
                <li>Futures and options</li>
                <li>Commodity derivatives</li>
                <li>Currency derivatives</li>
              </ul>
            </div>

            <div className="col-6">
              <ul>
                <li>Stocks & IPOs</li>
                <li>Bonds & ETFs</li>
                <li>Mutual Funds</li>
              </ul>
            </div>
          </div>
          <img src="/media/pressLogos.png" style={{width:"80%"}} className="mt-3 mb-5"></img>
        </div>
      </div>
    </div>
  )
}
