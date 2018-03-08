import React from 'react';
import PropTypes from 'prop-types';

import Author from './../author'
import Vote from './../vote'

const FullArticle = props => {
    const { article } = props
    const { id, category, title, description, timestamp, author, upVote, downVote } = article

    return (
        <article className="full-article-wrapper">
            <div className="inner">
                <Author author={author} timestamp={timestamp} />
            </div>

            <figure></figure>

            <div className="inner">
                <h2>{title}</h2>
                <p>{description}</p>

                <Vote postID={id} />
            </div>
        </article>
    )
}

FullArticle.propTypes = {
    article: PropTypes.object
}

export default FullArticle