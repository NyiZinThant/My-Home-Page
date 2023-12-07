import { useRef } from 'react';

export default function Modal({ toggleModal, closeModal, children }) {
  const modalRef = useRef();
  return (
    <div
      className="w-full h-full absolute bg-slate-800/70 backdrop-blur-sm flex justify-center items-center left-0 top-0 z-50"
      onClick={(e) => {
        if (e.target === modalRef.current) closeModal();
      }}
      ref={modalRef}
    >
      <div className="border-2 rounded-2xl bg-gray-900 w-1/3 p-9 flex flex-col gap-2">
        {children}
        <div className="flex justify-end">
          <button
            className="p-2 mt-4 bg-white rounded-lg flex justify-center items-center hover:bg-gray-400 font-bold"
            onClick={() => toggleModal()}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
