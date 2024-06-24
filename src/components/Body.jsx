import RestaurantCard, { RestaurantwithLabel } from "./RestaurantCard";
import { useState, useEffect,useContext } from "react";
import Shimmer from "./shimmar";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlinestatus";
import { Restaurant } from "../utils/constans";
import UserContext from "../utils/useContext";

const Body = () => {
  const [ListofRestaurant, setListofRestaurant] = useState([]);
  const [search_text, setsearch_text] = useState("");
  const [filterRestaurant, setfilterRestaurant] = useState([]);
  const {userName,setuserName}=useContext(UserContext)
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(Restaurant);
    const json = await data.json();
    console.log(
      json.data.cards
    );
    setListofRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilterRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlinestatus = useOnlineStatus();

  const RestaurantLabel = RestaurantwithLabel(RestaurantCard);

  if (onlinestatus === false) {
    return (
      <h1>
        Look like your offline...! Please check your internet connection...!
      </h1>
    );
  }

  return ListofRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body ml-8  w-screen ">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            className=" border border-solid border-black"
            value={search_text}
            onChange={(e) => setsearch_text(e.target.value)}
          />
          <button
            className=" px-4 py-1 bg-green-200 m-4 rounded-lg hover:bg-green-400 "
            onClick={() => {
              const filterData = ListofRestaurant.filter((res) =>
                res.info.name.toLowerCase().includes(search_text.toLowerCase())
              );
              setfilterRestaurant(filterData);
            }}
          >
            search
          </button>
        </div>
        <div className="flex m-4 p-4 items-center">
        
          <button
            className="px-4 py-1 bg-gray-400 rounded-lg hover:bg-gray-400"
            onClick={() => {
              const filteredList = ListofRestaurant.filter(
                (res) => res.info.avgRating > 4
              );
              setfilterRestaurant(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
        <div className="flex m-4 p-4 items-center">
          <input type="text" value={userName} onChange={(e)=>setuserName(e.target.value)} className=" border border-black p-1" />
        </div>
      </div>
      <div className="res_container flex flex-wrap ">
        {filterRestaurant.map((restaurant) => (
          <Link
            className="links"
            key={restaurant.info.id}
            to={"Restuarant/" + restaurant.info.id}
          >
            {restaurant.info.availability.opened ? (
              <RestaurantLabel resdata={restaurant} />
            ) : (
              <RestaurantCard resdata={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
