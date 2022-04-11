export const printNextDays=()=>{
    let data = new Date()
    let giorno =[
      "Lunedi",
      "Martedi",
      "Mercoledi", 
      "Giovedi", 
      "Venerdi", 
      "Sabato", 
      "Domenica"]
    
    let giorni=[]
    for(let j=data.getDay(); j<7; j++){
     giorni.push(giorno[j])
    }
    if(giorni.length<7){
      for(let h=0; h<data.getDay(); h++){
       giorni.push(giorno[h])
      }
    }
    return giorni
  }
