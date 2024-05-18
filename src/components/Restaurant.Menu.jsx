import Shimmer from "./shimmar";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";
import { RestaurantCategoryList } from "../utils/constans";
const RestaurantMenu = () => {
  const { resId } = useParams();
  const [itemIndex, setItemIndex] = useState(null);
  const resinfo = useRestaurantMenu(resId);
  if (resinfo === null) return <Shimmer />;
  // console.log(resinfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards)
  const { name, costForTwoMessage, cuisines } =
    resinfo?.cards[2]?.card?.card?.info;
  const itemMenu =
    resinfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
      ?.itemCards;

  const Categories =
    resinfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) => c.card?.card?.["@type"] === RestaurantCategoryList
    );
  console.log(Categories);
  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      {Categories.map((category, index) => (
        <RestaurantCategory
          key={category.card.card.title}
          data={category.card.card}
          showItems={index === itemIndex ? true : false}
          setItemIndex={
            index === itemIndex
              ? () => setItemIndex(null)
              : () => setItemIndex(index)
          }
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
