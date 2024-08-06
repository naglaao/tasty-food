import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../features/cartSlice";
import dishSlice from "../features/dishSlice";
import productSlice from "../features/productSlice";

// create store
export const store = configureStore({
    reducer:{
        allCart:cartSlice,
        allDish: dishSlice,
        allProduct:productSlice 
    }
})