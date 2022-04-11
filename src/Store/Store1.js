import { createSlice } from "@reduxjs/toolkit";

const data = new Date;
const initialState = {
    cities:[],
    citySelected:{},
    day:{
        numberDay: data.getDate(),
        weekDay:"",
        month: ""
    },
    nextDays:[]
    

}

const citiesStore = createSlice({
    name:"citiesStore",
    initialState:initialState,
    reducers:{
        setCities:(state, action)=>{
            state.cities=action.payload
        },
        setDay:(state, action)=>{
            state.day= {...state.day, ...action.payload}
        },
        setNextDays:(state, action)=>{
            state.nextDays=action.payload
        },
        setCitySelected:(state, action)=>{
            state.citySelected=action.payload
        }
    }
})


const {reducer}= citiesStore
export default reducer
export const {setCities, setDay, setNextDays, setCitySelected} = citiesStore.actions