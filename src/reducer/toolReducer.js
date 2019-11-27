import {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    REGISTER_START,
    REGISTER_SUCCESS,
    REGISTER_FAILURE,
    GET_TOOL_DATA_START,
    GET_TOOL_DATA_SUCCESS,
    GET_TOOL_DATA_FAILURE,
    GET_ID_TOOL_DATA_START,
    GET_ID_TOOL_DATA_SUCCESS,
    GET_ID_TOOL_DATA_FAILURE,
    GET_ID_REQ_TOOL_DATA_START,
    GET_ID_REQ_TOOL_DATA_SUCCESS,
    GET_ID_REQ_TOOL_DATA_FAILURE,
    POST_TOOL_DATA_START,
    POST_TOOL_DATA_SUCCESS,
    POST_TOOL_DATA_FAILURE,
    PUT_TOOL_DATA_START,
    PUT_TOOL_DATA_SUCCESS,
    PUT_TOOL_DATA_FAILURE
} from '../actions'
import { stat } from 'fs';

const initialState = {
    loginData: [],
    tools: [],
    idOTools: [],
    addTData: [],
    reqTData: [],
    btools: [],
    editTools: [],
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
                isLoading: false,
                tools: [...state.tools, {value: action.payload}]
            }
        case GET_ID_TOOL_DATA_START:
            return {
                ...state,
                isLoading: true,
                error: ''
            }
        case GET_ID_TOOL_DATA_SUCCESS:
            return {
                ...state,
                isLoading: false,
                idTools: [...state.idOTools, {value: action.payload}]
            }
        case GET_ID_REQ_TOOL_DATA_START:
            return {
                ...state,
                isLoading: true,
                error: ''
            }
        case GET_ID_REQ_TOOL_DATA_SUCCESS:
            return {
                ...state,
                isLoading: false,
                reqTData: [...state.reqTData, {value: action.payload}]
            }
        case POST_TOOL_DATA_START:
            return {
                ...state,
                isLoading: true,
                error: ''
            }
        case POST_TOOL_DATA_SUCCESS: 
            return {
                ...state,
                isLoading: false,
                addTData: [...state.addTData, {value: action.payload}]
            }
        case PUT_TOOL_DATA_START:
            return {
                ...state,
                isLoading: true,
                error: ''
            }
        case PUT_TOOL_DATA_SUCCESS: 
            return {
                ...state,
                isLoading: false,
                editTools: [...state.editTools, {value: action.payload}]
            }
        default:
            return state
    }
}