export default function Universe() {
  return (
    <div className="p-5">
      <div className="row text-center p-5">
        <h1 className="mt-5 fs-2 mb-3">The CashCurve Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="col-4 p-5 mt-3">
          <img src="media/smallcaseLogo.png"></img>
          <p className="text-muted text-small mt-2 text-center">
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col-4 p-5 mt-3">
          <img src="media/Logo2.png" style={{ width: "20%" }}></img>
          <p className="text-muted text-small mt-2 text-center">
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>
        <div className="col-4 p-5 mt-3">
          <img src="media/goldenpiLogo.png"></img>
          <p className="text-muted text-small mt-2 text-center">
            Investment research platform that offers detailed insights on
            stocks, sectors, supply chains, and more.
          </p>
        </div>

        <div className="col-4 p-5 mt-3">
          <img src="media/sensibullLogo.svg" style={{ width: "90%" }}></img>
          <p className="text-muted text-small mt-2 text-center">
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>
        <div className="col-4 p-5 mt-3">
          <img src="media/dittoLogo.png" style={{ width: "48%" }}></img>
          <p className="text-muted text-small mt-2 text-center">
            Personalized advice on life and health insurance. No spam and no
            mis-selling. Sign up for free
          </p>
        </div>
        <div className="col-4 p-5 mt-3">
          <img src="media/streakLogo.png" style={{ width: "48%" }}></img>
          <p className="text-muted text-small mt-2 text-center">
            Systematic trading platform that allows you to create and backtest
            strategies without coding.
          </p>
        </div>
        <a href="/signup">
        <button
          className="p-2 btn btn-primary mb-5 mt-4"
          style={{ margin: "0 auto", width: "20%" }}
        >
          Signup Now
        </button></a>
      </div>
    </div>
  );
}
