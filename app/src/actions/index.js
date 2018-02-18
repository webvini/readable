import * as API from './../utils/api'
import * as actionTypes from "./actionTypes";

export const fetchArticles = () => {
    return dispatch => {
        API.getAllArticles().then(articles => dispatch({
            type: actionTypes.GET_ARTICLES,
            articles
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