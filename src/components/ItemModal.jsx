import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Card from './Card';
import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons';
import Modal from './Modal';

export default function ItemModal({
  items,
  toggleItem,
  toggleModal,
  closeModal,
}) {
  const avaliableItems = items.filter((item) => item.status);
  const unavaliableItems = items.filter((item) => !item.status);
  return (
    <Modal
      toggleModal={toggleModal}
      closeModal={closeModal}
      children={
        <>
          {avaliableItems.length > 0 && (
            <div className="flex items-center gap-2">
              <p className="text-white">Avaliable Items</p>
              <span className="border-b-2 w-max flex-grow h-0"></span>
            </div>
          )}
          <div className="flex gap-4">
            {avaliableItems.map((item, index) => {
              return (
                <div className="relative" key={index}>
                  <Card item={item} />
                  <button
                    className="rounded-full bg-red-600 w-5 h-5 flex justify-center items-center hover:bg-red-400 absolute -right-2 -top-2"
                    onClick={() => toggleItem(item.name)}
                  >
                    <FontAwesomeIcon
                      icon={faXmark}
                      className="text-white font-bold"
                    />
                  </button>
                </div>
              );
            })}
          </div>
          {unavaliableItems.length > 0 && (
            <div className="flex items-center gap-2">
              <p className="text-white">Unavaliable Items</p>
              <span className="border-b-2 w-max flex-grow h-0"></span>
            </div>
          )}
          <div className="flex gap-4">
            {unavaliableItems.map((item, index) => {
              return (
                <div className="relative" key={index}>
                  <Card item={item} />
                  <button
                    className="rounded-full bg-green-600 w-5 h-5 flex justify-center items-center hover:bg-green-400 absolute -right-2 -top-2"
                    onClick={() => toggleItem(item.name)}
                  >
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="text-white font-bold"
                    />
                  </button>
                </div>
              );
            })}
          </div>
        </>
      }
    />
  );
}
