import React, { Component } from 'react'
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

class Card extends Component {
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
    const { isFavorite } = this.state
    const { track } = this.props
    const { id, name, album, artists, duration_ms } = track
    return (
      <Track>
        <img src={album.images[0].url} alt={name} />
        <Info>
          <Header>
            <Title>{name}</Title>
            <LikeButton
              onClick={() => this.toggleFavorite(id)}
              isChecked={isFavorite}/>
          </Header>
          <Album>Album: {album.name}</Album>
          <Artists>{artists.map(artist => artist.name).join(', ')}</Artists>
          <Duration>Duration: {convertMsToMinutes(duration_ms)}</Duration>
        </Info>
      </Track>
    )
  }
}

export default Card
