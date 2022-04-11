import React from "react"
import Home from "../images/Home.png"
import Location  from "../images/Location.png"
import Search from "../images/Search.png"
import { Link } from "react-router-dom"

function NavBar(){
    return(
     <section id="navbar">
        <ul id="navList">
       
         <li >
         <Link to={"/"}>   
          <img src={Home}></img>
          </Link>
         </li>
       
         <li>
          <img src={Search}></img>
         </li>
         <li>
          <img src={Location}></img>
         </li>
        </ul>
     </section>
    )
}

export default NavBar