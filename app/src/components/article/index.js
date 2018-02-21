import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const Article = props => {
    const { article } = props
    const { id, category, title, description, timestamp, author } = article

    return (
        <article className="article-wrapper">
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

Article.propTypes = {
    articles: PropTypes.array
}

export default Article;