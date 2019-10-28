import axios from 'axios'

export const GET_TOOL_DATA_START = 'GET_TOOL_DATA_START'
export const GET_TOOL_DATA_SUCCESS = 'GET_TOOL_DATA_SUCCESS'
export const GET_TOOL_DATA_FAILURE = 'GET_TOOL_DATA_FAILURE'

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