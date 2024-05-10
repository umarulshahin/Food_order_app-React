import ItemList from "./itemList";
import { useState } from "react";
const RestaurantCategory = ({ data }) => {

    const[showItem,setshowItem]=useState(false)
    const handleClick=()=>{
        setshowItem(!showItem)
    }
  return (
    <div>
      <div className="w-6/12  mx-auto my-4 bg-gray-200 shadow-xl p-4">
      <div className="flex justify-between">
          <span className=" font-bold text-lg cursor-pointer" onClick={handleClick}>
            {data.title} ({data.itemCards.length})
          </span>
          <span className="cursor-pointer" onClick={handleClick}>🔽</span>
      </div>
      {showItem ? <ItemList items={data} />:""}

</div>
    </div>
  );
};
export default RestaurantCategory;
