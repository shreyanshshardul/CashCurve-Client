import React from 'react'
 
export default function Pricing(){
    return (
        <div className="container-fluid p-5">
            <div className="row p-5">
                <div className="col-4">
                    <h1 className="mb-4">Unbeatable pricing</h1>
                    <p className="text-muted">We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                      <a href="/" style={{textDecoration:"none"}}>See pricing <i class="fa-solid fa-arrow-right"></i></a>
                </div>
                <div className="col-2 mb-5"></div>
                <div className="col-6">
                    <div className="row text-center">
                        <div className="col border p-3">
                            <h1>&#8377;0</h1>
                            <p>Free equity delivery and direct mutal funds</p>
                        </div>
                         <div className="col border p-3">
                            <h1>&#8377;20</h1>
                            <p>Intraday and F&O</p>
                         </div>
                    </div>
                </div>
            </div>
        </div>
    )
}