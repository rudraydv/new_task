import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
    products:[],
    status:"idle",
};

export const fetchAsync = createAsyncThunk(
    'products/fetchproducts',
    async() =>{
        const response = await axios.get('http://localhost:8080/products');
        return response.data;
    }
);

export const productSlice = createSlice({
    name:"products",
    initialState,
    reducers:{

    },
    extraReducers:(builder) =>{
        builder.addCase(fetchAsync.pending,(state,action) =>{
            state.status = "loading"
        })
        .addCase(fetchAsync.fulfilled,(state,action) =>{
            state.status = "idle";
            state.products = action.payload;
        })
    }
});

//export const {} = productSlice.actions;

export default productSlice.reducer;