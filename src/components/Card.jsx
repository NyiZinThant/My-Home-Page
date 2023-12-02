import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Card({ item }) {
  return (
    <button className="border-2 rounded-2xl backdrop:blur-lg flex justify-center items-center bg-gray-900 hover:bg-gray-600 active:bg-gray-700 duration-100  overflow-hidden w-[4.5rem] h-[4.5rem]">
      <FontAwesomeIcon icon={item.icon} className="text-3xl text-white" />
    </button>
  );
}
