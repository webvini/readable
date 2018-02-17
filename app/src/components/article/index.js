import React from 'react';
import moment from 'moment';

const Article = props =>  {
    const { articles } = props

    return (
        <React.Fragment>
            {articles.map(article => {
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
            })}
        </React.Fragment>
    )
}

export default Article;