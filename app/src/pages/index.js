import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import Header from '../header';
import HomePage from './home';

const Pages = () => {
    const history = createHistory();

    return (
        <React.Fragment>
            <Header />

            <Router history={history}>
                <Switch>
                    <Route path="/" component={HomePage} />
                </Switch>
            </Router>
        </React.Fragment>
    )
}

export default Pages;