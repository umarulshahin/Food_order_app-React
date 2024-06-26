import { CDN_URLS } from "../utils/constans";
const ItemList = ({ items }) => {
  return (
    <div>
      {items.itemCards.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-gray-300 border-b-2 flex justify-between"
        >
          <div className="w-9/12 ">
            <div className="py-2">
              <span className="font-bold">{item.card.info.name}</span>
              <span className="font-bold" >
                - ₹ {" "}
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
            </div>
          <div className=" w-3/12 p-4">
            <div className="absolute flex mt-24">
          <button className="py-1 px-2 bg-black text-white shadow-lg mx-6 rounded-lg ">Add +</button>
          </div>
            <img className=" h-28"
              src={CDN_URLS + item.card.info.imageId}
              alt=""
             
            />
            
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
