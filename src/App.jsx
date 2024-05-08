import React from "react";
import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import About from './components/About.jsx';
import Error from './components/Error.jsx';
import Contact from './components/contact.jsx';
import RestaurantMenu from "./components/Restaurant.Menu.jsx";

import {createBrowserRouter,Outlet} from "react-router-dom";

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
        element: <About />
    
      },
      {
        path:"/Contact",
        element:<Contact />
      },
      {
        path:"/Restuarant/:resId",
        element:<RestaurantMenu />
      }

    ],
    errorElement:<Error />

  },
  
]);

export default approuter;

