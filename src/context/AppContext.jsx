import { createContext, useReducer } from 'react'

const AppContext = createContext()

const initialState = {
  slide: 0,
  isSlideshow: false
}

function reducer(state, action) {
  switch (action.type) {
    case 'TOGGLE_SLIDESHOW':
      return {
        slide: 0,
        isSlideshow: !state.isSlideshow
      }
    case 'GOTO_SLIDE':
      return {
        isSlideshow: true,
        slide: action.payload.slide
      }
    case 'NEXT_SLIDE':
      return {
        ...state,
        slide: state.slide + 1
      }
    case 'PREV_SLIDE':
      return {
        ...state,
        slide: state.slide - 1
      }
    default:
      return state
  }
}

function AppProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState)
  return <AppContext.Provider value={{ state, dispatch }}>{props.children}</AppContext.Provider>
}

export { AppContext, AppProvider }
