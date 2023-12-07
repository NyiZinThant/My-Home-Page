import Card from './Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Modal from './Modal';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

export default function AppModal({
  apps,
  toggleModal,
  closeModal,
  removeItem,
}) {
  return (
    <Modal
      toggleModal={toggleModal}
      closeModal={closeModal}
      children={
        <>
          {apps.length > 0 && (
            <div className="flex items-center gap-4">
              <p className="text-white">Avaliable Apps</p>
              <span className="border-b-2 w-max flex-grow h-0"></span>
            </div>
          )}
          <div className="flex gap-4">
            {apps.map((app, index) => (
              <div className="relative" key={index}>
                <Card item={app} toggleModal={toggleModal} />
                <button
                  className="rounded-full bg-red-600 w-5 h-5 flex justify-center items-center hover:bg-red-400 absolute -right-2 -top-2"
                  onClick={() => removeItem(app.name)}
                >
                  <FontAwesomeIcon
                    icon={faTrash}
                    className="text-white font-bold text-sm"
                  />
                </button>
              </div>
            ))}
          </div>
        </>
      }
    />
  );
}
