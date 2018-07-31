/* LIBS */
import React from 'react'
/* COMPONENTS */
import Card from './Card'

const List = ({ items }) => {
  return (
    <ul>
      {items.map(track => {
        return <Card  key={track.id} track={track} />
      })}
    </ul>
  )
}

export default List
