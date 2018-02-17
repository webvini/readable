import React from 'react';
import PropTypes from 'prop-types';

const Notice = props => {
    const { type, message } = props;
    
    return (
        <section className={`notice-wrapper ${type}`}>
            <p>{message}</p>
        </section>
    )
}

Notice.propTypes = {
    type: PropTypes.string,
    message: PropTypes.string
}

export default Notice;