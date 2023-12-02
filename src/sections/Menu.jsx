import { faFolder, faPlus } from '@fortawesome/free-solid-svg-icons';
import Button from '../components/Button';
import Item from '../components/Item';
import AddItem from '../components/AddItem';
import { useState } from 'react';
import github from '../assets/github-icon-2048x1988-jzvzcf2t.png';
import linkedin from '../assets/LinkedIn_logo_initials.png';
import youtube from '../assets/Youtube_logo.png';
import facebook from '../assets/Facebook_Logo_2023.png';
import google from '../assets/google-logo-28FA7991AF-seeklogo.com.png';
export default function Menu() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleIsModalOpen = () => setIsModalOpen(!isModalOpen);
  const closeModal = () => setIsModalOpen(false);
  const [apps, setApps] = useState([
    {
      image: github,
      name: 'GitHub',
      url: 'https://github.com/',
      isIcon: false,
    },
    {
      image: linkedin,
      name: 'Linkedin',
      url: 'https://www.linkedin.com',
      isIcon: false,
    },
    {
      image: youtube,
      name: 'YouTube',
      url: 'https://www.youtube.com/',
      isIcon: false,
    },
    {
      image: facebook,
      name: 'Facebook',
      url: 'https://www.facebook.com/',
      isIcon: false,
    },
    {
      image: google,
      name: 'Google',
      url: 'https://www.google.com/',
      isIcon: false,
    },
    {
      icon: faPlus,
      name: 'Add',
      isIcon: true,
    },
  ]);
  const renderApps = function () {
    const appPerRow = 3;
    const numRows = Math.ceil(apps.length / appPerRow);
    let content = [];
    for (let i = 0; i < numRows; i++) {
      content.push(
        <div className="flex gap-5 justify-items-center" key={i}>
          {apps.slice(i * appPerRow, (i + 1) * appPerRow).map((app, index) => {
            return app.isIcon ? (
              <AddItem app={app} key={index} />
            ) : (
              <Item app={app} key={index} />
            );
          })}
        </div>
      );
    }
    return (
      <div className="absolute flex flex-col backdrop:blur-lg border-2 rounded-3xl bg-gray-900 p-3 top-full mt-3">
        {content.map((item) => item)}
      </div>
    );
  };
  return (
    <div className="md:flex relative hidden justify-end w-1/4">
      <div className="flex items-center gap-2">
        <p className="text-white">More Apps!</p>
        <Button
          icon={faFolder}
          toggleIsModalOpen={toggleIsModalOpen}
          closeModal={closeModal}
        />
      </div>
      {isModalOpen ? renderApps() : ''}
    </div>
  );
}
