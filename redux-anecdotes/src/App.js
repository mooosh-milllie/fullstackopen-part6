import AnecdoteForm from './components/AnecdoteForm';
import AnecdoteList from './components/AnecdoteList';
import { getAndSetAnectodes } from './reducers/anecdoteReducer';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';


const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAndSetAnectodes());
  }, [dispatch])
  
  return (
    <div>
      <AnecdoteList/>
      <AnecdoteForm/>
    </div>
  )
}

export default App;