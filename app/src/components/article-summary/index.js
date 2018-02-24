import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Scripts from './../../utils/scripts'
import Author from './../author'

const ArticleSummary = props => {
    const { article, history } = props
    const { id, category, title, description, timestamp, author } = article
    const url = Scripts.stringToUrl(title)

    return (
        <article className="article-summary-wrapper">
            <figure>no image</figure>

            <div className="content">
                <a onClick={() => history.push(category)} className="category">{category}</a>

                <h2 className="title">
                    <Link to={{
                        pathname: `/${category}/${url}`,
                        state: {
                            article
                        }
                    }}>{title}</Link>
                </h2>

                <p>{description}</p>

                <Author author={author} timestamp={timestamp} />
            </div>
        </article>
    )
}

ArticleSummary.propTypes = {
    article: PropTypes.object,
    history: PropTypes.object
}

export default ArticleSummary;