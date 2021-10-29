import { getUsers} from './users'

import { showLoading, hideLoading } from 'react-redux-loading'
import {getquestions } from './questions'

import { getInitialData } from '../utils/api'


export function handleInitialData () {
    return (dispatch) => {
        dispatch(showLoading());
        return getInitialData()
            .then(({ users, questions }) => {
                dispatch(getUsers(users));
                dispatch(getquestions(questions));
               
                dispatch(hideLoading());
            })
    }
}
