import React from 'react';
import moment from 'moment';

import 'font-awesome/css/font-awesome.min.css';

const Author = props => {
    const { author, timestamp } = props

    return (
        <section className="author-wrapper">
            <figure><i className="fa fa-user-circle"></i></figure>
            <div>
                <a>{author}</a>
                <span>{moment(timestamp).fromNow()}</span>
            </div>
        </section>
    )
}

export default Author