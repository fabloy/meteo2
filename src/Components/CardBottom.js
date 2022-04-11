import sunny from "../images/Sunny.png"
import rain from "../images/rain.png"
import cloudy from "../images/cloudy.png"

function CardBottom(props) {
    
    return(
        <li id="cardDay">
            
        <p>{props.day}</p>
        <p className="grade">{props.citySelected?.main?.temp}°</p>
        <div>
         <img src={
            props.citySelected?.weather[0]?.main==="Clouds"|| props.citySelected?.weather[0]?.main==="Mist"? cloudy : (props.citySelected?.weather[0]?.main==="Clear"? sunny : rain)
         }>
         </img>
       </div>
       </li>
    )
}

export default CardBottom