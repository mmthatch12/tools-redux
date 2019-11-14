import {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILURE
} from '../actions'

const initialState = {
    tools: [],
    isLoading: false,
    error: ''
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case LOGIN_START:
            return {
                ...state,
                isLoading: true,
                error: ''
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoading: false,
                players: action.payload,
                error: ''
            }
        default:
            return state
    }
}