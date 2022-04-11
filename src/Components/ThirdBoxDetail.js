
import Location from "../images/Location.png"
import React from "react"
import backgroundVariants from "../functionality/backgroundVariants"
import Search from "../images/Search.png"
import { useSelector } from "react-redux"

function ThirdBoxDetail(){
  const {cities} = useSelector(state=>state)
    return(
        <div id="thirdBoxDetail">
   <p>Search</p>
   <div>
    <input type="search"></input>
    <input className={ cities[0]? backgroundVariants(cities[0]) : ""} type="button"></input>
   </div>
   <p>Location</p>
   <div className={cities[0]? backgroundVariants(cities[0]) : " "}>
     <img src={Location}></img>
     <p>Add localization</p>
   </div>   
 </div> 

    )
}

export default ThirdBoxDetail