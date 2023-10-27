import { clear } from "@testing-library/user-event/dist/clear"
import { ADD_TASK, CHANGE_MOD, DELETE_TASK, DONE_TASK, EDIT_TASK, CANCEL_MOD, RESERVE_ID, CLEAR_ID } from "./ActionTypes"
import { clear_id } from "./Actions"



const intialState = {
    tasksList : [
        {
            id : 1,
            decription : "task 1",
            isDone : false

        },
        {
            id : 2,
            decription : "Task 2",
            isDone : false

        }, {
            id : 3,
            decription : " Task 3",
            isDone : true

        }, {
            id : 4,
            decription : " Task 4",
            isDone : false

        }, {
            id : 5,
            decription : " Task 5",
            isDone : true

        }
    ],
    mod : false,
reserved_id : null,
reserved_description : ''
}


export const todoReducer = (state = intialState , {type , payload}) => {
switch(type){
        case DONE_TASK:
            return {
                ...state , tasksList : state.tasksList.map((el) =>  el.id === payload ? { ...el , isDone : !el.isDone} : el)
            }
        case DELETE_TASK:
                 state.tasksList.splice(payload , 1)
            return {
                ...state , tasksList: [...state.tasksList]
            }
        case ADD_TASK:
        return {
                ...state , tasksList: [...state.tasksList , payload]
        }
        case EDIT_TASK:
            return {
                ...state , tasksList : state.tasksList.map((el) => el.id === payload.id ? {...el , decription : payload.newTask} : el)
            }
        case CHANGE_MOD:
            return {
                ...state , mod : true , reserved_id : payload , reserved_description : state.tasksList.find((el) => el.id === payload).decription
            }
        case CANCEL_MOD:
            return {
                ...state , mod : false , reserved_id : null , reserved_description : ''
            }

        default:
            return state;
}

}
