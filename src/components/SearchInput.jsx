import { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
export default function SearchInput({ currentItem }) {
  const searchRef = useRef();
  return (
    <form
      className="flex flex-row gap-2 border-2 rounded-2xl p-3 h-fit bg-gray-900"
      onSubmit={(e) => {
        e.preventDefault();
        let searchValue = searchRef.current.value
          .trim()
          .replace(' ', currentItem.symbol);
        window.location.href = currentItem.url + searchValue;
      }}
    >
      <img src={currentItem.image} className="h-10" />
      <input
        type="text"
        ref={searchRef}
        placeholder="Search"
        className="w-100 h-10 p-3 text-white bg-transparent focus:border-none focus:outline-none w-full"
      />
      <button
        type="submit"
        className="w-12 p-2 bg-white rounded-lg flex justify-center items-center hover:bg-gray-400"
      >
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </button>
    </form>
  );
}
