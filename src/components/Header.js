import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  const[btnname,setBtnname] = useState("Login");

  //if no dependency array => useEffect is called on every render
  //if dependency array is empty = [] => useEffect is called on initial render(just once)
  //if dependency array is [btnname] => called every time btnname is updated
  useEffect(()=>{

  },
  [btnname])
  return(
  
    <div className="header">
          <div className="logo-container">
            <img
              className="logo"
                      src={LOGO_URL}
            />
          </div>
          <div className="nav-items">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
              <li>Cart</li>
              <button className="login" onClick={()=>{
                btnname === "Login" ? setBtnname("Logout") : setBtnname("Login");
                console.log(btnname);
              }}>{btnname}</button>
            </ul>
          </div>
        </div>
    )};

export default Header;