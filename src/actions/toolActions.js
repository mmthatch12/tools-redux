import axios from 'axios'

export const GET_TOOL_DATA_START = 'GET_TOOL_DATA_START'
export const GET_TOOL_DATA_SUCCESS = 'GET_TOOL_DATA_SUCCESS'
export const GET_TOOL_DATA_FAILURE = 'GET_TOOL_DATA_FAILURE'

export const getInfo = () => {
    return dispatch => {
        dispatch({ type: GET_TOOL_DATA_START })
        axios.get()
            .then(res => {
                console.log("res", res.data.data)
                dispatch({ type: Get_Tool_Data_Success, payload: res.data.data})
            })
            .catch(err => {
                dispatch({ type:
                GET_Tool_Data_FAILURE,
                payload: err.response
                })
                
            })
    }
}