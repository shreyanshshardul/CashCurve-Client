export default function Hero(){
    return (
       <div className="container-fluid p-5">
            <div className="row text-center mt-5   p-5">
                <h2 className="">Charges</h2>
                <h4 className="text-muted mt-2 mb-2">List of all charges and taxes</h4>

                 <div className="col-4 text-center p-5">
                    <img src="media/pricingEquity.svg"></img>
                    <h2>Free equity delivery</h2>
                    <h5 className="text-muted mt-4 fs-5">All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</h5>
                </div>

                 <div className="col-4 text-center p-5">
                    <img src="media/intradayTrades.svg"></img>
                    <h2>Intraday and F&O trades</h2>
                    <h5 className="text-muted mt-4 fs-5">Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</h5>
                </div>

                 <div className="col-4 text-center p-5">
                    <img src="media/pricingEquity.svg"></img>
                    <h2>Free direct MF</h2>
                    <h5 className="text-muted mt-4 fs-5">All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</h5>
                </div>
            </div>
                
        </div>
    )
}