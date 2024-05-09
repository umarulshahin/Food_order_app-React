import Shimmer from "./shimmar";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
const RestaurantMenu=()=>{

    const {resId}=useParams();

    const resinfo = useRestaurantMenu(resId)
    console.log(resinfo)
if (resinfo===null) return <Shimmer />;
const {name,costForTwoMessage,cuisines}=resinfo?.cards[2]?.card?.card?.info;
const itemMenu=resinfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards;

    return (
        <div>
            <h1>RestuarantMenu.....</h1>

            <h1>{name}</h1>
            <p>{cuisines.join(", ")}  -  {costForTwoMessage}</p>

            <h3>Menu</h3>

            <ul>
              {itemMenu.map(item => <li key={item.card.info.id}>{item.card.info.name} -{" Rs"} {item.card.info.price/100 || item.card.info.defaultPrice/100 }</li>)}
            </ul>

        </div>
    )

};

export default RestaurantMenu;