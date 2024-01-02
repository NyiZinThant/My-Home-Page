import Card from './Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Modal from './Modal';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import preview from '../assets/preview.png';
import { useRef, useState } from 'react';
export default function AppModal({ apps, closeModal, removeItem, addApp }) {
  const [nameError, setNameError] = useState();
  const [urlError, setUrlError] = useState();
  const [imgError, setImgError] = useState();
  const nameRef = useRef();
  const urlRef = useRef();
  const imgRef = useRef();
  const [previewImg, setPreviewImg] = useState({ preview, raw: '' });

  return (
    <Modal
      closeModal={closeModal}
      children={
        <>
          {apps.length > 0 && (
            <div className="flex items-center gap-4">
              <p className="text-white">Avaliable Apps</p>
              <span className="border-b-2 w-max flex-grow h-0"></span>
            </div>
          )}
          <div className="flex gap-4 flex-wrap">
            {apps.map((app, index) => (
              <div className="relative" key={index}>
                <Card item={app} toggleModal={() => {}} />
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
              if (nameRef.current.value.trim().length === 0) {
                return setNameError('Name is empty');
              }
              if (urlRef.current.value.trim().length === 0) {
                setNameError();
                return setUrlError('Url is empty');
              }
              if (imgRef.current.value.length === 0) {
                setNameError();
                setUrlError();
                return setImgError('No image found');
              }
              setImgError();
              addApp({
                image: previewImg.preview,
                name: nameRef.current.value.trim(),
                url: urlRef.current.value,
                isIcon: false,
              });
            }}
          >
            <div className="flex gap-2 flex-col">
              <label className="text-sm text-white" htmlFor="name">
                App Name
                {nameError && (
                  <span className="text-red-600"> - {nameError}</span>
                )}
              </label>
              <input
                type="text"
                id="name"
                className={`text-white border-2 rounded-xl p-2 h-fit bg-gray-900 text-whit focus-visible:outline-none
                  ${nameError ? 'border-red-600' : 'border-white'}`}
                placeholder="e.g. Facebook"
                ref={nameRef}
              />
              <label className="text-white text-sm" htmlFor="url">
                App Url
                {urlError && (
                  <span className="text-red-600"> - {urlError}</span>
                )}
              </label>
              <input
                type="url"
                id="url"
                className={`text-white border-2 rounded-xl p-2 h-fit bg-gray-900 text-whit focus-visible:outline-none
                ${urlError ? 'border-red-600' : 'border-white'}`}
                placeholder="e.g. www.facebook.com"
                ref={urlRef}
              />
              <label className="text-white text-sm" htmlFor="icon">
                App Icon
                {imgError && (
                  <span className="text-red-600"> - {imgError}</span>
                )}
              </label>
              <img
                src={previewImg.preview}
                alt="preview image"
                width={75}
                height={75}
                className={`p-2 border-2 rounded-xl ${
                  urlError ? 'border-red-600' : 'border-white'
                }`}
              />
              <button
                className="p-2 font-bold bg-white rounded-lg hover:bg-gray-400"
                type="button"
                onClick={() => {}}
              >
                Load Image Online
              </button>
              <input
                type="file"
                id="icon"
                accept="image/*"
                ref={imgRef}
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
