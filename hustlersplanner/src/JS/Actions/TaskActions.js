import axios from "axios"
import {  CLEAR_FAIL_TASK, CLEAR_SUCCESS_TASK, GET_ONE_TASK, GET_TASKS_FAIL, GET_TASKS_LOAD, GET_TASKS_SUCCESS } from "../ActionsTypes/TaskActionTypes"


////////////////////////////
export const get_tasks = () => async (dispatch) =>  {
    dispatch({type : GET_TASKS_LOAD});
  try {
    const response = await axios.get('/api/tasks/allTasks');
    dispatch({type: GET_TASKS_SUCCESS , payload : response.data})
} catch (error) {
    dispatch({type: GET_TASKS_FAIL , payload : error.response.data})
    }

}

export const delete_task = (id) => async(dispatch) => {
    try {
        await axios.delete(`/api/tasks/task/${id}`);
        dispatch(get_tasks());

    } catch (error) {
        dispatch({type: GET_TASKS_FAIL , payload : error.response.data})
    }
}

export const  getOneTask = (id) => async(dispatch) => {
        dispatch({type: GET_TASKS_LOAD});
    try {
        const result = await axios.get(`/api/tasks/task/${id}`);
        dispatch({type: GET_ONE_TASK , payload : result.data})

    } catch (error) {
        dispatch({type: GET_TASKS_FAIL , payload : error.response.data})
    }
}

export const addTask = (newTask) => async(dispatch) => {
    try {
       const result =  await axios.post(`/api/tasks/addTask/`, newTask);
        dispatch({type: GET_TASKS_SUCCESS , payload : result.data})
    } catch (error) {
        dispatch({type: GET_TASKS_FAIL , payload : error.response.data})
    }
}

export const editTask = (id , newTask) => async(dispatch) => {
    try {
        await axios.put(`/api/tasks/task/${id}`, newTask);
        dispatch(get_tasks());
    } catch (error) {
        dispatch({type: GET_TASKS_FAIL , payload : error.response.data})
    }
}

export const clearFail = () => {
    return {
        type: CLEAR_FAIL_TASK ,
    };
}

export const clearSuccess = () => {
    return {
        type: CLEAR_SUCCESS_TASK ,
    };
}
