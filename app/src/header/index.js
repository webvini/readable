import React from 'react';
import Constants from '../utils/constants';

const Header = () => {
    return (
        <header className="header-wrapper">
            <div className="inner">
                <h1>{Constants.logo.title}</h1>
            </div>
        </header>
    )
}

export default Header;