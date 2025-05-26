import { useState } from "react";
import logo from "./assets/logo.svg";
import "./tesla.css"
import { RxCross1 } from "react-icons/rx";

function Header() {
  const [flag, setFlag] = useState(false);

  function showSidebar(e) {
    e.preventDefault()
    if (flag) {
      setFlag(false)
    } else {
      setFlag(true)
    }

  }
  return (
    <>
      <nav className="header flex justify-between">
        <a href="">
          <img src={logo} alt="" />
        </a>
        <ul className="flex gap-7 font-medium">
          <li>
            <a href="">Model S</a>
          </li>
          <li>
            <a href="">Model 3</a>
          </li>
          <li>
            <a href="">Model X</a>
          </li>
          <li>
            <a href="">Model Y</a>
          </li>
          <li>
            <a href="">Solar Roof</a>
          </li>
          <li>
            <a href="">Solar Panels</a>
          </li>
        </ul>

        <ul className="flex gap-7 font-medium">
          <li>
            <a href="">Shop</a>
          </li>
          <li>
            <a href="">Account</a>
          </li>
          <li onClick={showSidebar}>
            <a href="">Menu</a>
          </li>
        </ul>

        <ul className="sidebar" style={{
          right: flag === true ? "0" : '-250px',
          transition: "right 0.3s ease-in-out",
        }}>
          <button className="hideSideBarBtn" onClick={showSidebar}><RxCross1 /></button>

          <li>
            <a href="">Model S</a>
          </li>
          <li>
            <a href="">Model 3</a>
          </li>
          <li>
            <a href="">Model X</a>
          </li>
          <li>
            <a href="">Model Y</a>
          </li>
          <li>
            <a href="">Solar Roof</a>
          </li>
          <li>
            <a href="">Solar Panels</a>
          </li>
          <li>
            <a href="">Existing Inventory</a>
          </li>
          <li>
            <a href="">Used Inventory</a>
          </li>
          <li>
            <a href="">Trade In</a>
          </li>
          <li>
            <a href="">Test Drive</a>
          </li>
          <li>
            <a href="">Powerwall</a>
          </li>
          <li>
            <a href="">Commercial Energy</a>
          </li>
        </ul>
      </nav>

    </>
  );
}

export default Header;
