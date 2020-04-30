import * as actionTypes from './actionTypes';
import axios from 'axios'


export const getHttpStart=()=>{
    return{
        type:actionTypes.GET_HTTP_START,
  
    
    }
}
export const getHttpreq=(users,text)=>{
    return{
        type:actionTypes.GET_HTTP_USER,
        users:users,
        text:text
    
    }
}
export const getHttpFail=(error)=>{
    return{
        type:actionTypes.GET_HTTP_FAIL,
        error:error
    }
}


export const GetUserhttp=(text)=>{
    return dispatch=>{
            dispatch(getHttpStart())
            axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
            .then(response=>dispatch(getHttpreq( response.data.items))) 
            .catch(error=>dispatch(getHttpFail(error)))
    }
}




export const Text=(e)=>{
    return{
        type:actionTypes.TEXT_VALUE,
        text:e.target.value
    }
}
export const TextEnd=(text)=>{
    return{
        type:actionTypes.TEXT_VALUE_END,
        text:text
    }
}




export const userReqStart=()=>{
    return{
        type:actionTypes.USER_HTTP_START
    }
}

export const userReqSuccess=(user)=>{
    return{
        type:actionTypes.USER_HTTP_SUCCESS,
        user:user
    }
}


export const userReqFail=()=>{
    return{
        type:actionTypes.USER_HTTP_FAIL
    }
}
export const userReqFainl=(username)=>{
    return dispatch=>{
        dispatch(userReqStart())
     axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
     .then(response=>dispatch(userReqSuccess(response.data)))
     .catch(err=>dispatch(userReqFail(err)))
        
    }
}




export const Clearuser=()=>{
    return{
        type:actionTypes.CLEAR_USER
    }
}



export const Clearuserend=(users)=>{
    return{
        type:actionTypes.CLEAR_USER_END,
        users:users
    }
}


export const clear=(users)=>{
    return dispatch=>{
        dispatch(Clearuser())
        dispatch(Clearuserend(users))
    }
}



