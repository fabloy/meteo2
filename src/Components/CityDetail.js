import React, { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import backgroundVariants from "../functionality/backgroundVariants"
import sunny from "../images/Sunny.png"
import rain from "../images/rain.png"
import cloudy from "../images/cloudy.png"
import { setCitySelected } from "../Store/Store1"
import HourDetail from "./HourDetail"
import CardBottom from "./CardBottom"
import NavBar from "./Nav"
import Plus from "../images/puls.png"
import Arrow from "../images/arrow.png"

function CityDetail(props) {
    // if(document.documentElement.clientWidth>=768){
    //     window.location.replace("/")
    //    }
    const params = useParams() 
    const dispatch = useDispatch()
    const {cities, day, citySelected, nextDays} = useSelector(state=>state)
    
    let cityToView=cities.filter(city=> city.id.toString() === params.id)
    
            useEffect(()=>{
              dispatch(setCitySelected(cityToView)) 
            },[cityToView[0]])

    return(
       
        <div id="cityDetail" className={citySelected[0]? backgroundVariants(citySelected[0]) : ""}>
         <section id="cityHeaders">
          <div>
            <Link to={"/"}>
             <img src={Arrow}></img>
            </Link>
          </div>
          <h3>{citySelected[0]?.name} </h3>
          <div>
            <img src={Plus}></img>
          </div>
        </section>
        
            
            <p id="date">{day.weekDay} {day.numberDay}, {day.month}</p>
            <p>{citySelected[0]?.weather[0].main}</p>

           <section className="firstSection">
            <div>
                <img src={citySelected[0]?.weather[0].main==="Clouds"|| citySelected[0]?.weather[0].main==="Mist"? cloudy : (citySelected[0]?.weather[0].main==="Clear"? sunny : rain)
                }>
                </img>
            </div>
            <h3 id="topSectionTemperature">
                {citySelected[0]?.main.temp}°
            </h3>
            </section>

            <section className="middleSectionDetail">
            
            <ul>
                <li id="nowLi">
                    <p>Now</p>
                    <div className="point"></div>
                    <div id="line"></div>
                    <p>{citySelected[0]?.main.temp}°</p>
                </li>
            <HourDetail orario={props.orario} num={1}></HourDetail>
            <HourDetail orario={props.orario} num={2}></HourDetail>
            <HourDetail orario={props.orario} num={3}></HourDetail>
            <HourDetail orario={props.orario} num={4}></HourDetail>
            <HourDetail orario={props.orario} num={5}></HourDetail>
            </ul>
         </section>
            
         <div className="bottomSectionDetail">
             <ul>
                 {
                     nextDays.map((futureDay)=>{
                         return(
                            <CardBottom citySelected={citySelected[0]} day={futureDay} />
                         )
                     })
                 }
            </ul>
         </div>
         <NavBar/>
        </div>




    )
}

export default CityDetail