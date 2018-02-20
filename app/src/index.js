import React from 'react';
import ReactDOM from 'react-dom';
import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import { Router, Switch, Route } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import reducer from './reducers/index'
import Home from './views/home';

import './index.css';

const history = createHistory();
const store = createStore(
	reducer,
  	applyMiddleware(
    	thunkMiddleware
 	)
);

ReactDOM.render(
	<Provider store={store}>
		<Router history={history}>
			<Switch>
				<Route path="/" component={Home} />
			</Switch>
		</Router>
  	</Provider>,
  	document.getElementById('root')
);
