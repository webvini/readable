import * as API from './../utils/api';
import * as actionTypes from "./actionTypes";
import Constants from './../utils/constants';

export const fetchArticles = () => {
    return dispatch => {
        API.getAllArticles().then(articles => dispatch({
            type: actionTypes.GET_ARTICLES,
            articles
        }))
    }
}

export const fetchArticle = postID => {
    return dispatch => {
        API.getArticle(postID).then(article => dispatch({
            type: actionTypes.GET_ARTICLE,
            article
        }))
    }
}

export const fetchCategories = () => {
    return dispatch => {
        API.getAllCategories().then(categories => dispatch({
            type: actionTypes.GET_CATEGORIES,
            categories
        }))
    }
}

export const votePost = (postID, type) => {
    let actionType = ( type === Constants.vote.up ) ? actionTypes.UP_VOTE : actionTypes.DOWN_VOTE

    return dispatch => {
        API.articleVote(postID, type).then(article => dispatch({
            type: actionType,
            article
        }))
    }
}