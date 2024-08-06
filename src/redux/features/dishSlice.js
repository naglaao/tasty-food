import {  createSlice } from "@reduxjs/toolkit"

// fetch data from file to search
import Cardsdata from "../../components/CardData";




const initialState = {
    dishes: [],
    dishesStatus:"",
    detailProduct:{},
    dishesMobile: [],
    dishesStatusMobile:"",

}
// dishes slice
const dishSlice = createSlice({ 
    
    name: "dishslice",
    initialState,
    reducers :{
        //filter products
        filterDishes: (state, action) => {
            const input = action.payload.toLowerCase();
            if (input.length === 0) {
                state.dishes = [];
                state.dishesStatus = "";
            } else {
                state.dishes =Cardsdata.filter((e) => (
                    e.dish.toLowerCase().includes(input) || e.category.toLowerCase().includes(input)
                ));
                state.dishesStatus = state.dishes.length === 0 ? "No results found" : "";
            }
        },
        filterDisheSearch: (state, action) => {
            const input = action.payload.toLowerCase();
            if (input.length === 0) {
                state.dishesMobile = [];
                state.dishesStatusMobile = "";
            } else {
                state.dishesMobile = Cardsdata.filter((e) => (
                    e.dish.toLowerCase().includes(input) || e.category.toLowerCase().includes(input)
                ));
                state.dishesStatusMobile = state.dishesMobile.length === 0 ? "No results found" : "";
            }
        },
        detailProducts: (state, action)=>{
            state.detailProduct={...action.payload}
            console.log(state.detailProduct)
            localStorage.setItem('detailProduct', JSON.stringify(state.detailProduct)); //to store untill next img to be clicked
        }
    } 
  
  

})

export const{filterDishes, detailProducts, filterDisheSearch}= dishSlice.actions;
export default dishSlice.reducer;