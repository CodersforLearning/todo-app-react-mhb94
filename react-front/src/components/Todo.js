import React from 'react'

const Todo = ({ todo }) => {
  return (
    <li className='todo'>
    {todo.content}
    </li>
  )
}

export default Todo
