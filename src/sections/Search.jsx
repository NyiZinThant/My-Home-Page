import { useState } from 'react';
import github from '../assets/github-icon-2048x1988-jzvzcf2t.png';
import linkedin from '../assets/LinkedIn_logo_initials.png';
import youtube from '../assets/Youtube_logo.png';
import facebook from '../assets/Facebook_Logo_2023.png';
import google from '../assets/google-logo-28FA7991AF-seeklogo.com.png';
import SearchInput from '../components/SearchInput';
import AnimatedCard from '../components/AnimatedCard';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Card from '../components/Card';
import ItemModal from '../components/ItemModal';

export default function Search() {
  const [isMOpen, setisMOpen] = useState(false);
  const toggleModal = () => setisMOpen(!isMOpen);
  const closeModal = () => setisMOpen(false);
  const [items, setItems] = useState([
    {
      image: github,
      name: 'GitHub',
      url: 'https://github.com/search?q=',
      symbol: '+',
      isIcon: false,
      status: true,
    },
    {
      image: linkedin,
      name: 'Linkedin',
      url: 'https://www.linkedin.com/search/results/all/?keywords=',
      symbol: '%20',
      isIcon: false,
      status: true,
    },
    {
      image: youtube,
      name: 'YouTube',
      url: 'https://www.youtube.com/results?search_query=',
      symbol: '+',
      isIcon: false,
      status: true,
    },
    {
      image: facebook,
      name: 'Facebook',
      url: 'https://www.facebook.com/search/top/?q=',
      symbol: '%20',
      isIcon: false,
      status: false,
    },
    {
      image: google,
      name: 'Google',
      url: 'https://www.google.com/search?q=',
      symbol: '+',
      isIcon: false,
      status: false,
    },
    {
      icon: faPlus,
      name: 'add',
      isIcon: true,
      status: true,
    },
  ]);
  const toggleItem = (item) =>
    setItems(
      items.map((i) => {
        if (i.name === item) i.status = !i.status;
        return i;
      })
    );
  const [cItem, setCItem] = useState({
    image: google,
    name: 'Google',
    url: 'https://www.google.com/search?q=',
    symbol: '+',
  });
  const changeCurrent = (item) => {
    setCItem(item);
  };
  // render 5 cards per row
  const renderCards = function () {
    const cardPerRow = 5;
    const numRows = Math.ceil(items.length / cardPerRow);
    let content = [];
    for (let i = 0; i < numRows; i++) {
      content.push(
        <div className="flex gap-5 justify-items-center" key={i}>
          {items
            .filter((item) => item.status)
            .slice(i * cardPerRow, (i + 1) * cardPerRow)
            .map((item, index) => {
              return item.isIcon ? (
                <Card key={index} item={item} toggleModal={toggleModal} />
              ) : (
                <AnimatedCard
                  key={index}
                  item={item}
                  changeCurrent={changeCurrent}
                />
              );
            })}
        </div>
      );
    }
    return (
      <div className="flex flex-col gap-5">{content.map((item) => item)}</div>
    );
  };
  return (
    <>
      <div className="flex flex-col gap-5">
        <SearchInput currentItem={cItem} />
        {renderCards()}
      </div>
      {isMOpen && items.length !== 0 && (
        <ItemModal
          items={items.filter((item) => !item.isIcon)}
          toggleItem={toggleItem}
          toggleModal={toggleModal}
          closeModal={closeModal}
        />
      )}
    </>
  );
}
