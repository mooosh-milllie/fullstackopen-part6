import { createSlice } from "@reduxjs/toolkit";
import anecdoteServices from '../services/anecdote';

// const getId = () => (100000 * Math.random()).toFixed(0)


const AnectodeSlice  = createSlice({
  name: 'anectode',
  initialState: [],
  reducers: {
    createAnec(state, action) {
      const anecDetails = action.payload;
      state.push(anecDetails)
    },
    voteAnec(state, action) {
      let votedAnec = action.payload;
      console.log(votedAnec)
      return state = state.map(anec => anec.id === votedAnec.id ? votedAnec : anec);
    },
    filteredAnec(state, action) {
      const cleardAnec = action.payload;

      return state = cleardAnec;
    },
    setAnecdote(state, action) {
      return action.payload;
    }
  },
})


export const {createAnec, voteAnec, filteredAnec, setAnecdote} = AnectodeSlice.actions;

export const getAndSetAnectodes = () => async (dispatch) => {
  const response = await anecdoteServices.getAll();
  dispatch(setAnecdote(response));
}

export const addNewAnecdote = (content) => async dispatch => {
  const response = await anecdoteServices.createAnecdote(content);
  dispatch(createAnec(response));
}

export const registerVote = (id, content) => async dispatch => {
  const response = await anecdoteServices.updateAnecdote(id, content);
  dispatch(voteAnec(response));
}

export default AnectodeSlice.reducer;