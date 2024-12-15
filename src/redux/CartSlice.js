import { createSlice } from "@reduxjs/toolkit";


const initialState ={
    carts:[]
};

const CartSlicedata = createSlice({
    name:"cartSlice",
    initialState,
    reducers:{
        addToCart:(state,action)=>{
            const itemindex = state.carts.findIndex((item)=>item.id === action.payload.id)
            if(itemindex>=0)
            {
                state.carts[itemindex].qnty+=1;
            }
            else
            {
              const temp = { ...action.payload,qnty:1}
              state.carts = [...state.carts ,temp ];
            }

        },

        removeToCart:(state,action) =>{
            const data = state.carts.filter((ele)=> ele.id !== action.payload);

            state.carts = data;

        },

        handleDecrement:(state,action) =>{
            const itemindex_dec = state.carts.findIndex((item)=>item.id === action.payload.id)

            if(state.carts[itemindex_dec].qnty>=1)
            {
                state.carts[itemindex_dec].qnty-=1;
            }
       },

       emptyCartItem:(state,action) =>{
        state.carts = [];
       },
        
    }
});

export const { addToCart, removeToCart ,handleDecrement,emptyCartItem} = CartSlicedata.actions;

export default CartSlicedata.reducer;