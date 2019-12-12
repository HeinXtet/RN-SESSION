import { GET_USER,
     GET_USER_ERROR,
      GET_USER_SUCCESS } from "../actions/userAction";

const initState = {
    isLoading : false,
    user : null,
    error :null
}

const userReducer = (state = initState,action) => {
    switch (action.type) {
        case GET_USER:
            return{
             ...state,
             isLoading : true,
             user: null,
             error : null
            }
            case GET_USER_ERROR :
                return{
                    ...state,
                    isLoading : false,
                    error : action.error
                }

                case GET_USER_SUCCESS : 
                    return {
                        ...state,
                        error : null,
                        isLoading : false,
                        user : action.payload
                    }
        default:
            return state
    }
}

export default userReducer;