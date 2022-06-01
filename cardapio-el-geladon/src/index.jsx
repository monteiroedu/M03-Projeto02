import React from "react"; 
import ReactDOM from "react-dom/client";
import Home from "./views/Home/Home.jsx"; 
import "../src/assets/styles/main.css"; 

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  
  <React.StrictMode>
    <Home />{" "}
    {/*o <Home/> é a rota Home.jsx, que para ser renderizada precisa vir como se fosse uma TAG <html className=""></html>*/}
  </React.StrictMode> 
);