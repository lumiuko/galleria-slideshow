import { useContext } from 'react'

import { AppContext } from '../context/AppContext'
import Item from './Item'
import data from '../data.json'

export default function Gallery() {
  const { dispatch } = useContext(AppContext)
  const columns = [[], [], [], []]

  function goToSlide(slide) {
    dispatch({ type: 'GOTO_SLIDE', payload: { slide } })
  }

  data.forEach((item, index) => {
    const { column } = item
    const element = <Item key={index} item={item} onClick={() => goToSlide(index)} />
    columns[column] = [...columns[column], element]
  })

  const columnElements = columns.map((column, index) => (
    <div
      key={index}
      className="flex flex-col gap-6 md:gap-10 animate"
      style={{ animationDelay: `${index * 200 + 250}ms` }}
    >
      {column}
    </div>
  ))

  return (
    <main className="xl:container box-content px-6 my-6 grid gap-6 md:gap-10 md:grid-cols-2 xl:grid-cols-4 items-start md:my-10">
      {columnElements}
    </main>
  )
}
