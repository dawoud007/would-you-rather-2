


import {RETURN_CONDITION } from '../actions/authedUser';
export default function condition (state = null, action) {
    switch (action.type) {
        case RETURN_CONDITION : 
            return action.cond;
        default :
            return state;
    }
}