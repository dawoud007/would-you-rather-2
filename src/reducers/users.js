import { LOAD_USERS } from '../actions/users';
import { SET_QUESTION_ANSWER } from '../actions/questions';

export default function users (state = {}, action) {
    switch(action.type) {
       
       
        case SET_QUESTION_ANSWER: {

            const {answer}=action.answer
            return {
                ...state,
                [action.authedUser] : {
                    ...state[action.authedUser],
                    answers : {
                        ...state[action.authedUser].answers,
                        [action.qid] :answer
                    }
                }
            }
        }
       
       
        case LOAD_USERS : 
            return {
                ...state,
                ...action.users
            }
        
        default :
            return state;
    }
}