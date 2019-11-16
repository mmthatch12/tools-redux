import {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    REGISTER_START,
    REGISTER_SUCCESS,
    REGISTER_FAILURE
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
        default:
            return state
    }
}