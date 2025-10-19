import React from 'react'
 
export default function Education(){
    return (
        <div className="container-fluid p-5">
           <div className="row p-5">
            <div className="col">
                <img src="/media/education.svg" style={{width:"80%"}}></img>
            </div>
            <div className="col mt-5">
                <h2 className="mb-4">Free and open market education</h2>
                <p className="mb-4">Versity, The largest online stock market education book in the world covering everything from basic to advance trading.</p>
                    <a href="/" style={{textDecoration:"none"}} classNAme="mb-5">Versity <i class="fa-solid fa-arrow-right"></i></a>

                    <p className="mt-5">TradingQ&A , The most active trading and investement community in India for all your market related queries.</p>
                    <a href="/" style={{textDecoration:"none"}}>TradingQ&A <i class="fa-solid fa-arrow-right"></i></a>
            </div>
           </div>
        </div>
    )
}