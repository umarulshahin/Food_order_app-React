import React from 'react'
import ReactDOM from 'react-dom/client'
import approuter from './App.jsx'
import './index.css'
import {RouterProvider} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  /* </React.StrictMode>, */
  <RouterProvider router={approuter} />
   
  
);


