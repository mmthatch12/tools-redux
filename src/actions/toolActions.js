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

export const getInfo = () => {
    return dispatch => {
        dispatch({ type: GET_TOOL_DATA_START })
        axios.get(`https://www.balldontlie.io/api/v1/players`)
            .then(res => {
                console.log("res", res.data.data)
                dispatch({ type: GET_TOOL_DATA_SUCCESS, payload: res.data.data})
            })
            .catch(err => {
                dispatch({ type:
                GET_TOOL_DATA_FAILURE,
                payload: err.response
                })
            })
    }
}