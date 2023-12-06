import Card from './Card';
import Modal from './Modal';

export default function AppModal({ apps, toggleModal, closeModal }) {
  return (
    <Modal
      toggleModal={toggleModal}
      closeModal={closeModal}
      children={
        <>
          {apps.length > 0 ? (
            <div className="flex items-center gap-2">
              <p className="text-white">Avaliable Apps</p>
              <span className="border-b-2 w-max flex-grow h-0"></span>
            </div>
          ) : (
            ''
          )}
          <div className="flex gap-2">
            {apps.map((app, index) => (
              <Card item={app} toggleModal={toggleModal} key={index} />
            ))}
          </div>
        </>
      }
    />
  );
}
