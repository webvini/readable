import React, { Component } from 'react';

import Header from '../header/index'
import HomePage from './home/index'

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