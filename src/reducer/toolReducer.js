import {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    REGISTER_START,
    REGISTER_SUCCESS,
    REGISTER_FAILURE,
    GET_TOOL_DATA_START,
    GET_TOOL_DATA_SUCCESS,
    GET_TOOL_DATA_FAILURE
} from '../actions'
import { stat } from 'fs';

const initialState = {
    loginData: [],
    tools: [],
    btools: [],
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
                loginData: [...state.loginData, {value: action.payload }],
                error: ''
            };
        case REGISTER_START:
            return {
                ...state,
                isLoading: true,
                error: ''
            }
        case REGISTER_SUCCESS: 
            return {
                ...state,
                isLoading: false,
                loginData: [...state.loginData, {value: action.payload}]
            }
        case GET_TOOL_DATA_START:
            return {
                ...state,
                isLoading: true,
                error: ''
            }
        case GET_TOOL_DATA_SUCCESS:
            return {
                ...state,
                isLoading: true,
                tools: [...state.tools, {value: action.payload}]
            }
        default:
            return state
    }
}