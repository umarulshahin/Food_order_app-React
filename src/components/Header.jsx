import { LOGO_URLS } from "../utils/constans";
import "./Header.css"
import { useState } from "react";
 const Header=()=>{
  
  const[login_btn,setlogin_btn]=useState("Login")
    return(
      <div className="header">
        <div className="logo_container">
          <img className="logo"  src={LOGO_URLS}/>
        </div>
  
        <div className="nav_items">
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Contact</li>
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