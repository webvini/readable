import * as actionTypes from "./actionTypes";
import * as API from './utils/api'

export const fetchArticles = () => {
    return dispatch => {
        API.getAllArticles().then(articles => dispatch({
            type: actionTypes.GET_ARTICLES,
            articles
        }))
    }
}