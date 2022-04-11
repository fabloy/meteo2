const backgroundVariants = (cityName)=>{
    let backgroundVariants = ''
    console.log(cityName)
    if(cityName.weather[0].main==='Clouds' || cityName.weather[0].main==='Fog' || cityName.weather[0].main==="Rain"){
     return backgroundVariants+='grayStyle'
    }else if(cityName.weather[0].main==='Mist'){
     return backgroundVariants+='darkBlueStyle'
    }else{
     return backgroundVariants+='sunnyStyle'
    }
}

export default backgroundVariants
