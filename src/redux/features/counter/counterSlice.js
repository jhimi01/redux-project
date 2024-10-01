import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increatment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    increatmentByValue: (state, actions) => {
    state.count += actions.payload;
    }
  },
});

export const { increatment, decrement, increatmentByValue } = counterSlice.actions;

export default counterSlice.reducer;
