import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { addItems, deleteItems, fetchItems } from "./cartApi";


const initialState = {
    items: [],
    status:"idle",
};


export const fetchAsync = createAsyncThunk(
    'cart/fetchItems',
    async () =>{
        const response = await fetchItems();
        return response.data;
    }
);

export const addAsync = createAsyncThunk(
    'cart/addItems',
    async (item) => {
        const {id,title,price,category,image} = item;
        const response = await addItems({id,title,price,category,image, quantity:1});
        return response.data;
    }
);

export const deleteAsync = createAsyncThunk(
    'cart/deleteItems',
    async(id) => {
         await deleteItems(id);
        return id;
    }
);



export const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{

    },
    extraReducers:(builder) =>{
        builder.addCase(fetchAsync.pending,(state) => {
            state.status = "loadning";
        })
        .addCase(fetchAsync.fulfilled, (state,action) => {
            state.action = "idle";
            state.items  = action.payload;
        })
        .addCase(addAsync.fulfilled,(state,action) => {
            state.status = "idle";
            state.items.push(action.payload); 
        })
        .addCase(deleteAsync.fulfilled,(state,action) => {
            state.status = "idle";
            const index = state.items.findIndex((item) =>item.id === action.payload)
            state.items.splice(index,1);
        })
    },
});

export default cartSlice.reducer;