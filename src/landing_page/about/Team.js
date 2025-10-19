export default function Team(){
    return (
        <div className="container-fluid p-5">
            <div className="row">
                <h3 className="text-center text-muted">People</h3>
            </div>
            <div className="row">
            <div className="col-1"></div>
                <div className="col-5  text-center">
                    <img src="/media/nikhil.jpg" style={{width:"50%" , borderRadius:"80%" , height:"50%"}} className="text-center"></img>
                    <h5 className="mt-4">Shreyansh Shardul</h5>
                    <p className="mt-3 text-muted ">Founder, CEO</p>
                </div>
                 <div className="col-6 mt-3">

                    <p className="mt-5">Shreyansh bootstrapped and founded CashCurve in 2025 to overcome the hurdles he faced during his decade long stint as a trader. Today, CashCurve has changed the landscape of the Indian broking industry.</p>
                    <br></br>
                    <p>
                        He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).
                    </p>
                    <br></br>
                    <p>Playing cricket is his zen.</p><br></br>
                    <p>Connect on <a href="https://www.linkedin.com/in/shreyansh-shardul-a591a7258/" style={{textDecoration:"none"}}>Linkedin</a></p>
                 </div>
            </div>
        </div>
    )
}