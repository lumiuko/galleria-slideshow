import { useContext } from 'react'

import { AppContext } from '../context/AppContext'
import data from '../data.json'

export default function Footer() {
  const { state, dispatch } = useContext(AppContext)

  const progressWidth = ((state.slide + 1) / data.length) * 100
  const item = data[state.slide]

  function goNext() {
    dispatch({ type: 'NEXT_SLIDE' })
  }

  function goBack() {
    dispatch({ type: 'PREV_SLIDE' })
  }

  return (
    <footer className="mt-auto xl:container">
      <div className="bg-gray h-[1px]">
        <div className="bg-black h-full transition-all" style={{ width: `${progressWidth}%` }}></div>
      </div>
      <div className="px-6 py-4 flex justify-between items-center md:px-10 md:py-6">
        <div>
          <div className="font-bold mb-2 text-[0.875rem] md:text-heading-3">{item.name}</div>
          <div className="text-[0.625rem] md:text-subhead-2">{item.artist.name}</div>
        </div>
        <div className="flex gap-6 md:gap-10">
          <button
            aria-label="Go back"
            className="disabled:opacity-20 transition-opacity"
            onClick={goBack}
            disabled={state.slide < 1}
          >
            <img
              src="/assets/shared/icon-back-button.svg"
              className="w-[16px] md:w-[24px]"
              alt="Go back"
              aria-hidden="true"
            />
          </button>
          <button
            aria-label="Go next"
            className="disabled:opacity-20 transition-opacity"
            onClick={goNext}
            disabled={state.slide >= data.length - 1}
          >
            <img
              src="/assets/shared/icon-next-button.svg"
              className="w-[16px] md:w-[24px]"
              alt="Go next"
              aria-hidden="true"
            />
          </button>
        </div>
      </div>
    </footer>
  )
}
