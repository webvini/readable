import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

class Article extends React.Component {

    renderArticle = article => {
        const { id, category, title, description, timestamp, author } = article

        return (
            <article className="article-wrapper" key={id}>
                <figure>no image</figure>

                <div className="content">
                    <a href="javascript:;" className="category">{category}</a>
                    <h2 className="title"><a href="javascript:;">{title}</a></h2>
                    <p>{description}</p>

                    <span className="about">
                        <a href="javascript:;">
                            {author}
                        </a> 
                        - {moment(timestamp).fromNow()}
                    </span>
                </div>
            </article>
        )
    }

    render() {
        const { articles, location } = this.props
        const { pathname } = location
        
        return (
            articles
                .filter(article => article.category === pathname.slice(1) || pathname === undefined)
                .map(article => (
                    this.renderArticle(article)
                ))
            )
    }
}

Article.propTypes = {
    articles: PropTypes.array
}

export default Article;