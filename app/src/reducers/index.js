import { combineReducers } from 'redux'
import {
    GET_ARTICLES,
    GET_CATEGORIES
} from './../actions/actionTypes'

const articles = (state = {}, action) => {
    switch(action.type) {
        case GET_ARTICLES:
            return {
                ...state,
                data: action.articles
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