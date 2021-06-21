import React from 'react'

const Todo = ({todo,removeTodo}) => {
  return (
    <li className='todo'>
    {todo.content}
    <button onClick={() => removeTodo(todo)}>x</button>
    </li>
  )
}

export default Todo
