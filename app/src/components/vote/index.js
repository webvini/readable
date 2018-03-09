import React from 'react';
import { connect } from 'react-redux';

import Constants from './../../utils/constants';
import { votePost, fetchArticle } from '../../actions';

class Vote extends React.Component {

    componentDidMount() {
        const { postID, fetchArticle } = this.props
        fetchArticle(postID)
    }

    up = () => {
        const { votePost, postID } = this.props
        votePost(postID, Constants.vote.up)
    }

    down = () => {
        const { votePost, postID } = this.props
        votePost(postID, Constants.vote.down)
    }

    render() {
        const { articles } = this.props
        const { data } = articles

        return (
            <section className="vote-wrapper">
                { data &&
                    <React.Fragment>
                        <button onClick={() => this.up()}>({data.upVote}) Like</button>
                        <button onClick={() => this.down()}>({data.downVote}) Dislike</button>
                    </React.Fragment>
                }
            </section>
        )
    }
}

const mapStateToProps = ({ articles }) => {
    return {
        articles
    }
}

const mapDispatchToProps = dispatch => {
    return {
        votePost: (postID, type) => dispatch(votePost(postID, type)),
        fetchArticle: (postID) => dispatch(fetchArticle(postID))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Vote)