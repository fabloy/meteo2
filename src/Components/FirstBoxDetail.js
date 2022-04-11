import { useSelector } from "react-redux"
import backgroundVariants from "../functionality/backgroundVariants"
import increaseHour from "../functionality/increaseHour"

function FirstBoxDetail (props){
    const {cities} = useSelector(state=>state)
    
    return(
        <section className={"middleSectionDetailDesktop"}>
    <h3>Today</h3>
    <ul className={cities[0]? backgroundVariants(cities[0]) : " "}>
     <li className="flex">
     <p id="now">Now</p>
     <div>
      {/* <p>{cities[0]?.main.temp}°</p> */}
     <div className="pointBig"></div>
    </div>
    <div id="lineDesktop"></div>
   </li>
   <li className="pointContainer">
    <li>
     <p>{cities[0]?.main.temp}°</p>
     <div>
      <div className="pointSmall"></div>
     </div>
     <p className="hour">{increaseHour(props.orario.getHours()+1)} </p>
    </li>
    <li>
     <p>{cities[0]?.main.temp}°</p>
     <div>
      <div className="pointSmall"></div>
     </div>
     <p className="hour">{increaseHour(props.orario.getHours()+2)} </p>
    </li>
    <li>
     <p>{cities[0]?.main.temp}°</p>
     <div>
      <div className="pointSmall"></div>
     </div>
     <p className="hour">{increaseHour(props.orario.getHours()+3)} </p>
    </li>
    <li>
     <p>{cities[0]?.main.temp}°</p>
     <div>
      <div className="pointSmall"></div>
     </div>
     <p className="hour">{increaseHour(props.orario.getHours()+4)} </p>
    </li>
   </li>
  </ul>
 </section>
    )
}

export default FirstBoxDetail