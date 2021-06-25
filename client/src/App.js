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

  const removeTodo = (todo) => {
    console.log('removetodo', todo)
    if (window.confirm(`Do you want to remove ${todo.content}?`)) {
      todoService.remove(todo)
                 .then(setTodos(todos.filter(t => t.id !== todo.id)))
                 .catch(error => {window.alert(
                   `The todo "${todo.content} was already removed from the server"`
                 )})
    }
  }

  const toggleCompletion = todo => {
    const changedTodo = { ...todo, "completed": !todo.completed}
    console.log('changedTodo', changedTodo)
    todoService.change(changedTodo)
               .then(setTodos(todos.map(todo => todo.id !== changedTodo.id ? todo : changedTodo))
               )
  }

    return (
      <section>
      <h1>Todos</h1>
        <form onSubmit={addTodo}>
      <input
      value={newTodo}
      onChange={handleTodoChange}/>
      <button type="submit">save</button>
    </form>
      <table>
        <tbody>
    {todos.map(todo => <Todo key = {todo.id} todo={todo} removeTodo={removeTodo} toggleChange={toggleCompletion}/> )}
</tbody>
      </table>
      </section>
  )
}

export default App
