import React from 'react'

const Todo = ({todo,removeTodo, toggleChange}) => {
  return (
    <tr>
    <td>
      <input type="checkbox" checked={todo.completed} onChange={() => toggleChange(todo)}/>
    </td>
      <td>
    {todo.content}
    </td>
      <td>
    <button onClick={() => removeTodo(todo)}>x</button>
    </td>
    </tr>
  )
}

export default Todo
