import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const mapStateToProps = (state, ownProps) => {
  return {
    names: state.names
  };
};

let NameList = ({ names }) => {
  return (
    <ul>
      {names.map((name, index) => (<li key={index}>{name}</li>))}
    </ul>
  );
};

NameList = connect(mapStateToProps)(NameList);

export default NameList;

