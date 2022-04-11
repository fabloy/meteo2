

  export const printDate=()=>{
    let data = new Date()
    let giorno =["Domenica", "Lunedi","Martedi","Mercoledi", "Giovedi", "Venerdi", "Sabato"]
    let mese=["Gennaio","Febbraio","Marzo","Aprile","Maggio", "Giugno","Luglio","Agosto","Settembre","Ottobre","Novembre","Dicembre"]
    let giornoCorrente =""
    let meseCorrente=""

    for(let i=0; i<7; i++){
      if(data.getDay()===i){
        giornoCorrente=giorno[i]
        console.log(giornoCorrente, data.getDay())
      }
    }
    for(let j = 0 ; j<12; j++){
      if(data.getMonth()===j){
        meseCorrente=mese[j]
      }
    }
    
return {
  weekDay:giornoCorrente,
  month:meseCorrente
 }
  }
