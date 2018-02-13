import React from 'react';
import ReactDOM from 'react-dom';
import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import reducer from './reducers'
import ContainerMain from './container';
import './index.css';

const store = createStore(
  reducer,
  applyMiddleware(
    thunkMiddleware
  )
);

console.log(store)

ReactDOM.render(
  <Provider store={store}>
    <ContainerMain />
  </Provider>,
  document.getElementById('root')
);
