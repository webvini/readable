import React from 'react';
import moment from 'moment';

const Author = props => {
    const { author, timestamp } = props

    return (
        <section className="author-wrapper">
            <figure></figure>
            <div>
                <a>{author}</a>
                <span>{moment(timestamp).fromNow()}</span>
            </div>
        </section>
    )
}

export default Author