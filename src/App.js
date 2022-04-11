import logo from './logo.svg';
import './App.css';
import Cities from './Components/Cities';
import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { setCities, setDay, setNextDays } from './Store/Store1';
import {printDate} from "./functionality/setData"
import React from 'react';
import NavBar from './Components/Nav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CityDetail from './Components/CityDetail';
import { printNextDays } from './functionality/printNextDays';
import {cities} from "../src/Store/Store1"

function App() {

  let nomiCitta= ["Trento", "Catania", "Bologna"] 
  const {cities}=useSelector(state=>state)
  const data = new Date
  const dispatch = useDispatch()

  const searchCity=()=>{//funzione che itera nomiCittà ed effettua chiamate asincrone per ogni città inserita
    let citiesFound=[]
    for(let i = 0; i<nomiCitta.length; i++){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${nomiCitta[i]}&appid=23065cfcec2f7e247b343686885ea449`)
    .then(res=>res.json())
    .then(res => {
      //riduco la lunghezza dei gradi forniti dall'api perchè arrivano con 3 cifre numeriche
      res.main.temp=res.main.temp.toString().substring(0, 2) 
      citiesFound=[...citiesFound, res]
      dispatch(setCities(citiesFound))
    })
    }
  }
  
  const sendCity=(city)=>{
    nomiCitta=[...nomiCitta, city]
    console.log(nomiCitta)
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=23065cfcec2f7e247b343686885ea449`)
    .then(res=>res.json())
    .then(res=>{
      res.main.temp=res.main.temp.toString().substring(0, 2) 
      dispatch(setCities([...cities, res]))
      console.log(res, cities)
    })
  
  }
  useEffect(()=>{
    searchCity()
    dispatch(setDay(printDate()))
    dispatch(setNextDays(printNextDays()))
  }, [])


  return (
    <div className="App">
      <BrowserRouter>
       <Routes>
         <Route path="/" element={<Cities orario={data} sendCity={(city)=>sendCity(city)}></Cities>} />
         <Route path="/:id" element ={<CityDetail orario={data}></CityDetail>} />
        </Routes>
        <NavBar/>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
