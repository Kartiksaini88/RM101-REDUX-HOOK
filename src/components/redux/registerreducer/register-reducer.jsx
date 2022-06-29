import { register } from "./register-action"
import { AUTH_SIGN_IN_ERROR, AUTH_SIGN_IN_LOADING, AUTH_SIGN_IN_SUCCESS } from "./register-action-type"





export const registerinitstate = {
  loading:false,
  error:false,
  message:"",
  isregister:false
  
}


export const registerreducer = (state=registerinitstate , {type,payload})=>{
    switch(type){
        case AUTH_SIGN_IN_LOADING:{
            return{...registerinitstate,loading:true,error:false}
        }
        case AUTH_SIGN_IN_SUCCESS:{
            return{...registerinitstate,message:payload,isregister:true, loading:false,error:false}

        }
        case AUTH_SIGN_IN_ERROR:{
            return{...registerinitstate,error:true,loading:false}
        }
        default:{
            return state
        }
    }
}