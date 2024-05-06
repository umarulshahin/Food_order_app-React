import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState,useEffect } from "react";

const Body=()=>{
const [ListofRestaurant,setListofRestaurant]=useState([])

useEffect(()=>{
fetchData()
},[]);

const fetchData= async ()=>{
  const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
  const json = await data.json();
  // console.log(json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants); 
    setListofRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
};

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
