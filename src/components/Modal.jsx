import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRef } from 'react';

export default function Modal({ closeModal, children }) {
  const modalRef = useRef();
  return (
    <div
      className="w-full h-full absolute bg-slate-800/70 backdrop-blur-sm flex justify-center items-center left-0 top-0 z-10"
      onClick={(e) => {
        if (e.target === modalRef.current) closeModal();
      }}
      ref={modalRef}
    >
      <div className="relative mt-4 mx-auto border-2 rounded-2xl bg-gray-900 p-9 flex flex-col gap-2 max-h-[70%] max-w-[40%] z-0 overflow-y-scroll scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white scrollbar-thumb-rounded-full scrollbar-track-rounded-full overflow-x-hidden">
        {children}
        <button
          className="absolute flex items-center justify-center p-2 font-bold text-3xl z-40 rounded-2xl w-10 h-10 hover:text-gray-500 delay-75 text-white top-0 -right-2"
          onClick={() => closeModal()}
        >
          <FontAwesomeIcon icon={faXmark} />
        </button>
      </div>
    </div>
  );
}
