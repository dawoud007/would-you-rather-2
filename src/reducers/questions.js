import { LOAD_QUESTION, SET_QUESTION_ANSWER,NEW_QUESTION} from '../actions/questions';

export default function questions (state = {}, action) {
    switch(action.type) {
        case  LOAD_QUESTION: 
            return {
                ...state,
                ...action.questions
            }

            case SET_QUESTION_ANSWER :
                const votes=state[action.qid][action.answer].votes.concat([action.authedUser])
                    return {
                        ...state,
                        [action.qid] : {
                            ...state[action.qid],
                            [action.answer] : {
                                ...state[action.qid][action.answer],
                                votes: votes,
                            }
                        }
                    }
        case NEW_QUESTION : 
           
            return {
                ...state,
                [action.question.id] : action.question
            }
       
        default :
            return state;
    }
}