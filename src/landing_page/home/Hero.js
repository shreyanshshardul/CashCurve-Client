import React from 'react'
 
export default function Hero(){
    return (
        <div className="container p-5">
            <div className="row text-center" >
                <img src='media/homeHero.png' className="mb-5"></img>
            
            <h1 className="mt-5">Invest in everything</h1>
            <p>Online platform to invest in stocks , derivative , mutal funds and more</p>
            <button className="p-2 btn btn-primary mb-5" style={{margin: "0 auto" ,width:"20%"}}>Signup Now</button>
            </div>
        </div>
    )
}