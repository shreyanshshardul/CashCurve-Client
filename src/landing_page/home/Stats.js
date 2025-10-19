import React from 'react'
 
export default function Stats(){
    return (
        <div className="container-fluid p-5">
            <div className="row p-5">
                <div className="col-6 mt-5 p-5">
                    <h1 className="mb-5">Trust with Condience</h1>
                    <h4>Customer-first always</h4>
                    <p className="text-muted">That's why 1.3+ crore customers trust CashCurve with &#8377;3.5+ Lakh crore worth of equatity investments.</p>

                    <h4>No spam or gimmicks</h4>
                    <p className="text-muted">No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like</p>

                    <h4>The CashCurve universe</h4>
                    <p className="text-muted">Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs</p>

                    <h4>Do better with money</h4>
                    <p className="text-muted">With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
                </div>
                 <div className="col-6 mt-5">
                    <img src="/media/ecosystem.png" style={{width:"90%"}}></img>
                    <div className="text-center mb-5">
                        <a href="/" className="mx-5" style={{textDecoration:"none"}}>Explore our product  <i class="fa-solid fa-arrow-right"></i></a>
                        <a href="/" className="mx-5" style={{textDecoration:"none"}}>Try Kite demo  <i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                 </div>
            </div>
        </div>
    )
}