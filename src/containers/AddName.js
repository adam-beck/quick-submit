import React from 'react';
import { connect } from 'react-redux';
import { addName } from '../actions';

let AddName = ({ dispatch }) => {
  let input;

  return (
    <div>
      <input ref={node => {
        input = node;
      }} />
      <button onClick={() => {
        dispatch(addName(input.value));
        input.value = '';
      }}>
        Add Name
      </button>
    </div>
  );
};

AddName = connect()(AddName);

export default AddName;
