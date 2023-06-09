import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ErrorPage from "./components/ErrorPage";
import Login from "./Auth/Login";
import SignIn from "./Auth/SignUp";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import Products from "./pages/product/Products";
import Repair from "./pages/product/Repair";
import OneProduct from "./pages/product/OneProduct";
import ParticlesBackground from "./components/ParticlesBackground";
function App() {
  return (
    <Router> 
      <div className="App">
        <div>
          <ParticlesBackground /> 
          <Navbar />
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/about" Component={About} />
            <Route path="/login" Component={Login} />
            <Route path="/signup" Component={SignIn} />
            <Route path="/contact" Component={ContactUs} />
            <Route path="/product/:qid" Component={OneProduct} />
            <Route path="/product" Component={Products} />
            <Route path="/repair" Component={Repair} />
            <Route path="*" Component={ErrorPage} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
