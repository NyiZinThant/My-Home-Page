import { useState } from 'react';
import TodoInput from '../components/TodoInput';
import TodoList from '../components/TodoList';

export default function Todo() {
  const [todos, setTodos] = useState([
    {
      id: 0,
      subject: 'Hello World',
      status: true,
    },
    {
      id: 1,
      subject: 'eat',
      status: false,
    },
    {
      id: 2,
      subject: 'sleep',
      status: false,
    },
    {
      id: 3,
      subject: 'code',
      status: true,
    },
    {
      id: 4,
      subject: 'sleepdkfkdfjdkjfkjdkfjdkfjkdjfkdfjdddd',
      status: false,
    },
  ]);
  const deleteTodo = function (id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const toggleTodo = function (id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) todo.status = !todo.status;
        return todo;
      })
    );
  };
  const addTodo = function (subject) {
    const id = todos[todos.length - 1] ? todos[todos.length - 1].id + 1 : 1;
    setTodos(() => [...todos, { id, subject, status: false }]);
  };
  return (
    <div className="flex flex-col w-auto gap-2">
      <div className=" max-h-64 overflow-y-scroll no-scrollbar">
        <ul className="flex flex-col gap-2">
          {todos.map((todo) => (
            <TodoList
              todo={todo}
              key={todo.id}
              deleteTodo={deleteTodo}
              toggleTodo={toggleTodo}
            />
          ))}
        </ul>
      </div>

      <TodoInput addTodo={addTodo} />
    </div>
  );
}
