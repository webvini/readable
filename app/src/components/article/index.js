import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const ArticleSummary = props => {
    const { article, history } = props
    const { category, title, description, timestamp, author } = article

    return (
        <article className="article-summary-wrapper">
            <figure>no image</figure>

            <div className="content">
                <a onClick={() => history.push(category)} className="category">{category}</a>
                <h2 className="title"><a>{title}</a></h2>
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

ArticleSummary.propTypes = {
    articles: PropTypes.array
}

export default ArticleSummary;