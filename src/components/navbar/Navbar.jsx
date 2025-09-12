import React, { useContext } from "react";
import "./navbar.css";
import Nav_logo from "../../assets/Nav_logo.png";
import sign_up1 from "../../assets/sign_up1.png";
import { Coincontext } from "../context/Coincontext";
import { Link } from "react-router-dom";
const Navbar = () => {
  const { setcurrency } = useContext(Coincontext);

  const currencyhandler = (e) => {
    switch (e.target.value) {
      case "usd": {
        setcurrency({ name: "usd", symbol: "$" });
        break;
      }
      case "eur": {
        setcurrency({ name: "eur", symbol: "€" });
        break;
      }
      case "inr": {
        setcurrency({ name: "inr", symbol: "₹" });
        break;
      }

      default: {
        setcurrency({ name: "usd", symbol: "$" });
        break;
      }
    }
  };

  return (
    <>
      <div className="navbar">
        <Link to={"/"}>
          <img src={Nav_logo} className="nav-logo" alt="navbar-logo" />
        </Link>
        <ul>
          <Link to={"/"}>
            <li>Home</li>
          </Link>
          <li>Features</li>
          <li>Pricing</li>
          <Link to={"/blog"}>
            <li>Blog/Bot</li>
          </Link>
        </ul>
        <div className="nav-right">
          <select name="" id="" onChange={currencyhandler}>
            <option value="usd">USD</option>
            <option value="eur">EUR</option>
            <option value="inr">INR</option>
          </select>
          <button>
            Sign Up
            <img src={sign_up1} alt="" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
