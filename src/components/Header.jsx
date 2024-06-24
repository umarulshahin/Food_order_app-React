import { LOGO_URLS } from "../utils/constans";
import { useState,useContext } from "react";
import { Link } from "react-router-dom";
import useonlineStatus from "../utils/useOnlinestatus"
import UserContext from "../utils/useContext"
 const Header=()=>{
  
    const[login_btn,setlogin_btn]=useState("Login")
    const onlineStatus=useonlineStatus()
    const {defaultuser}=useContext(UserContext);
    console.log(defaultuser)
      return(
        <div className="flex justify-between bg-pink-200 shadow-2xl mb-2 sm:bg-yellow-200 md:bg-green-200 lg:bg-blue-200 xl:bg-red-200">
          <div className="logo_container">
            <img className=" w-56 "  src={LOGO_URLS}/>
          </div>
    
          <div className="flex items-center">
            <ul className="flex p-4 m-4">
              <li>online Status :{onlineStatus ? "✅":"🔴"}</li>
              <li className="px-4"><Link to='/'>Home </Link></li>
              <li className="px-4"><Link to="/About">About us</Link></li>
              <li className="px-4"><Link to="/Contact">Contact</Link></li>
              <li className="px-4"><Link to="/Grocery">Grocery</Link></li>
              <li className="px-4">Cart</li>
              <button className="login" onClick={()=>{
                login_btn ==="Login" ? setlogin_btn("Logout"): setlogin_btn("Login");
              }
              }>{login_btn}</button>
              <li className="px-4 font-bold">User :{defaultuser}</li>


            </ul> 
          </div>
    
        </div>
    
      )
  };

  export default Header;