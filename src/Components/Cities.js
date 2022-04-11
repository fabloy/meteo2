import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import sunny from "../images/Sunny.png"
import rain from "../images/rain.png"
import cloudy from "../images/cloudy.png"
import { NavLink } from "react-router-dom";
import Plusblu from "../images/plusblu.png"
import DesktopBottom from "./DesktopBottom";
import backgroundVariants from "../functionality/backgroundVariants"


function Cities(props) {
  const {cities, day} = useSelector(state=>state)
  const [addCity, setAddCity]= React.useState(false)
  const [newCity, setNewCity]=React.useState()
  
  return (
      <div id="primaryWrapper" to="/cit">
        
         <h2>Good Morning! Mario</h2>
        <div id='containerAggiungiCitta'>
        <img alt=""></img>
         <p onClick={()=>setAddCity(!addCity)}>Aggiungi città</p>
         <form 
          style={{display:(addCity? "block":"none")}}
          onSubmit={ (event)=>{
            event.preventDefault()
            console.log(newCity)
            props.sendCity(newCity)
          }}
          >
         <input onChange={(c)=>setNewCity(c.target.value)}></input>
         <input type="submit" value="add"></input>
         </form>
        </div>

<section>
        <div id="firstCity">
          <aside id="miniBox" className={cities[0]? backgroundVariants(cities[0]): ""}>
           <p>
            {cities[0]?.main.temp}
           </p>
           <div>
            <img src={cities[0]?.weather[0].main==="Clouds"|| cities[0]?.weather[0].main==="Mist"? cloudy : (cities[0]?.weather[0].main==="Clear"? sunny : rain)}>
            </img>
           </div>
          </aside>
          <section id="firstCityDetail">
           <h2> {cities[0]?.name} </h2>
           <h3>
             {`
             ${day.weekDay}
             ${day.numberDay}
             ${day.month}
             `}
           </h3>
           <h3>
           {cities[0]?.weather[0].main}
           </h3>
          </section>
          
        </div>
        <ul id='containerCities'>
         <li id="desktopAggiungicitta">
          <div className="cont" >
            <div>
           <img src={Plusblu}></img>
           </div>
           <p>Aggiungi città</p>
          </div>
         </li>
         {
           cities.map((city, index)=>{
             return( 
             <NavLink style={{textDecoration:"none"}} className={"navlink" }
              to={`/${city.id}`} 
              key={index}>
             <li className={`${backgroundVariants(city)} city`} id={index} >
               <div>
                <p>{city.name}</p>
                <p>{day.weekDay} {day.numberDay} <br></br>
                  {day.month}
                </p>
               </div>

               <div>
                 <img src={city.weather[0].main==="Clouds"|| city.weather[0].main==="Mist"? cloudy : (city.weather[0].main==="Clear"? sunny : rain)}>
                 </img>
               </div>
               
               <div>
                 {city.main.temp}
               </div>
             </li>
             </NavLink>
             )
           })
           
         }
         
       </ul>
</section>
 <DesktopBottom orario={props.orario} />
</div>
);
}
  
export default Cities;