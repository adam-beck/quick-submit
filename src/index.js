import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import Root from './containers/Root';

let store = configureStore();

fetch('/api/names')
  .then(response => {
    return response.json();
  })
  .then(json => {
    store.dispatch({
      type: 'SET_NAMES',
      users: json
    });
  });

render(
  <Root store={store} />,
  document.getElementById('app')
);
