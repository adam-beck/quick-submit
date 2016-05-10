// import React from 'react';
// import { render } from 'react-dom';

// import HelloWorld from './components/HelloWorld';

// render(<HelloWorld />, document.getElementById('app'));

import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';

let store = configureStore();

render(
  <HelloWorld />,
  document.getElementById('app')
);
