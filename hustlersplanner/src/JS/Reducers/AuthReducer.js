import { CLEAR_FAIL_AUTH, CLEAR_SUCCESS_AUTH, CURRENT_USER, FAIL_AUTH, LOAD_AUTH, LOGIN_AUTH, LOGOUT_USER, REGISTER_AUTH } from "../ActionsTypes/AuthActionTypes";

const initialState={
    errors: null,
    loadTasks: false,
    success: null,
    user:null,
    isAuth:false,
}

export const AuthReducer = ( state = initialState , {type , payload} ) => {

    switch (type) {
        case LOAD_AUTH:
            return {
                ...state , load:true
            }
        case REGISTER_AUTH:
            return{
               ...state , success:payload.success , load: false , isAuth:true, user:payload.success.newUser
            }
        case LOGIN_AUTH:
            localStorage.setItem("token", payload.success.token);
            localStorage.setItem("user", JSON.stringify(payload.success.foundUser));
            return{
                ...state , success:payload.success , load: false , isAuth:true, user:payload.success.foundUser
            }
        case CURRENT_USER:
            return{
                ...state, user:payload.user , load:false , isAuth :true
            }
        case LOGOUT_USER:
            localStorage.removeItem("token");
            localStorage.removeItem("user");
            return{
                ...state , load:false , isAuth:false ,user:null , errors:null , success:{msg: "Successfully logged out"}
            }
        case FAIL_AUTH:
            return{
                ...state  , success:null , load:false , errors : payload.errors , isAuth:false , user:null
            }
        case CLEAR_FAIL_AUTH:
            return {
                ...state , errors:null
            }
        case CLEAR_SUCCESS_AUTH:
            return{
                ...state , success:null
            }
        default:
            return state;
    }

}
