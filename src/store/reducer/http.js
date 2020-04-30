import * as actionTypes from '../action/actionTypes';

const initialState={
     users:[],
     loading:false,
     user:[] ,
     text:'',
     error:false
}

const reducer =(state=initialState,action)=>{
    switch (action.type) {
        case actionTypes.GET_HTTP_START:
            return{
                ...state,
                loading:true
            }
            break;
        case actionTypes.GET_HTTP_USER:
            
            return{
                ...state,
                users:action.users,
                loading:false,
                error:false
            }
            
            break;
        case actionTypes.GET_HTTP_FAIL:
            return {
                ...state,     
               loading:false,
               error:true
            }
    
            break;


        case actionTypes.TEXT_VALUE:
            return{
                ...state,
                text:action.text,
               
            }
            break;
        case actionTypes.TEXT_VALUE_END:
            return{
                ...state,
                text:'',
                error:false
            }
            break;


        case actionTypes.USER_HTTP_START:
            return{
                ...state,
                loading:true
            }
        case actionTypes.USER_HTTP_SUCCESS:
            return{
                ...state,
                user:action.user,
                loading:false
            }
        case actionTypes.USER_HTTP_FAIL:
            return{
                ...state,
                loading:false
            }
        case actionTypes.CLEAR_USER:
            return{
                ...state,
                loading:true
            }
            break;
        case actionTypes.CLEAR_USER_END:
            return{
                ...state,
                users:[],
                loading:false
            }
            break;
     
        default:
            return state
    }
}

export default reducer