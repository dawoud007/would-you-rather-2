import { saveQuestion, saveQuestionAnswer } from '../utils/api';
import { showLoading, hideLoading } from 'react-redux-loading';

export const LOAD_QUESTION = 'LOAD_QUESTION';
export const NEW_QUESTION = 'NEW_QUESTION';
export const SET_QUESTION_ANSWER = 'SET_QUESTION_ANSWER';





 
export function addQuestion(question) {
    return {
        type: NEW_QUESTION,
        question
    }
}



export function getquestions(questions) {
    return {
        type: LOAD_QUESTION,
        questions
    }
}





export function addingAnswer(qid, answer) {
    return (dispatch, getState) => {
        const { authedUser } = getState();

        dispatch(showLoading());

        return saveQuestionAnswer({
            authedUser,
            qid,
            answer
        })
        .then(() => dispatch(addingAnswerToQues(authedUser, qid, answer)))
        .then(() => dispatch(hideLoading()))
    }
}



export function handleAddQuestion(optionOneText, optionTwoText) {
    
    return (dispatch, getState) => {
        const { authedUser } = getState();

        dispatch(showLoading());

        return saveQuestion({
            optionOneText,
            optionTwoText,
            author: authedUser
        })
        .then((question) => dispatch(addQuestion(question)))
        .then(() => dispatch(hideLoading()))
    }
}
export function addingAnswerToQues(authedUser, qid, answer) {
    return {
        type: SET_QUESTION_ANSWER,
        authedUser,
        qid,
        answer
    }
}