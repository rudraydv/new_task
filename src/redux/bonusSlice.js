import { createAction, createSlice } from "@reduxjs/toolkit";


const initialState = {
    points:11
};

const incbyamt = createAction('/anct/incrementByAmount');

export const bonusSlice = createSlice({
    name:'bonusinc',
    initialState,
    reducers:{
        increment:(state,action) =>{
            state.points += 1;
        },
    },
    extraReducers:(builder) => {
        builder.addCase(incbyamt,(state,action) =>{
            if(action.payload >= 100){
                state.points += 1;
            }
        });
    }
});

export const {increment} = bonusSlice.actions;

export default bonusSlice.reducer;