import React, { Component } from 'react';
import AddName from './AddName';
import NameList from './NameList';


class App extends Component {

  render() {
    return (
      <div>
        <AddName />
        <NameList />
      </div>
    );
  }

};

export default App;
