import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const mapStateToProps = (state, ownProps) => {
  return {
    names: state.names.map(person => person.name)
  };
};

    // <div>Wat!</div>
// let NameList = (names) => (
//   <div>
//     {names}
//   </div>
// );
let NameList = ({ names }) => {
  console.log(names);
  return (
    <ul>
      {names.map(name => (<li>{name}</li>))}
    </ul>
  );
};

NameList = connect(mapStateToProps)(NameList);

export default NameList;

