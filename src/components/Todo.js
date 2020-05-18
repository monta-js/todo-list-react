import React from 'react'

const  Todo= ({ todo, index, completeTodo, removeTodo,onClickEdit }) => {
  return (
      <li className="list-group-item d-flex flex-row justify-content-between">
        {todo}
        <div>
        <button onClick = {() => onClickEdit(index)} ><i class="fas fa-edit"></i></button>
        <button onClick={() => removeTodo(index)}><i class="fas fa-trash"></i></button>
        </div>
      </li>  
  );
}

export default Todo
