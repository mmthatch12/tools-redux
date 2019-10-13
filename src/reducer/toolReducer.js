import {
    GET_TOOL_DATA_START,
    GET_TOOL_DATA_SUCCESS,
    GET_TOOL_DATA_FAILURE
} from '../actions'

const initialState = {
    tools: [],
    isLoading: false,
    error: ''
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_TOOL_DATA_START:
            return {
                ...state,
                isLoading: true,
                error: ''
            };
        case GET_TOOL_DATA_SUCCESS:
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