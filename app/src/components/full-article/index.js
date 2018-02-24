import React from 'react';

import Author from './../author'

const FullArticle = props => {
    const { articleID } = props

    return (
        <article className="full-article-wrapper">
            <Author />

            <figure></figure>

            <div className="inner">
                <h2>Full article</h2>
            </div>
        </article>
    )
}

export default FullArticle