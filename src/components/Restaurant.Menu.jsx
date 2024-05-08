import { useEffect,useState} from "react";
import Shimmer from "./shimmar";
import { res_Menu } from "../utils/constans";
import { useParams } from "react-router-dom";
const RestaurantMenu=()=>{

    const[resinfo,setresinfo]=useState(null)

    const {resId}=useParams();

    useEffect(()=>{
    menuFetch()
    },[])

const menuFetch= async ()=>{
      const data=await fetch(res_Menu+resId)
      const json=await data.json();
      console.log(json)
      setresinfo(json.data)
    //   console.log(json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards)  
    // &catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER  
}


if (resinfo===null) return <Shimmer />;
const {name,costForTwoMessage,cuisines}=resinfo?.cards[2]?.card?.card?.info;
const itemMenu=resinfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards;
console.log(itemMenu)

    return (
        <div>
            <h1>RestuarantMenu.....</h1>

            <h1>{name}</h1>
            <p>{cuisines.join(", ")}  -  {costForTwoMessage}</p>

            <h3>Menu</h3>

            <ul>
              {itemMenu.map(item => <li>{item.card.info.name} -{" Rs"} {item.card.info.price/100 || item.card.info.defaultPrice/100 }</li>)}
            </ul>

        </div>
    )

};

export default RestaurantMenu;