import { GET_TASKS_LOAD, GET_TASKS_SUCCESS , GET_ONE_TASK, GET_TASKS_FAIL, CLEAR_SUCCESS_TASK, CLEAR_FAIL_TASK } from "../ActionsTypes/TaskActionTypes"



const intialState = {
    tasksList : [],
    errors: null,
    loadTasks: false,
    successTasks: null,
    oneTask : {}
}


export const todoReducer = (state = intialState , {type , payload}) => {
switch(type){
    case GET_TASKS_LOAD:
        return {
            ...state , loadTasks : true
        }
    case GET_TASKS_SUCCESS:
        return {
           ...state ,
           loadTasks : false ,
           tasksList : payload.success.tasks || [],
           successTasks : payload.success ? payload.success.msg : null
               }
    case GET_ONE_TASK:
        return {
            ...state , loadTasks:false ,oneTask:payload.success.task
        }
       case GET_TASKS_FAIL:
        return {
            ...state , loadTasks : false , errors : payload.errors , oneTask : {}
        }
        case CLEAR_SUCCESS_TASK:
        return {
            ...state , successTasks : null
        }
        case CLEAR_FAIL_TASK:
            return {
                ...state , errors : null
            }
        default:
            return state;
}

}
