import React, { lazy,Suspense } from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import Error from './components/Error.jsx';
import Contact from './components/contact.jsx';
import RestaurantMenu from "./components/Restaurant.Menu.jsx";
import {createBrowserRouter,Outlet} from "react-router-dom";
import UserContext from "./utils/useContext.js";
import { useState,useEffect } from "react";

const Grocery=lazy(()=>import("./components/Grocery"))
const About=lazy(()=>import("./components/About.jsx"))


const AppLayout=()=>{

  const [userName,setuserName]=useState()

useEffect(()=>{

   const data={
        name:"Shahin"
  }
  setuserName(data.name)

},[])
  return (
    <div>
      <UserContext.Provider value={{defaultuser:userName,setuserName}}>
      <Header />
      <Outlet />
      </UserContext.Provider>

    </div>
  );
};


const  approuter= createBrowserRouter([
  {
    path:"/",
    element:<AppLayout />,
    children:[
      {
        path:"/",
        element:<Body />

      },
      {
        path:"/About",
        element:<Suspense fallback={<h1>Loading....</h1>}> <About /></Suspense>
    
      },
      {
        path:"/Contact",
        element:<Contact />
      },
      {
        path:"/Restuarant/:resId",
        element:<RestaurantMenu />
      },
      {
        path:"/Grocery",
        element:<Suspense fallback={<h1>Loading....</h1>}><Grocery /></Suspense>
      }

    ],
    errorElement:<Error />

  },
  
]);

export default approuter;

