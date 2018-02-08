import React from 'react';

const Article = (props) => {
    const { title, description } = props;

    return (
        <article className="article-wrapper">
            <figure>no image</figure>

            <div className="content">
                <a href="javascript:;" className="category">React</a>

                <h2 className="title"><a href="javascript:;">{title}</a></h2>
                <p>{description}</p>

                <span className="author">por: <a href="javascript:;">Vinicius</a></span>
            </div>
        </article>
    )
}

export default Article;