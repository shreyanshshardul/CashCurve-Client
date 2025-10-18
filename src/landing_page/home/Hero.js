import React from 'react';

export default function Hero() {
  return (
    <div className="container text-center py-5">
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <img
            src="/media/homeHero.png"
            alt="Hero Banner"
            className="img-fluid mb-5"
            style={{ maxHeight: '400px', objectFit: 'contain' }}
          />
          <h1 className="mt-3 fw-bold">Invest in everything</h1>
          <p className="lead mb-4">
            Online platform to invest in stocks, derivatives, mutual funds and more
          </p>
          <button
            className="btn btn-primary px-4 py-2"
            style={{ width: '200px' }}
          >
            Signup Now
          </button>
        </div>
      </div>
    </div>
  );
}
