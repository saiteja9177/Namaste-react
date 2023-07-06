import { LOGO_URL } from "../utils/constants";
import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/userContext";
const Header = () => {
  const [btnName, setBtnName] = useState("logIn");
  useEffect(() => {
    // console.log("UseEffect Called");
  }, []);

  const onlineStatus = useOnlineStatus();

  const {user} = useContext(userContext);

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-container">
        <ul>
          <li>Online Status: {onlineStatus ? "🟢": "🔴"}</li>
          {user.name}
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
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
