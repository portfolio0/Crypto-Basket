import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Coin from "./pages/coin/Coin";
import Footer from "./components/footer/Footer";
import Chatbot from "./components/chatbot/Chatbot";

function App() {
  return (
    <>
      <div className="app">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/coin/:coinid" element={<Coin />}></Route>
          <Route path="/blog" element={<Chatbot />}></Route>
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
