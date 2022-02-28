import React from "react";
import { connect } from "react-redux";
import { addNewAnecdote} from "../reducers/anecdoteReducer";
import { notificationDelivery } from "../reducers/alertReducer";


const AnecdoteForm = (props) => {
  // const dispatch = useDispatch();
  
  const addAnecdote = async (event) => {
    event.preventDefault();
    let content = event.target.content.value;
    event.target.content.value = '';
    props.addNewAnecdote(content);
    props.notificationDelivery(`Anectode added successfully`, 3000);
  }

  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <div><input name="content" /></div>
        <button type='submit'>create</button>
      </form>
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    addNewAnecdote: value => dispatch(addNewAnecdote(value)),
    notificationDelivery: (value, value2) => dispatch(notificationDelivery(value, value2))
  }
}


export default connect(
  null,
  mapDispatchToProps
)(AnecdoteForm);