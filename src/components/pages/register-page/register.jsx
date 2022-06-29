import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router"
import { register } from "../../redux/registerreducer/register-action"
import { store } from "../../redux/store"
import { Link } from "react-router-dom"



export const Register = ()=>{
 const [register_data , set_register_data] = useState({
    name:"",
    email:"",
    password:"",
    username:"",
    mobile:"",
    description:"",
 })

 const {error} = useSelector((store)=>store.register)
 console.log(error)

 const dispatch = useDispatch()
 const navigate = useNavigate()

 let handlechange =(e)=>{
    const {name , value} = e.target
    
    set_register_data({
        ...register_data,
        [name]:value
    })

 }
 const reducer = store.getState()
console.log(reducer)

 let handleregister = (e)=>{
    e.preventDefault()

    if(register_data.email && register_data.password){
          dispatch(register(register_data))
          navigate("/login")
    }
 }




    return(
        <div>
         {error && <div><h1>Oops!! Something went wrong .....  error : 404 page not found</h1></div>}
             <form action="" onSubmit={handleregister}>
               <input type="name" value={register_data.name} onChange={handlechange} required={true} placeholder="name" name="name"/>
               <br />
               <input type="email" value={register_data.email} onChange={handlechange} required={true} placeholder="email" name="email"/>
               <br />
               <input type="password" value={register_data.password} onChange={handlechange} required={true} placeholder="password" name="password"/>
               <br />
               <input type="username" value={register_data.username} onChange={handlechange} required={true}  placeholder="username" name="username"/>
               <br />
               <input type="number" value={register_data.mobile} onChange={handlechange} required={true}  placeholder="number" name="mobile"/>
               <br />
               <input type="desc" value={register_data.description} onChange={handlechange} required={true}  placeholder="Description" name="description"/>
               <br />
               <input type="submit" value="Register" placeholder="Submit"/>
               <button><Link to="/login">Login</Link></button>
           </form>
        </div>
    )
}