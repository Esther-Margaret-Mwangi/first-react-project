import React, {useState, useRef} from 'react'
import Todolist from './Todolist'

export default function App() {
  const[todos, setTodos]= useState([])
  const todoNameRef = useRef()
  const [count, setCount] = useState(0)
  

  function toggleTodo(id) {
    const newTodos = [...todos]
    const todo = newTodos.find(todo => todo.id === id)
    todo.complete = todo.complete
    setTodos(newTodos)
  }
 

function handleAddTodo(e) {
  const name= todoNameRef.current.value
  if (name === '') return
  setTodos(previousTodos => {
    setCount((count) => count + 1);
    return[...previousTodos, {id:{count}, name: name, complete:false}]
  })

  todoNameRef.current.value = null
}

function handleClearTodos(){
  const newTodos = todos.filter(todo => !todo.complete)
  setTodos(newTodos)
}

  return (
    <>
    <h1>My Todolist</h1>
    <input ref={todoNameRef} type ="text"/>
    <button onClick={handleAddTodo}>Add Todo</button>
    <button onClick={handleClearTodos}>Clear Completed Todo</button>
    <Todolist todos={todos} toggleTodo = {toggleTodo}/>
    <div>{todos.filter(todo =>!todo.complete).length} left to do</div>
    </>
  )
  }

