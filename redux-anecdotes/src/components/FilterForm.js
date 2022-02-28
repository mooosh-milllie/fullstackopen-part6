import React from "react";
// import { useDispatch } from "react-redux";
import { connect } from "react-redux";
import { substituteUpdate } from "../reducers/substateReducer";

const Filter = (props) => {
  // const dispatch = useDispatch();
  const handleChange = (event) => {
    const searchText = event.target.value;
    props.substituteUpdate(searchText);
  }

  const style = {
    marginBottom: 10
  }

  return (
    <div style={style}>
      filter <input onChange={handleChange} name="search" />
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    substituteUpdate: value => dispatch(substituteUpdate(value))
  }
}

export default connect(
  null,
  mapDispatchToProps
)(Filter);