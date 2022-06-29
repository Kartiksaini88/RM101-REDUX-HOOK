import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router"
import { Link } from "react-router-dom"
import { getuserbyID } from "../../redux/getuser/getuser-action"
import { login } from "../../redux/loginreducer/login-action"
import { store } from "../../redux/store"



export const Login = () => {
 const [loginstate , setlogin] = useState({
    password:"",
    username:""
 })

 const navigate = useNavigate()
const {error,token,isauth} = useSelector((store)=>store.login)
// console.log(error)
// console.log(token)
// console.log(isauth)

const {success} = useSelector((store)=>store.user)
// console.log(success)
//  let login_r = store.getState()
// console.log(login_r)

 let dispatch = useDispatch()

 let handleLogin = (e)=>{
    const {name , value} = e.target

    setlogin({
        ...loginstate,
        [name]:value
    })
 }

 let handlelogin = (e)=>{
    e.preventDefault()

    if(loginstate.username && loginstate.username){
        dispatch(login(loginstate))
            dispatch(getuserbyID(loginstate.username,token))
            if(success==true){
                navigate("/")
            }
            
       
        
    }
 }

    return (
        <div>
            {error && <div><h4>User not found please register first</h4></div>}
            <form action="" onSubmit={handlelogin}>

                <input type="text" value={loginstate.username} onChange={handleLogin} required={true} placeholder="Username" name="username" />
                <br />
                <input type="password" value={loginstate.password} onChange={handleLogin} required={true} placeholder="password" name="password" />
                <br />
                <input type="submit" name="Submit" id="" placeholder="" value="Login"/>
                <button><Link to="/register">Register</Link></button>
            </form>
        </div>
    )
}