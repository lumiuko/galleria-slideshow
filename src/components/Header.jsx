import { useContext } from 'react'
import { AppContext } from '../context/AppContext'

export default function Header(props) {
  const { state, dispatch } = useContext(AppContext)

  function toggleSlideshow() {
    dispatch({ type: 'TOGGLE_SLIDESHOW' })
  }

  return (
    <header className="xl:container box-content xl:px-10">
      <div className="flex border-b-[1px] border-b-gray justify-between items-center px-6 xl:px-0 py-6">
        <img src="/assets/shared/logo.svg" alt="Logo" className="h-[32px]" />
        <button
          className="uppercase text-btn-sm text-dark-gray tracking-btn-sm font-bold leading-deafult md:tracking-btn-lg md:text-btn-lg hover:text-black transition-colors"
          onClick={toggleSlideshow}
        >
          {state.isSlideshow ? 'Stop' : 'Start'} slideshow
        </button>
      </div>
    </header>
  )
}
