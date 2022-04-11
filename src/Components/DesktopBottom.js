import increaseHour from "../functionality/increaseHour"
import React from "react"
import FirstBoxDetail from "../Components/FirstBoxDetail"
import SecondBoxDetail from "./SecondBoxDetail"
import ThirdBoxDetail from "./ThirdBoxDetail"


function DesktopBottom(props){
 
 

return(
  <section id="desktopBottomBox">
   <FirstBoxDetail orario={props.orario}></FirstBoxDetail>
   <SecondBoxDetail></SecondBoxDetail>
   <ThirdBoxDetail></ThirdBoxDetail>
   </section>

    )
    
}

export default DesktopBottom