import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
export default function TodoList({ todo, deleteTodo, toggleTodo }) {
  const listStyle = todo.status
    ? 'line-through hover:no-underline '
    : 'hover:line-through';
  return (
    <li className="text-white border-2 p-2 rounded-lg  flex justify-between items-center w-80 overflow-y-scroll no-scrollbar">
      <p
        className={`cursor-pointer ${listStyle} break-words w-60`}
        onClick={() => toggleTodo(todo.id)}
      >
        {todo.subject}
      </p>
      <button
        className="bg-red-600 w-8 h-8 rounded-lg hover:bg-red-500"
        onClick={() => deleteTodo(todo.id)}
      >
        <FontAwesomeIcon icon={faTrash} />
      </button>
    </li>
  );
}
