import axios from 'axios'
import { getThemeProps } from '@material-ui/styles'

export const REGISTER_START = 'REGISTER_START'
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
export const REGISTER_FAILURE = 'REGISTER_FAILURE'
export const LOGIN_START = 'LOGIN_START'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'
export const GET_TOOL_DATA_START = 'GET_TOOL_DATA_START'
export const GET_TOOL_DATA_SUCCESS = 'GET_TOOL_DATA_SUCCESS'
export const GET_TOOL_DATA_FAILURE = 'GET_TOOL_DATA_FAILURE'
export const Post_TOOL_DATA_START = 'Post_TOOL_DATA_START'
export const Post_TOOL_DATA_SUCCESS = 'Post_TOOL_DATA_SUCCESS'
export const Post_TOOL_DATA_FAILURE = 'Post_TOOL_DATA_FAILURE'

export const login = values => {
    return dispatch => {
        dispatch({ type: LOGIN_START })
        return axios
            .post(`https://use-m-tools-be.herokuapp.com/auth/login`, values)
                .then(res => {
                    console.log("res", res.data)
                    localStorage.setItem('token', res.data.token)
                    localStorage.setItem('id', res.data.id)
                    localStorage.setItem('first_name', res.data.first_name)
                    dispatch({ type: LOGIN_SUCCESS, payload: res.data})
                    return true;
                })
                .catch(err => {
                    dispatch({ type: LOGIN_FAILURE, payload: err.response})
                })
    }
}

export const register = values => {
    return dispatch => {
        dispatch({ type: REGISTER_START })
        return axios    
            .post(`https://use-m-tools-be.herokuapp.com/auth/register`, values)
                .then(res => {
                    console.log("res", res.data)
                    localStorage.setItem('token', res.data.token)
                    localStorage.setItem('id', res.data.id)
                    localStorage.setItem('first_name', res.data.first_name)
                    dispatch({ type: REGISTER_SUCCESS, payload: res.data})
                    return true;
                })
                .catch(err => {
                    dispatch({ type: REGISTER_FAILURE, payload: err.response})
                })
    }
}