import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useRef, useState } from 'react';
export default function TodoInput({ addTodo }) {
  const todoRef = useRef();
  const [count, setCount] = useState(0);
  return (
    <form
      className="border-2 border-b-white p-2 rounded-lg flex justify-between items-center"
      onSubmit={(e) => {
        e.preventDefault();
        const todo = todoRef.current.value.trim();
        if (todo === '' || count > 35) return;
        addTodo(todo);
        todoRef.current.value = '';
        todoRef.current.focus();
        setCount(todoRef.current.value.length);
      }}
    >
      <input
        type="text"
        className="bg-transparent focus:border-none focus:outline-none text-white flex-grow"
        ref={todoRef}
        onChange={() => {
          setCount(todoRef.current.value.length);
        }}
      />
      <p
        className={
          'mx-2 text-sm ' + (count > 35 ? 'text-red-600' : 'text-white')
        }
      >
        {count + '/35'}
      </p>
      <button
        type="submit"
        className="text-white font-bold text-lg hover:text-gray-600"
      >
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </form>
  );
}
