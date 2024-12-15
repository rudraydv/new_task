import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';


const initialState = {
    amount:10
};

export const fetchApiData = createAsyncThunk(
    'account/getUser',
    async (userId) =>{
        const {data} = await axios.get(`http://localhost:8080/accounts/${userId}`);
        return data.amount;
    }
)

export const accountSlicedata = createSlice({
    name:'acnt',
    initialState,
    reducers:{
        increment:(state,action) =>{
            state.amount += 1;
        },
        decrement:(state,action) =>{
            state.amount -= 1;
        },
        incrementByAmount:(state,action) =>{
            state.amount += action.payload;
        },
    },
    extraReducers:(builder) =>{
        builder.addCase(fetchApiData.fulfilled,(state,action) =>{
            state.amount = action.payload;
        });
    }
});

export const {increment, decrement , incrementByAmount} = accountSlicedata.actions;

export default accountSlicedata.reducer;