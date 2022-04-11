import { useSelector} from "react-redux";
import increaseHour from "../functionality/increaseHour";

function HourDetail(props) {

    const {citySelected} = useSelector(state=>state)
   return(
        <li className="otherLi">
            
                 <p className="hour">{increaseHour(props.orario.getHours()+props.num)} </p>
                 <div className="pointSmall"></div>
                 <p>{citySelected[0]?.main.temp}°</p>
                </li>
    )

}

export default HourDetail