import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { registerVote} from '../reducers/anecdoteReducer';
import Notification from './Notification';
import { notificationDelivery } from '../reducers/alertReducer';
import Filter from './FilterForm';

const AnecdoteList = (props) => {
  const dispatch = useDispatch();
  const anecdotes = useSelector(({ anec, notification, substitute }) => {
  // The spread operator is used to create a copy of the Anec state so it can be sorted
  // Because the sort method tries to change the base state. 
    const anecList = [...anec];
    if (substitute === '') {
      return anecList.sort((a, b) => b.votes - a.votes);
    }
    return anecList.filter(a => a.content.includes(substitute)).sort((a, b) => b.votes - a.votes);
  })
  

  const handleVotes = (id) => {
    let getAnecdote = anecdotes.find((anec) => anec.id === id);
    let votedAnec = {...getAnecdote, votes: getAnecdote.votes + 1};
    dispatch(registerVote(id, votedAnec));
    dispatch(notificationDelivery(`You voted for ${votedAnec.content}`, 3000));
  };
  
  return (
    <div>
      <h2>Anecdotes</h2>
      <Notification/>
      <Filter/>
      { anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => {
              handleVotes(anecdote.id)
            }}>
              vote
            </button>
          </div>
        </div>
      )}
    </div>
  )
}



export default AnecdoteList;