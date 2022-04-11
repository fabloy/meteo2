import { useSelector } from "react-redux"
import React from "react"
import CardBottom from "./CardBottom"
import wind from "../images/wind.png"
import backgroundVariants from "../functionality/backgroundVariants"

function SecondBoxDetail(){

 const {cities, nextDays, day} = useSelector(state=>state)
 const [viewFirstDays, setViewFirstDays] = React.useState(true)
 const [dayWeek, setDayWeek]=React.useState(true)

    return(
        <div>
         <aside>
         <div 
          onClick={()=>setDayWeek(!dayWeek)}
          className={dayWeek ? (cities[0]? backgroundVariants(cities[0]) : " ") : "dayWeekDeselected"}
          >
          <p>This week</p>
        </div>
        <div
         onClick={()=>setDayWeek(!dayWeek)} 
         className={dayWeek ? "dayWeekDeselected" :(cities[0]? backgroundVariants(cities[0]) : " ") }
         >
         <p>This month</p>
     </div>
   </aside>
   <section className={cities[0]? backgroundVariants(cities[0]) : " "}>
    <div className={ "bottomSectionDetail"}>
            {dayWeek ?
              viewFirstDays? <ul id="firstDays">
              <CardBottom citySelected={cities[0]} day={nextDays[0]}></CardBottom>
              <CardBottom  citySelected={cities[0]} day={nextDays[1]}></CardBottom>
              <CardBottom  citySelected={cities[0]} day={nextDays[2]}></CardBottom>
           </ul> :  <ul id="secondDays">
              <CardBottom citySelected={cities[0]} day={nextDays[3]}></CardBottom>
              <CardBottom  citySelected={cities[0]} day={nextDays[4]}></CardBottom>
              <CardBottom  citySelected={cities[0]} day={nextDays[5]}></CardBottom>
            </ul>
            :
            <div id="month">
              <div>
                <p>{day.weekDay} <br></br> {day.numberDay} {day.month} </p>
                <div><img src={wind}></img></div>
              </div>
              <div>
                <p>
                  {cities[0].main.temp}°
                </p>
               <p>
                 la massima prevista è {cities[0].main.temp_max}°
                 <br></br>
                 la minima prevista è {cities[0].main.temp_min}°
                 <br></br>
                 <br></br>
                 {cities[0]?.weather[0].description}<br></br> 
                 Pressure: {cities[0].main.pressure}<br></br> 
                 Humidity: {cities[0].main.humidity}%
               </p>
              </div>
            </div>
            }
            
           
    </div>
   </section>
   <button 
    style={{"display" : (dayWeek ? "block" : "none")}}
    className={viewFirstDays?"select":"deselect"}
    onClick={()=>{setViewFirstDays(!viewFirstDays)}}>
   </button>
   <button 
    style={{"display" : (dayWeek ? "block" : "none")}}
    className={viewFirstDays? "deselect":"select"} 
    onClick={()=>{setViewFirstDays(!viewFirstDays)}}>
   </button>
 </div>
    )
}

export default SecondBoxDetail