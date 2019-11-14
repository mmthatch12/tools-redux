import axios from 'axios'

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
        axios.post(`https://use-m-tools-be.herokuapp.com/auth/login`, values)
            .then(res => {
                console.log("res", res.data)
                localStorage.setItem("token", res.data.token)
                dispatch({ type: LOGIN_SUCCESS, payload: res.data})
            })
            .catch(err => {
                dispatch({ type: LOGIN_FAILURE, payload: err.response})
            })
    }
}