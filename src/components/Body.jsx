import RestaurantCard from "./RestaurantCard";
import { useState,useEffect } from "react";
import Shimmer from "./shimmar";
import "./Body.css"
import { Link } from "react-router-dom";

const Body=()=>{
const [ListofRestaurant,setListofRestaurant]=useState([])
const [search_text,setsearch_text]=useState("")
const [filterRestaurant,setfilterRestaurant]=useState([])

useEffect(()=>{
  fetchData()
  },[]);

const fetchData= async ()=>{
  const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
  const json = await data.json();
  // console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants); 
    setListofRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setfilterRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
};


return ListofRestaurant.length===0 ? <Shimmer /> : (

      <div className="body">
        <div className="filter">
          <div className="search">
            <input type="text" className="search_text" value={search_text} onChange={(e)=>setsearch_text(e.target.value)} />
            <button 
            onClick={()=>{
             const filterData=ListofRestaurant.filter((res)=>
                res.info.name.toLowerCase().includes(search_text.toLowerCase())

              );
              setfilterRestaurant(filterData)
            }} >search</button>

          </div>
            <button className="filter-btn" 
              onClick={()=>{
              const filteredList=ListofRestaurant.filter((res)=>res.info.avgRating>4);
              setfilterRestaurant(filteredList)
            }}>
                Top Rated Restaurants
            </button>

        </div>
          <div className="res_container">
           
            {
              filterRestaurant.map((restaurant)=>(
              <Link className="links" key={restaurant.info.id}  to={"Restuarant/"+restaurant.info.id}  > < RestaurantCard  resdata={restaurant} /></Link>
              ))
            };
  
  
          </div>
      </div>
  
    )
  };

  export default Body; 
