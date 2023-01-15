import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
//import ReactDOM from "react-dom";
import ReactDOM from "react-dom/client";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
//components
//import { App } from './App';
import App from './App';

const router = createBrowserRouter([
  {
    path: "/login",
    element: <App/>,
    errorElement:<h1>Error</h1>,
  }
])
//ReactDOM.render(<App/>, document.getElementById("root"))

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode> 
);



