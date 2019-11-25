import axios from 'axios'
import AxiosWithAuth from '../utils/AxiosWithAuth'

export const REGISTER_START = 'REGISTER_START'
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
export const REGISTER_FAILURE = 'REGISTER_FAILURE'
export const LOGIN_START = 'LOGIN_START'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'
export const GET_TOOL_DATA_START = 'GET_TOOL_DATA_START'
export const GET_TOOL_DATA_SUCCESS = 'GET_TOOL_DATA_SUCCESS'
export const GET_TOOL_DATA_FAILURE = 'GET_TOOL_DATA_FAILURE'
export const GET_ID_TOOL_DATA_START = 'GET_ID_TOOL_DATA_START'
export const GET_ID_TOOL_DATA_SUCCESS = 'GET_ID_TOOL_DATA_SUCCESS'
export const GET_ID_TOOL_DATA_FAILURE = 'GET_ID_TOOL_DATA_FAILURE'
export const GET_ID_REQ_TOOL_DATA_START = 'GET_ID_REQ_TOOL_DATA_START'
export const GET_ID_REQ_TOOL_DATA_SUCCESS = 'GET_ID_REQ_TOOL_DATA_SUCCESS'
export const GET_ID_REQ_TOOL_DATA_FAILURE = 'GET_ID_REQ_TOOL_DATA_FAILURE'
export const POST_TOOL_DATA_START = 'Post_TOOL_DATA_START'
export const POST_TOOL_DATA_SUCCESS = 'Post_TOOL_DATA_SUCCESS'
export const POST_TOOL_DATA_FAILURE = 'Post_TOOL_DATA_FAILURE'
export const PUT_TOOL_DATA_START = 'PUT_TOOL_DATA_START'
export const PUT_TOOL_DATA_SUCCESS = 'PUT_TOOL_DATA_SUCCESS'
export const PUT_TOOL_DATA_FAILURE = 'PUT_TOOL_DATA_FAILURE'

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

export const availableTools = () => {
    return dispatch => {
        dispatch({ type: GET_TOOL_DATA_START })
        return AxiosWithAuth()    
            .get(`https://use-m-tools-be.herokuapp.com/tools`)
                .then(res => {
                    console.log("res from availableTools action", res)
                    dispatch({ type: GET_TOOL_DATA_SUCCESS, payload: res.data})
                    return true;
                })
                .catch(err => {
                    dispatch({ type: GET_TOOL_DATA_FAILURE, payload: err.response})
                })
    }
}

export const idTools = () => {
    const id = localStorage.getItem('id')
    return dispatch => {
        dispatch({ type: GET_ID_TOOL_DATA_START })
        return AxiosWithAuth()    
            .get(`https://use-m-tools-be.herokuapp.com/tools/${id}`)
                .then(res => {
                    console.log('id from idTools', id)
                    console.log("res from idTools action", res)
                    dispatch({ type: GET_ID_TOOL_DATA_SUCCESS, payload: res.data})
                    return true;
                })
                .catch(err => {
                    dispatch({ type: GET_ID_TOOL_DATA_FAILURE, payload: err.response})
                })
    }
}

export const addTool = values => {
    return dispatch => {
        dispatch({ type: POST_TOOL_DATA_START })
        return AxiosWithAuth()    
            .post(`https://use-m-tools-be.herokuapp.com/tools/addtool`, values)
                .then(res => {
                    console.log("res from addTool", res.data)
                    dispatch({ type: POST_TOOL_DATA_SUCCESS, payload: res.data})
                    return true;
                })
                .catch(err => {
                    dispatch({ type: POST_TOOL_DATA_FAILURE, payload: err.response})
                })
    }
}

export const idReqTools = () => {
    const id = localStorage.getItem('id')
    return dispatch => {
        dispatch({ type: GET_ID_REQ_TOOL_DATA_START })
        return AxiosWithAuth()    
            .get(`https://use-m-tools-be.herokuapp.com/tools/requested/${id}`)
                .then(res => {
                    console.log("res from idReqTools action", res)
                    dispatch({ type: GET_ID_REQ_TOOL_DATA_SUCCESS, payload: res.data})
                    return true;
                })
                .catch(err => {
                    dispatch({ type: GET_ID_REQ_TOOL_DATA_FAILURE, payload: err.response})
                })
    }
}

export const editTool = values => {
    return dispatch => {
        dispatch({ type: PUT_TOOL_DATA_START })
        return AxiosWithAuth()    
            .post(`https://use-m-tools-be.herokuapp.com/tools/addtool`, values)
                .then(res => {
                    console.log("res from addTool", res.data)
                    dispatch({ type: PUT_TOOL_DATA_SUCCESS, payload: res.data})
                    return true;
                })
                .catch(err => {
                    dispatch({ type: PUT_TOOL_DATA_FAILURE, payload: err.response})
                })
    }
}