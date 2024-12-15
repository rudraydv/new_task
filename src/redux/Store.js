import { configureStore } from "@reduxjs/toolkit";
import accountReducer from './accountSlice';
import bonusReducer from './bonusSlice';
import productReducer from "./productsSlice";
import cartReducer from '../cart/cartSlice';


 export const store = configureStore({
    reducer:{
        account:accountReducer,
        bonus:bonusReducer,
        product:productReducer,
        cart:cartReducer,

    }
});