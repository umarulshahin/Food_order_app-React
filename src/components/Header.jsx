import { LOGO_URLS } from "../utils/constans";
import "./Header.css"
import { useState } from "react";
import { Link } from "react-router-dom";
import useonlineStatus from "../utils/useOnlinestatus"

 const Header=()=>{
  
    const[login_btn,setlogin_btn]=useState("Login")
    const onlineStatus=useonlineStatus()
      return(
        <div className="header">
          <div className="logo_container">
            <img className="logo"  src={LOGO_URLS}/>
          </div>
    
          <div className="nav_items">
            <ul>
              <li>online Status :{onlineStatus ? "✅":"🔴"}</li>
              <li><Link to='/'>Home </Link></li>
              <li><Link to="/About">About us</Link></li>
              <li><Link to="/Contact">Contact</Link></li>
              <li><Link to="/Grocery">Grocery</Link></li>
              <li>Cart</li>
              <button className="login" onClick={()=>{
                login_btn ==="Login" ? setlogin_btn("Logout"): setlogin_btn("Login");
              }
              }>{login_btn}</button>
            </ul> 
          </div>
    
        </div>
    
      )
  };

  export default Header;