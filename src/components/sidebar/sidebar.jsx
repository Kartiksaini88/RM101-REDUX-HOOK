import axios from "axios"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { store } from "../redux/store"
import "./sidebar.css"
import { Link } from "react-router-dom"
import Todo from "../pages/todo/todo"

export const Sidebar = ()=>{
const {error,token,isauth} = useSelector((store)=>store.login)
   const {user} = useSelector((store)=>store.user)
   console.log(user)
    

    return(
        <div className="main">
        <div className="siderbar">
            <div className="userinfo_div">
            {user.length !=0?  
               <div>{user.map(e=><div><img className="userimg" src="https://media.istockphoto.com/vectors/user-icon-flat-isolated-on-white-background-user-symbol-vector-vector-id1300845620?k=20&m=1300845620&s=612x612&w=0&h=f4XTZDAv7NPuZbG0habSpU0sNgECM0X7nbKzTUta3n8=" alt="" />
               <div><p>{e.username}</p></div>
               <div><p>{e.email}</p></div>
               <div><p>{e.name}</p></div>
               <div><p>{e.mobile}</p></div>
  
              </div>)}</div> 
            :<button><Link to="/login">Login</Link></button>}
       
            <hr />
            </div>
           {user.length!=0?  <div className="logout-btn"><button ><Link to="/register">Logout</Link></button></div> : null}
            
        </div>
        <div className="todo_div">
        <Todo></Todo>
        </div>
     
        </div>
    )
}