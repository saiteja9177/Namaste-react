import { LOGO_URL } from "../utils/constants";
import { useEffect, useState } from "react";
const Header = () => {
  const [btnName, setBtnName] = useState("logIn");
  useEffect(() => {console.log("UseEffect Called")}, [])

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-container">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button
            className="btnName"
            onClick={() => {
              btnName === "logIn" ? setBtnName("logOut") : setBtnName("logIn");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
