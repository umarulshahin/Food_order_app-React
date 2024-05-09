import React, { lazy,Suspense } from "react";
import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
// import About from './components/About.jsx';
import Error from './components/Error.jsx';
import Contact from './components/contact.jsx';
import RestaurantMenu from "./components/Restaurant.Menu.jsx";
// import Grocery from "./components/Grocery.jsx"
import {createBrowserRouter,Outlet} from "react-router-dom";


const Grocery=lazy(()=>import("./components/Grocery"))
const About=lazy(()=>import("./components/About.jsx"))

const AppLayout=()=>{
  return (
    <div>
      <Header />
      <Outlet />

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
        element:<Suspense fallback={()=><h1>Loading....</h1>}> <About /></Suspense>
    
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
        element:<Suspense fallback={()=><h1>Loading....</h1>}><Grocery /></Suspense>
      }

    ],
    errorElement:<Error />

  },
  
]);

export default approuter;

