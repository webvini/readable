import { combineReducers } from 'redux'
import {
    GET_ARTICLES,
    GET_ARTICLE,
    UP_VOTE,
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
        case UP_VOTE:
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