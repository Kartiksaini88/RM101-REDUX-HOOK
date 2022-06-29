import { GETUSER_ERROR, GETUSER_LOADING, GETUSER_SUCCESS } from "./getuser-action-type"




export const oneuserinitstate = {
    loading:false,
    user:[],
    error:false,
    success:false
}

export const getuserbyIDreducer = (state = oneuserinitstate , {type , payload})=>{
    switch(type){
        case GETUSER_LOADING:{
            return {...oneuserinitstate , loading:true , error:false}
        }
        case GETUSER_SUCCESS:{
            return {...oneuserinitstate , user:[payload] ,success:true, loading:false , error:false}
        }
        case GETUSER_ERROR:{
            return {...oneuserinitstate , error:true , loading:false}
        }
        default:{
            return state
        }
    }
}