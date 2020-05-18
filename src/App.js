import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Todos from './components/Todos'
import Todo from './components/Todo'
const App = () => {
  const [todos, setTodos] = useState([]);
  const [value, setValue] = useState("");
  const [itemToEdit, setItemToEdit] = useState(null);
  const addTodo = text => {
    let newTodos = [...todos];
    if (itemToEdit || itemToEdit === 0) {
      newTodos[itemToEdit] = text;
    } else {
      newTodos = [...newTodos, text]
    }
    setTodos([...newTodos]);
    setItemToEdit(null)
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };
  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };
  const onClickEdit = index => {
    const findTodo = todos[index];
    setValue(findTodo)
    setItemToEdit(index)
  }
  return (
    <div className="app ">
      <div className="row justify-content-center">
      <div className="todo-list border border-primary col-6 col-md-4 ">
        <Todos addTodo={addTodo} onChangeValue={setValue} onSubmit={handleSubmit} value={value} />
        <ul className="list-group">
          {todos.map((todo, index) => (
            <Todo
              key={index}
              index={index}
              todo={todo}
              removeTodo={removeTodo}
              onClickEdit={onClickEdit}
            />
          ))}
        </ul>
      </div>
      </div>
    </div>
  );

}

export default App;
