import React from 'react';

import Article from './../../components/article/index'

class HomePage extends React.Component {
    render() {
        return (
            <section className="home-page-wrapper">
                <div className="inner">
                    <Article />
                </div>
            </section>
        )
    }
}

export default HomePage;