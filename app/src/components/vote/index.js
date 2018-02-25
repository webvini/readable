import React from 'react';
import PropTypes from 'prop-types';

const Vote = props => {
    const { voteUp, voteDown } = props

    return (
        <section className="vote-wrapper">
            <button>({voteUp}) Like</button>
            <button>({voteDown}) Dislike</button>
        </section>
    )
}

Vote.propTypes = {
    voteUp: PropTypes.number,
    voteDown: PropTypes.number
}

export default Vote