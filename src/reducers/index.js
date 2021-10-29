
import authedUser from './authedUser'
import condition from './condition'
import questions from './questions'
import users from './users'
import { combineReducers } from 'redux'
import { loadingBarReducer } from 'react-redux-loading'

export default combineReducers({
    condition,
    authedUser,
    users,
    
    questions,
    loadingBar: loadingBarReducer
})