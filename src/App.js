import "./App.css";
import Home from "./pages/Home.js";
import Details from "./pages/Details.js";
import Footer from "./components/Footer.js";
import Header from "./components/Header.js";
import { Routes, Route } from "react-router-dom";
import {React,useState} from "react";

function App() {
 
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<Details />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
