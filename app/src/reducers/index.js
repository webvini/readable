import { combineReducers } from 'redux'
import {
    GET_ARTICLES
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

export default combineReducers({
    articles
})