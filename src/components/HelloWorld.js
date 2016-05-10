import React, { Component } from 'react';
import 'whatwg-fetch';

class HelloWorld extends Component {
  constructor(props) {
    super(props);

    this.handler = this.handler.bind(this);
  }

  handler() {
    const name = this.refs.myInput.value;

    this.refs.myInput.value = '';

    fetch('/names', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name
      })
    });
  }

  render() {
    return (
      <div>
        <input type="text" ref="myInput" placeholder="Insert a name" />
        <button onClick={this.handler}>Submit</button>
      </div>
    );
  }
}

export default HelloWorld;
