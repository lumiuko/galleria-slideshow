export default function Item({ item, onClick }) {
  return (
    <button className="relative transition-opacity text-left group" onClick={onClick}>
      <img src={item.images.thumbnail} className="w-full" alt={item.name} />
      <div className="absolute left-0 top-0 z-10 h-full w-full group-hover:bg-card-overlay transition-colors"></div>
      <div className="absolute bottom-0 z-20 h-[170px] w-full bg-card flex flex-col justify-end p-8">
        <h5 className="text-white font-bold text-heading-2">{item.name}</h5>
        <div className="text-gray text-subhead-2 mt-[0.375rem]">{item.artist.name}</div>
      </div>
    </button>
  )
}
