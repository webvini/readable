import React from 'react';
import moment from 'moment';

const Author = props => {
    const { author, timestamp } = props

    return (
        <section className="author-wrapper">
            <div className="inner">
                <figure></figure>
                <div>
                    <a>{author}</a>
                    <span>{moment(timestamp).fromNow()}</span>
                </div>
            </div>
        </section>
    )
}

export default Author