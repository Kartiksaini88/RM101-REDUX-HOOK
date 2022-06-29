

import { useReducer, useState } from 'react';


let reducer = (state ,{type , payload})=>{
  switch(type){
      case "ADD_TODO":{
          return {...state , alltodo:[...state.alltodo,payload]}
      }
      case "DELETE_TODO":{
        return{...state , alltodo:state.alltodo.filter((e)=>e.todo !== payload)}
      }
      default:{ 
          return state
      }
  }
}




function Todo() {

  let [todo , setodo] = useState("")
  let [state , allsetodo] = useReducer(reducer , {alltodo:[]})



 console.log(state.alltodo)
  return(
      <div>
      <input value={todo} type="text" placeholder="add your todo..." onChange={(e)=>{
          setodo(e.target.value)
      }}/>
      <br />
      <button onClick={()=>{allsetodo({type:"ADD_TODO" , payload:{todo,status:"false"}})}}>ADD</button>

      {state.alltodo.map((e)=>(<div><p>{e.todo}-{e.status}</p><button
      onClick={()=>{
        allsetodo({type:"DELETE_TODO", payload:e.todo})
      }}
      >Delete</button></div>))}
      </div>
  )
}

export default Todo;