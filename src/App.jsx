import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Modal from './components/Modal';
import Clock from './sections/Clock';
import Customize from './sections/Customize';
import Menu from './sections/Menu';
import Search from './sections/Search';
import Todo from './sections/Todo';
import { faPaperclip } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
function App() {
  const [isListOpen, setIsListOpen] = useState(false);
  const toggleList = () => setIsListOpen(!isListOpen);
  return (
    <div className="w-full h-screen bg-slate-950 flex flex-col items-center justify-between">
      <div className="flex md:justify-between md:items-start justify-center mt-9 px-9 w-full">
        <Clock />
        <Search />
        <Menu />
      </div>
      <div className="flex md:justify-between md:items-end justify-center mb-9 px-9 w-full">
        <Customize />
        <Customize />

        <Todo />
      </div>
    </div>
  );
}

export default App;
