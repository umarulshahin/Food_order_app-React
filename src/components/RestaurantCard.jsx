import { CDN_URLS } from "../utils/constans";
import { useContext } from "react";
import UserContext from "../utils/useContext";

const RestaurantCard = (props) => {
  const { resdata } = props;
  const { defaultuser } = useContext(UserContext);
  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId, sla } =
    resdata?.info;
  console.log(cuisines.slice(0, 3), "asas");
  return (
     
    <div className="p-4 m-4 w-[250px] h-[450px] bg-white rounded-lg hover:bg-gray-400 ">
      <img
        className="rounded-lg w-64 h-48 object-cover" // Set fixed width and height with object-cover
        src={CDN_URLS + cloudinaryImageId}
        alt={name}
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.slice(0, 3).join(", ")}</h4>
      <h4>{avgRating}stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.deliveryTime}minites</h4>
      {/* <h4>User: {defaultuser}</h4> */}
    </div>
    
  );
};

export const RestaurantwithLabel = (RestaurantCard) => {
  return (props) => {
    const { opened, ...rest } = props.resdata.info.availability;
    return (
      <div>
        {opened ? (
          <label className=" absolute bg-green-500 px-4 py-1 rounded-lg ml-1">
            Open
          </label>
        ) : (
          <label className=" absolute bg-red-500 px-4 py-1 rounded-lg ml-1">
            closed
          </label>
        )}

        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
