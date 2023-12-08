import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRef } from 'react';

export default function Modal({ toggleModal, closeModal, children }) {
  const modalRef = useRef();
  return (
    <div
      className="w-full h-full absolute bg-slate-800/70 backdrop-blur-sm flex justify-center items-center left-0 top-0 z-10"
      onClick={(e) => {
        if (e.target === modalRef.current) closeModal();
      }}
      ref={modalRef}
    >
      <div className="relative w-1/3">
        <div className="border-2 rounded-2xl bg-gray-900 p-9 flex flex-col gap-2 max-h-[70%] z-40 overflow-y-scroll scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
          {children}
        </div>
        <button
          className="absolute flex items-center justify-center p-2 font-bold border-2 border-white text-3xl z-40 -right-11 top-0 rounded-2xl w-10 h-10 hover:text-gray-900 hover:bg-white delay-75 text-white"
          onClick={() => toggleModal()}
        >
          <FontAwesomeIcon icon={faXmark} />
        </button>
      </div>
    </div>
  );
}
