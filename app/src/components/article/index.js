import React from 'react';

const Article = props =>  {
    const { articles } = props

    return (
        <React.Fragment>
            {articles.map(article => {
                return (
                    <article className="article-wrapper" key={article.id}>
                        <figure>no image</figure>

                        <div className="content">
                            <a href="javascript:;" className="category">React</a>

                            <h2 className="title"><a href="javascript:;">{article.title}</a></h2>
                            <p>{article.description}</p>

                            <span className="author">por: <a href="javascript:;">Vinicius</a></span>
                        </div>
                    </article>
                )
            })}
        </React.Fragment>
    )
}

export default Article;