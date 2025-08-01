import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import router from './routesMain';
import { RouterProvider } from "react-router";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

