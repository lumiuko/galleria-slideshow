import { useContext } from 'react'
import { AppContext } from '../context/AppContext'

export default function Item({ item, id }) {
  const { dispatch } = useContext(AppContext)

  function goToSlide(slide) {
    dispatch({ type: 'GOTO_SLIDE', payload: { slide } })
  }

  return (
    <div className="relative transition-opacity text-left group">
      <img src={item.images.thumbnail} className="w-full" alt={item.name} />
      <div className="absolute left-0 top-0 z-10 h-full w-full group-hover:bg-card-overlay transition-colors"></div>
      <button
        onClick={() => goToSlide(id)}
        className="absolute left-0 top-0 z-30 h-full w-full"
        aria-label={`Go to slide ${item.name}`}
      ></button>
      <div className="absolute bottom-0 z-20 h-[170px] w-full bg-card flex flex-col justify-end p-8">
        <h5 className="text-white font-bold text-heading-2">{item.name}</h5>
        <div className="text-gray text-subhead-2 mt-[0.375rem]">{item.artist.name}</div>
      </div>
    </div>
  )
}
