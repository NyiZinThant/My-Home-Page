export default function AnimatedCard({ item, changeCurrent }) {
  return (
    <button
      className="border-2 rounded-2xl backdrop:blur-lg w-fit flex justify-center items-center bg-gray-900 hover:bg-gray-600 active:bg-gray-700 duration-100 group overflow-hidden p-3"
      onClick={() => changeCurrent(item)}
    >
      <img src={item.image} alt={item.name} className="w-11" />
      <div className="box-border max-w-0 opacity-0 md:group-hover:max-w-3xl md:group-hover:opacity-100 group-hover:max-w-0 duration-500 overflow-hidden md:group-hover:ml-3">
        <p className="text-white font-medium">{item.name}</p>
      </div>
    </button>
  );
}
