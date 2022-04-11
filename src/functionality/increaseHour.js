const increaseHour=(hour)=>{
    let contatore = 25
    for(let j = 1; j<5; j++){
       if(hour===contatore){
           hour=j
           return `${hour} a.m.`
       }
       contatore++
    }
    return `${hour} ${hour<=12 ? "a.m." : "p.m."}`
    }

    export default increaseHour