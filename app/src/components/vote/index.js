import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Constants from './../../utils/constants';
import { votePost } from '../../actions';

class Vote extends React.Component {

    up = () => {
        const { votePost, postID } = this.props
        votePost(postID, Constants.vote.up)
    }

    render() {
        const { upVote, downVote } = this.props
        console.log(this.props)

        return (
            <section className="vote-wrapper">
                <button onClick={() => this.up()}>({upVote}) Like</button>
                <button>({downVote}) Dislike</button>
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
        votePost: (postID, type) => dispatch(votePost(postID, type))
    }
}

Vote.propTypes = {
    voteUp: PropTypes.number,
    voteDown: PropTypes.number
}

export default connect(
    mapStateToProps ,
    mapDispatchToProps
)(Vote)