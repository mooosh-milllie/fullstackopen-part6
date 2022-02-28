import { configureStore } from "@reduxjs/toolkit";
import alertReducer from "./reducers/alertReducer";
import anecdoteReducer from "./reducers/anecdoteReducer";
import subStateReducer from "./reducers/substateReducer";

const store = configureStore({
  reducer: {
    anec: anecdoteReducer,
    notification: alertReducer,
    substitute: subStateReducer
  }
})

export default store;