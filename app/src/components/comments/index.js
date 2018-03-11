import React from 'react';

class Comments extends React.Component {
    render() {
        return (
            <section className="comments-wrapper">
                <div className="inner">
                    <h3>Comments</h3>

                    <ul className="list">
                        <li>
                            <p>Primeiro comentário</p>
                            <span>2 hours ago</span>
                        </li>
                        <li>
                            <p>Primeiro comentário</p>
                            <span>2 hours ago</span>
                        </li>
                    </ul>
                </div>
            </section>
        )
    }
}

export default Comments;