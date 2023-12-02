import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDetectClickOutside } from 'react-detect-click-outside';

export default function Button({ icon, toggleIsModalOpen, closeModal }) {
  const buttonRef = useDetectClickOutside({ onTriggered: closeModal });
  return (
    <button
      className="border-2 rounded-2xl w-fit flex justify-center items-center bg-gray-900 hover:bg-gray-600 active:bg-gray-700 duration-100 group overflow-hidden p-3 h-fit"
      onClick={() => toggleIsModalOpen()}
      ref={buttonRef}
    >
      <FontAwesomeIcon icon={icon} className="text-white" />
    </button>
  );
}
