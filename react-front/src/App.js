import React, { useState, useEffect } from 'react'
import todoService from './services/todos'
import Todo from './components/Todo'
import './index.css'

const App = () => {
  const [todos, setTodos] = useState([])
  const [newTodo, setNewTodo] = useState('')

  useEffect(() => {
    todoService
      .getAll()
      .then(initialTodos => {
        setTodos(initialTodos)
      })
  }, [])

  const addTodo = (e) => {
    e.preventDefault()
    const todoObject = {
      content: newTodo,
      completed: false,
    }

    todoService
      .create(todoObject)
      .then(returnedTodo => {
        setTodos(todos.concat(returnedTodo))
        setNewTodo('')
    })
  }

  const handleTodoChange = (e) => {
    setNewTodo(e.target.value)
  }

    return (
    <div>
      <h1>Todos</h1>
      <ul>
    {todos.map(todo =>  <Todo key = {todo.id} todo={todo} /> )}
    </ul>

    <form onSubmit={addTodo}>
      <input
      value={newTodo}
      onChange={handleTodoChange}/>
      <button type="submit">save</button>
    </form>
    </div>
  )
}

export default App
