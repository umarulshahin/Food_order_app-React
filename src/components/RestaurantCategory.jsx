import ItemList from "./itemList";
const RestaurantCategory = ({ data,showItems,setItemIndex }) => {
    const handleClick=()=>{
      setItemIndex() 
    }
  return (
    <div>
      <div className="w-6/12  mx-auto my-4 bg-gray-100 shadow-xl p-4">
      <div className="flex justify-between cursor-pointer" onClick={handleClick}>
          <span className=" font-bold text-lg cursor-pointer" >
            {data.title} ({data.itemCards.length})
          </span>
          <span className="cursor-pointer" >🔽</span>
      </div>
      {showItems && <ItemList items={data} />}

</div>
    </div>
  );
};
export default RestaurantCategory;
