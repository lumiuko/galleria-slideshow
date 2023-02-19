import { useContext } from 'react'
import { SwitchTransition, CSSTransition } from 'react-transition-group'

import { AppContext } from '../context/AppContext'
import SlideshowItem from './SlideshowItem'
import Footer from './Footer'

export default function Slideshow() {
  const { state } = useContext(AppContext)

  return (
    <>
      <SwitchTransition>
        <CSSTransition key={state.slide} classNames="fade" timeout={400}>
          <SlideshowItem currentSlide={state.slide} />
        </CSSTransition>
      </SwitchTransition>
      <Footer />
    </>
  )
}
