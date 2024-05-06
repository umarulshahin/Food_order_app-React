import { LOGO_URLS } from "../utils/constans";
 const Header=()=>{
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
          </ul> 
        </div>
  
      </div>
  
    )
  };

  export default Header;