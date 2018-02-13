import React, { Component } from 'react';

import Header from '../header'
import HomePage from './home'

class ContainerMain extends Component {

    render() {
        return (
            <React.Fragment>
                <Header />
                <HomePage />
            </React.Fragment>
        )
    }

}

export default ContainerMain;