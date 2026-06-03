import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0
}

export const counterSlice = createSlice(
    {
        name: "count",
        initialState,
        reducers: {
            incrementCount: (state) => {
                state.count += 1;
            },
            decrementCount: (state) => {
                state.count -= 1;
            },
            incrementByValue: (state, action) => {
                state.count += action.payload;
            }
        }
    }
)

export const { incrementCount, decrementCount, incrementByValue } = counterSlice.actions;

export const selectAllStates = (state) => state.counter.count;

export default counterSlice.reducer;