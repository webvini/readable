import { combineReducers } from 'redux'
import {
    GET_ARTICLES
} from './../actions'

const mock = {
    id: 1,
    title: 'First article',
    description: 'Lorem ipsum bacon'
}

const articles = (state = mock, action) => {
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