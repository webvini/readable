import React from 'react';

const Article = () => {
    return (
        <article className="article-wrapper">
            <figure>no image</figure>

            <div className="content">
                <a href="javascript:;" className="category">React</a>

                <h2 className="title"><a href="javascript:;">Primeiro Post</a></h2>
                <p>Aqui é um descrição</p>

                <span className="author">por: <a href="javascript:;">Vinicius</a></span>
            </div>
        </article>
    )
}

export default Article;