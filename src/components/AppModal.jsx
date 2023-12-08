import Card from './Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Modal from './Modal';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import preview from '../assets/preview.png';
import { useState } from 'react';
export default function AppModal({
  apps,
  toggleModal,
  closeModal,
  removeItem,
}) {
  const [previewImg, setPreviewImg] = useState({ preview, raw: '' });
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
          <div className="flex items-center gap-4">
            <p className="text-white">Add New App</p>
            <span className="border-b-2 w-max flex-grow h-0"></span>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <div className="flex gap-2 flex-col">
              <label className="text-white text-sm" htmlFor="name">
                App Name
              </label>
              <input
                type="text"
                id="name"
                className="border-2 rounded-xl p-2 h-fit bg-gray-900 text-white"
                placeholder="e.g. Facebook"
              />
              <label className="text-white text-sm" htmlFor="url">
                App Url
              </label>
              <input
                type="url"
                id="url"
                className="border-2 rounded-xl p-2 h-fit bg-gray-900 text-white"
                placeholder="e.g. www.facebook.com"
              />
              <label className="text-white text-sm" htmlFor="icon">
                App Icon
              </label>
              <img
                src={previewImg.preview}
                alt="preview image"
                width={75}
                height={75}
                className="p-2 border-2 rounded-xl"
              />
              <button className="p-2 font-bold bg-white rounded-lg hover:bg-gray-400">
                Load Image Online
              </button>
              <input
                type="file"
                id="icon"
                accept="image/*"
                className="text-white w-full file:font-bold file:rounded-lg file:border-none file:hover:bg-gray-400"
                onChange={(e) => {
                  if (e.target.files.length) {
                    setPreviewImg({
                      preview: URL.createObjectURL(e.target.files[0]),
                      raw: e.target.files[0],
                    });
                  }
                }}
              />
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="w-fit p-2 bg-white rounded-lg flex justify-center items-center hover:bg-gray-400 font-bold"
                >
                  Add
                </button>
              </div>
            </div>
          </form>
        </>
      }
    />
  );
}
