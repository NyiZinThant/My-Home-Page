import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Button({ icon, togglePopup }) {
  return (
    <button
      className="border-2 rounded-2xl w-fit flex justify-center items-center bg-gray-900 hover:bg-gray-600 active:bg-gray-700 duration-100 group overflow-hidden p-3 h-fit"
      onClick={() => togglePopup()}
    >
      <FontAwesomeIcon icon={icon} className="text-white" />
    </button>
  );
}
