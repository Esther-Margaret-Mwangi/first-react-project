import React from 'react'
import Todolist from './Todolist'

export default function App() {
  const[todos]=(['Todo 1', 'Todo 2'])
  return (
    <>
    <Todolist todos={todos}/>
    <input type ="text"/>
    <button>Add Todo</button>
    <button>Clear</button>
    <div>0 left to do</div>
    </>
  )
}

