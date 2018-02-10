import React from 'react';

const Notice = props => {
    const { type, message } = props;
    
    return (
        <section className={`notice-wrapper ${type}`}>
            <p>{message}</p>
        </section>
    )
}

export default Notice;