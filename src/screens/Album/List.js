/* LIBS */
import React from 'react'
import styled from 'styled-components'
/* COMPONENTS */
import Card from './Card'

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`

const AlbumsList = ({ items }) => {
  return (
    <Container>
      {
        items.map(item => {
          return <Card key={item.id} album={item} />
        })
      }
    </Container>
  )
}

export default AlbumsList
