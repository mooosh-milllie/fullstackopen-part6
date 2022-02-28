import axios from "axios";
const baseURL = 'http://localhost:3001/anecdotes';

const getAll = async () => {
  const request = await axios.get(baseURL);
  return request.data;
}

const createAnecdote = async (content) => {
  const data = {content: content, votes: 0 }
  const response = await axios.post(baseURL, data);
  return response.data;
}

const updateAnecdote = async (id, data) => {
  const response = await axios.put(`${baseURL}/${id}`, data);
  return response.data;
}
const anecdoteServices = {getAll, createAnecdote, updateAnecdote};

export default anecdoteServices;