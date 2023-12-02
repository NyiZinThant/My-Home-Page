import Modal from './components/Modal';
import Clock from './sections/Clock';
import Customize from './sections/Customize';
import Menu from './sections/Menu';
import Search from './sections/Search';
import Todo from './sections/Todo';
function App() {
  return (
    <div className="w-full h-screen bg-slate-950 flex flex-col items-center justify-between">
      <div className="flex md:justify-between md:items-start justify-center mt-9 px-9 w-full">
        <Clock />
        <Search />
        <Menu />
      </div>
      <div className="flex md:justify-between md:items-end justify-center mb-9 px-9 w-full">
        <Customize />
        <Todo />
        <Customize />
      </div>
      <Modal />
    </div>
  );
}

export default App;
