import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./landing_page/Navbar";
import Footer from "./landing_page/Footer";

import HomePage from "./landing_page/home/HomePage";
import Signup from "./landing_page/signup/Signup";
import Login from "./landing_page/login/Login";
import AboutPage from "./landing_page/about/AboutPage";
import ProductPage from "./landing_page/products/ProductPage";
import PricingPage from "./landing_page/pricing/PricingPage";
import SupportPage from "./landing_page/supports/SupportPage";
import Fail from "./landing_page/Fail";
import Dashboard from "./landing_page/dashboard/Home";

// Ek wrapper component bana dete hain
function App() {
  const location = useLocation();

  // Agar path /dashboard se start hota hai, navbar/footer hide karo
  const hideNavbarFooter = location.pathname.startsWith("/dashboard");

  return (
    <>
      {!hideNavbarFooter && <Navbar />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
        <Route path="*" element={<Fail />} />
      </Routes>
      {!hideNavbarFooter && <Footer />}
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
