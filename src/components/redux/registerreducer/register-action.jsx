

import axios from "axios"
import { AUTH_SIGN_IN_ERROR, AUTH_SIGN_IN_LOADING, AUTH_SIGN_IN_SUCCESS } from "./register-action-type"



export const register = (cred) => (dispatch)=>{
    dispatch({type:AUTH_SIGN_IN_LOADING})

    axios.post("https://masai-api-mocker.herokuapp.com/auth/register",{
        name:cred.name,
        email:cred.email,
        password:cred.password,
        username:cred.username,
        mobile:cred.mobile,
        description:cred.description,
    }).then((r)=>{
        return dispatch({type:AUTH_SIGN_IN_SUCCESS,payload:r.data})
    }).catch(()=>{dispatch({type:AUTH_SIGN_IN_ERROR})})
}