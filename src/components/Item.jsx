export default function Item({ app, toggleModal }) {
  return (
    <a
      className="flex flex-col justify-center items-center gap-2 p-2 rounded-2xl hover:bg-slate-700 w-20 h-20"
      href={app.url}
    >
      <img src={app.image} alt={app.name} className="w-8" />
      <p className="text-white text-sm">{app.name}</p>
    </a>
  );
}
