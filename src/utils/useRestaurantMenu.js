
import { useEffect,useState } from "react";
import { res_Menu } from "../utils/constans";


const useRestaurantMenu=(resId)=>{

    const [resinfo,setresinfo]=useState(null)

    useEffect(()=>{
        fetchData();
    }, []);

    const fetchData= async ()=>{

        const data= await fetch(res_Menu + resId)
        const json= await data.json()
        setresinfo(json.data)
        console.log(json.data)
    }

    return resinfo;

}
export default useRestaurantMenu;