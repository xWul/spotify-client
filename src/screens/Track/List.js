import React from 'react'
import styled from 'styled-components'

import { setFavorite, removeFavorite, getFavorites } from '../../utils'
import { convertMsToMinutes } from '../../utils'
import LikeButton from '../../components/LikeButton'

const Track = styled.li`
  font-family: 'Montserrat', sans-serif;
  background-color: #FFF;
  border-radius: 3px;
  margin: 10px;
  display: flex;
  img {
    width: 130px;
    height: 130px;
  }
`

const Info = styled.div`
  color: #333;
  display: flex;
  flex-wrap: wrap;
  padding: 5px;
  width: 100%;
  span {
    width: 100%;
  }
`

const Artists = styled.p`
  width: 100%;
  font-size: 12px; 
`

const Album = styled.span`
  color: #666;
  font-size: 12px; 
`
const Duration = styled.span`
  font-size: 12px;
`

const Title = styled.h3`
  font-size: 18px;
  padding: 7px 0; 
`
const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`

class Card extends React.Component {
  state = {isFavorite: false}

  componentDidMount() {
    const { id } = this.props.track
    const favorites = getFavorites()['tracks'] || []
    if (favorites.includes(id)) {
      this.setState({isFavorite: true})
    }
  }


  toggleFavorite = (id) => {
    this.setState(({ isFavorite }) => ({
      isFavorite: !isFavorite
    }), () => {
      const {isFavorite} = this.state
      isFavorite 
        ? setFavorite('tracks', id) 
        : removeFavorite('tracks', id)
    })
  }

  render() {
    const { track } = this.props
    const { isFavorite } = this.state
    return (
      <Track>
        <img src={track.album.images[0].url} alt={track.name} />
        <Info>
          <Header>
            <Title>{track.name}</Title>
            <LikeButton
              onClick={() => this.toggleFavorite(track.id)}
              isChecked={isFavorite}/>
          </Header>
          <Album>Album: {track.album.name}</Album>
          <Artists>{track.artists.map(artist => artist.name).join(', ')}</Artists>
          <Duration>Duration: {convertMsToMinutes(track.duration_ms)}</Duration>
        </Info>
      </Track>
    )
  }
}

const List = ({ items }) => {
  console.log(items)
  return (
    <ul>
      {items.map(track => {
        return <Card  key={track.id} track={track} />
      })}
    </ul>
  )
}

export default List
