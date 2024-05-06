import { CDN_URLS } from "../utils/constans"
const RestaurantCard=(props)=>{
    const{
      resdata
    }=props
  
    const{
      name,
      cuisines,
      avgRating,
      costForTwo,
      cloudinaryImageId,
      deliveryTime
      // sla
  
    }=resdata?.info
    return (
  
      <div className="res_card" style={{backgroundColor:"#f0f0f0"}}>
        <img className="res_logo" src={CDN_URLS+cloudinaryImageId} alt="" />
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating}stars</h4>
        <h4>{costForTwo}</h4>
        <h4>{deliveryTime}minites</h4>
  
      </div>
  
    )
  }

export default RestaurantCard;