import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function AddItem({ app, toggleModal }) {
  return (
    <button
      className="flex flex-col justify-center items-center gap-2 p-2 rounded-2xl hover:bg-slate-700 w-20 h-20"
      onClick={() => toggleModal()}
    >
      <FontAwesomeIcon icon={app.icon} className="text-white w-8 h-8" />
      <p className="text-white text-sm">{app.name}</p>
    </button>
  );
}
