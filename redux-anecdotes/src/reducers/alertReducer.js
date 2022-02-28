import { createSlice } from "@reduxjs/toolkit";

const alertReducer = createSlice({
  name: 'notification',
  initialState: null,
  reducers: {
    notificationUpdate(state, action) {
      const message = action.payload;
      
      return state = message;
    }
  }
})

export const {notificationUpdate} = alertReducer.actions;
let notificationTimeout;
export const notificationDelivery = (message, duration) =>  async dispatch => {
  dispatch(notificationUpdate(message))
  clearMessage();
  notificationTimeout = setTimeout(() => {
    dispatch(notificationUpdate(null))
  }, duration);
}
const clearMessage = () => {
  clearTimeout(notificationTimeout);
}
export default alertReducer.reducer;