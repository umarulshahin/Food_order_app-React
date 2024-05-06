import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body=()=>{
const [ListofRestaurant,setListofRestaurant]=useState(resList)


    return (
      <div className="body">
        <div className="filter">
            <button className="filter-btn" 
              onClick={()=>{
              const filteredList=ListofRestaurant.filter((res)=>res.info.avgRating>4);
              setListofRestaurant(filteredList)
            }}>
                Top Rated Restaurants
            </button>

        </div>
          <div className="res_container">
           
            {
              ListofRestaurant.map((restaurant)=>(
                < RestaurantCard key={restaurant.info.id} resdata={restaurant} />
              ))
            };
  
  
          </div>
      </div>
  
    )
  };

  export default Body; 
