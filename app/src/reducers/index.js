import { combineReducers } from 'redux'
import {
    GET_ARTICLES,
    GET_ARTICLE,
    VOTE,
    GET_CATEGORIES
} from './../actions/actionTypes'

const articles = (state = {}, action) => {
    const { articles, article } = action

    switch(action.type) {
        case GET_ARTICLES:
            return {
                ...state,
                data: articles
            }
        case GET_ARTICLE:
            return {
                ...state,
                data: article
            }
        case VOTE:
            return {
                ...state,
                data: article
            }
        default:
            return {
                ...state
            }
    }
}

const categories = (state = {}, action) => {
    switch(action.type) {
        case GET_CATEGORIES:
            return {
                ...state,
                data: action.categories
            }
        default:
            return {
                ...state
            }
    }
}

export default combineReducers({
    articles,
    categories
})