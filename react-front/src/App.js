import React, { useState, useEffect } from 'react'
import todoService from './services/todos'
import Todo from './components/Todo'
import './index.css'

const App = () => {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    todoService
      .getAll()
      .then(initialTodos => {
        setTodos(initialTodos)
      })
  }, [])

    return (
    <div>
      <h1>Todos</h1>
      <ul>
    {todos.map(todo => {
      console.log(todo)
      return <Todo key = {todo.id} todo={todo}/>
    }
              )}
    </ul>
    </div>
  )
}

export default App
