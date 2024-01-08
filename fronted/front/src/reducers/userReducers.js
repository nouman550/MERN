import {
    ALL_USER_FAIL,
    ALL_USER_REQUEST,
    ALL_USER_SUCCESS,
    NEW_USER_FAIL,
    NEW_USER_REQUEST,
    NEW_USER_SUCCESS,
    LOAD_USER_FAIL,
    LOAD_USER_REQUEST,
    LOAD_USER_SUCCESS,
    LOGOUT_USER_FAIL,
    LOGOUT_USER_SUCCESS,
    UPDATE_PASSWORD_FAIL,
    UPDATE_PASSWORD_SUCCESS,
    UPDATE_PASSWORD_REQUEST,
    ADMIN_USERS_REQUEST,
    ADMIN_USERS_SUCCESS,
    ADMIN_USERS_FAIL,
    DELETE_USER_FAIL,
    DELETE_USER_SUCCESS,
    SINGLE_USER_REQUEST,
    SINGLE_USER_SUCCESS,
    SINGLE_USER_FAIL,
    CLEAR_ERRORS
}
    from "../constants/userConsants"

export const userReducers = (state = { user: {} }, action) => {

    switch (action.type) {
        case ALL_USER_REQUEST:
        case LOAD_USER_REQUEST:
            return {
                loading: true,
                isAuthenticated: false
            }
        case ALL_USER_SUCCESS:
        case LOAD_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                isAuthenticated: true,
                user: action.payload
            }
        case ALL_USER_FAIL:

            return {
                ...state,
                loading: false,
                isAuthenticated: false,
                user: null,
                error: action.payload
            }

        case LOAD_USER_FAIL:
            return {
                loading: false,
                isAuthenticated: false,
                user: null,
                error: action.payload
            }

        case CLEAR_ERRORS:

            return {
                ...state,
                error: null
            }

        default:
            return state
    }
}


export const newUserReducers = (state = { user: {} }, action) => {

    switch (action.type) {
        case NEW_USER_REQUEST:

            return {
                loading: true,
                isAuthenticated: false,
            }
        case NEW_USER_SUCCESS:

            return {
                ...state,
                loading: false,
                isAuthenticated: true,
                user: action.payload
            }
        case NEW_USER_FAIL:

            return {
                ...state,
                loading: false,
                error: action.payload,
                isAuthenticated: false,
                user: null
            }



        case CLEAR_ERRORS:

            return {
                ...state,
                error: null
            }

        default:
            return state
    }
}


export const logoutUserReducers = (state = { user: {} }, action) => {

    switch (action.type) {

        case LOGOUT_USER_SUCCESS:
        

            return {

                loading: false,
                user: null,
                isAuthenticated: false,

            }
        case LOGOUT_USER_FAIL:

            return {
                ...state,
                loading: false,
                error: action.payload,


            }



        case CLEAR_ERRORS:

            return {
                ...state,
                error: null
            }

        default:
            return state
    }
}




export const updatePasswordReducers = (state = { user: {} }, action) => {

    switch (action.type) {

        case UPDATE_PASSWORD_REQUEST:

            return {

                loading:true,
                updated: false,

            }





        case UPDATE_PASSWORD_SUCCESS:

            return {

                loading: false,
                user: action.payload,
                updated: true,
               

            }
        case UPDATE_PASSWORD_FAIL:

            return {
                ...state,
                loading: false,
                updated: false,
                error: action.payload,


            }



        case CLEAR_ERRORS:

            return {
                ...state,
                error: null
            }

        default:
            return state
    }
}


//show all users by admin


export const adminUserReducers = (state = { users:[] }, action) => {

    switch (action.type) {

        case ADMIN_USERS_REQUEST:

            return {

                loading:true,
                users:[]

            }
  
         case ADMIN_USERS_SUCCESS:

            return {
                
                loading: false,
                users: action.payload.users,
            }
        case ADMIN_USERS_FAIL:

            return {
             
                loading: false,
                error: action.payload,


            }



        case CLEAR_ERRORS:

            return {
                ...state,
                error: null
            }

        default:
            return state
    }
}



//delete a user by admin

export const deleteUserByAdmin = (state = { user: {} }, action) => {

    switch (action.type) {

        case DELETE_USER_SUCCESS:
        

            return {

                loading: false,
                user: {},
            }
        case DELETE_USER_FAIL:

            return {
                ...state,
                loading: false,
                error: action.payload,


            }



        case CLEAR_ERRORS:

            return {
                ...state,
                error: null
            }

        default:
            return state
    }
}




export const userDetailsReducers=(state={user:{}},action)=>{

    switch (action.type) {
        case SINGLE_USER_REQUEST:
           
        return{
            loading:true,
           ...state
        }
        case SINGLE_USER_SUCCESS:
           
            return{
                loading:false,
                user:action.payload.user
                
            }
            case SINGLE_USER_FAIL:
           
                return{
                    loading:false,
                    error:action.payload
                }
                                   
                case CLEAR_ERRORS:
           
                return{
                    ...state,
                    error:null
                }
                       
        default:
            return state
    }
}