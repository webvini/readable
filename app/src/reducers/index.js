import { combineReducers } from 'redux'
import {
    GET_ARTICLES
} from './actions'

const articles = (state, action) => {
    const { article } = action

    switch(action.type) {
        case GET_ARTICLES:
            return {
                ...state,
                allArticles: action.articles
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