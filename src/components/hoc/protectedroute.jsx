import { useSelector } from "react-redux"
import { Navigate, useLocation } from "react-router"
import { store } from "../redux/store"


export const ProtectedRoute=({children})=>{
 let {isregister} = useSelector((store)=>store.register)
 let {isauth} = useSelector((store)=>store.login)
console.log(isauth)
 let token = localStorage.getItem("token")

  let location = useLocation()
 if(isauth){
    return children
 }
 else{
    return <Navigate to="/login" state={{from : location}} replace></Navigate>
 }

}