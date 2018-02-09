import React from 'react';

import Article from './../../components/article/index'
import WarningText from './../../components/warningText/index'

class HomePage extends React.Component {

    state = {
        articles: [
            {
                id: 1,
                title: 'Primeiro post',
                description: 'Lorem ipsum bacon'
            },
            {
                id: 2,
                title: 'Segundo post',
                description: 'Lorem ipsum bacon'
            }
        ]
    }

    render() {
        const { articles } = this.state;

        return (
            <section className="home-page-wrapper">
                <div className="inner">

                    { articles.length > 0 ? <Article articles={articles} /> : <WarningText /> }

                </div>
            </section>
        )
    }
}

export default HomePage;