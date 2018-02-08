import React from 'react';

import Article from './../../components/article/index'

class HomePage extends React.Component {

    state = {
        articles: [
            {   
                id: 1,
                title: 'Primeiro post',
                description: 'Aqui é um texto'
            },
            {
                id: 2,
                title: 'Segundo post',
                description: 'Aqui é mais um texto'
            }
        ]
    }

    renderArticle = article => {
        const { id, title, description } = article;

        return (
            <Article
                key={id}
                title={title}
                description={description}
            />
        )
    }

    render() {
        const { articles } = this.state;

        return (
            <section className="home-page-wrapper">
                <div className="inner">
                    
                    {articles.map(article =>
                        this.renderArticle(article)
                    )}

                </div>
            </section>
        )
    }
}

export default HomePage;