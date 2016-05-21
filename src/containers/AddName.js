import React from 'react';
import { connect } from 'react-redux';
import { addName } from '../actions';

function addNameToServer(dispatch, name) {
    fetch('/api/names', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name
      })
    })
    .then(() => {
      dispatch(addName(name));
    });
}

let AddName = ({ dispatch }) => {
  let input;

  return (
    <div>
      <input ref={node => {
        input = node;
      }} />
      <button onClick={() => {
        addNameToServer(dispatch, input.value);
        input.value = '';
      }}>
        Add Name
      </button>
    </div>
  );
};

AddName = connect()(AddName);

export default AddName;
