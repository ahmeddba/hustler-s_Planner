import axios from "axios";
import { CURRENT_USER, FAIL_AUTH, LOAD_AUTH, LOGIN_AUTH, REGISTER_AUTH , LOGOUT_USER, CLEAR_SUCCESS_AUTH, CLEAR_FAIL_AUTH } from "../ActionsTypes/AuthActionTypes";

export const register = (newUser) => async (dispatch) => {
        dispatch({ type: LOAD_AUTH });
    try {
        const result = await axios.post("/api/users/register", newUser);
        dispatch({ type: REGISTER_AUTH, payload: result.data });
    } catch (error) {
        dispatch({ type: FAIL_AUTH, payload: error.response.data });
    }
}


export const login = (user , navigate) => async (dispatch) => {
    dispatch({ type: LOAD_AUTH });
    try {
        const result = await axios.post("/api/users/login", user);
        dispatch({ type: LOGIN_AUTH, payload: result.data });
        navigate('/tasks');
    } catch (error) {
        dispatch({ type: FAIL_AUTH, payload: error.response.data });

    }
}

export const current = () => async (dispatch) => {
dispatch({ type: LOAD_AUTH })
try {
    const config = {
        headers : {authorization : localStorage.getItem("token")}
    }
    let result = await axios.get("/api/users/current", config);
    dispatch({ type: CURRENT_USER, payload: result.data });
} catch (error) {
dispatch({type: FAIL_AUTH , payload: error.response.data})
}
}

export const logout = () => async (dispatch) => {
    dispatch({ type: LOGOUT_USER });
}

export const clearSuccess = () => {
    return {
        type: CLEAR_SUCCESS_AUTH ,
    };
};

export const clearFail = () => {
    return {
        type: CLEAR_FAIL_AUTH ,
    };
}
