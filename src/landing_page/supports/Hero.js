export default function Hero(){
    return (
        <div style={{background:"rgb(79, 157, 240)"}}>
        <div className="container-fluid p-5" style={{color:"white"}} >
            <div className="row">
                <div className="col-2"></div>
                 <div className="col-4"><h3>Support Portal</h3></div>
                 <div className="col-3"></div>
                 <div className="col-3"><h4>Track Ticket</h4></div>
            </div>

            <div className="row">
                <div className="col-1"></div>
                <div className="col-5 text-center">
                    <h5 className="mb-2">Search for an answer or browser help topics to create a ticket</h5>
                    <div style={{background:"white" , borderRadius:"10px"}}>
                            <h6 className="mt-4 text-muted p-4" Style={{ color:"black" , marginleft:"10px"}}>Eg: how to I activate F&O, why is my order getting rejected</h6>
                    </div>
                        <div className="p-3">
                    <a href="/" style={{color:"white"}}>Track account opening</a>&nbsp;&nbsp;
                    <a href="/" style={{color:"white"}}>Track segment activation</a><br></br>
                    <a href="/" style={{color:"white"}}>Kite user manual</a>
                    </div>
                </div>
               
                          <div className="col-2"></div>
                <div className="col-4">
                    <h4 className="mb-2">Featured</h4>
                      <div className="p-2">
                    <a href="/" style={{color:"white"}}>1. Current Takeover and delisting</a><br></br><br></br>
                    <a href="/" style={{color:"white"}}>2. Latest Infraday leverages</a>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}