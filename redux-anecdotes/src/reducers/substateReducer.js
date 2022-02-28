import { createSlice } from "@reduxjs/toolkit";

const subStateReducer = createSlice({
  name: 'substitute',
  initialState: '',
  reducers: {
    substituteUpdate(state, action) {
      return action.payload;
    }
  }
})


export const {substituteUpdate} = subStateReducer.actions;
export default subStateReducer.reducer;