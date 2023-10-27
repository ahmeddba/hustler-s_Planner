import { ADD_TASK, CANCEL_MOD, CHANGE_MOD, CLEAR_ID, DELETE_TASK, DONE_TASK, EDIT_TASK, RESERVE_ID } from "./ActionTypes"


export const done_task = id =>{
return {
    type : DONE_TASK,
    payload : id
}
}
export const delet_task = id => {
    return {
        type : DELETE_TASK,
        payload : id
    }
}
export const add_task = newTask => {
    return {
        type : ADD_TASK,
        payload : newTask
    }
}
export const edit_task = (id , newTask) => {
    return {
        type : EDIT_TASK,
        payload : {id , newTask}
    }
}
export const change_mod = (id) => {
    return{
        type : CHANGE_MOD,
        payload : id
    }
}
export const cancel_mod = () => {
    return{
        type : CANCEL_MOD
    }
}
