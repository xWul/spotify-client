/* LIBS */
import React, { Component } from 'react'
import styled from 'styled-components'
import { screens } from '../../theme/globalStyle'
import { setFavorite, removeFavorite, getFavorites } from '../../utils'
/* COMPONENTS */
import LikeButton from '../../components/LikeButton'
import Tracks from './Tracks'

const Card = styled.div`
  font-family: 'Montserrat', sans-serif;
  position: relative;
  background-color: #FFF;
  color: #333;
  flex-wrap: wrap;
  display: flex;
  margin: 1.5%;
  width: 30%;
  @media (max-width: ${screens.medium}) {
    width: 47%;
  }
  @media (max-width: ${screens.small}) {
    width: 100%;
    margin: 2% 0px;
  }
`
const Picture = styled.div`
  width: 100%;
  height: 200px;
  background: ${props => props.images[0] ? `url(${props.images[0].url})` : '#CCC'};
  background-position: center;
  background-size: cover;
  cursor: pointer;
`
const Title = styled.h3`
  font-size: 20px;
  padding: 7px 0; 
`

const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`

const CardInfo = styled.div`
  padding: 10px; 
  font-size: 14px;
  width: 100%;
  min-height: 140px;
`
const AvalLabel = styled.span`
  color: ${props => props.aval ? 'green' : '#CCC'};
`

const Artists = ({items}) => { 
  return items.length >= 3 
    ? <p>Various artists</p> 
    : <p>{items.map(artist => artist.name).join(', ')}</p>
}

const Availability = ({availabilities}) => {
  return availabilities.includes('BR') 
    ? <AvalLabel aval={true}>Available</AvalLabel> 
    : <AvalLabel aval={false}>Not Available</AvalLabel>
}

class AlbumCard extends Component {
  state = { 
    isFavorite: false,
    showTracks: false 
  }

  componentDidMount() {
    const { id } = this.props.album
    const favorites = getFavorites()['albums'] || []
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
        ? setFavorite('albums', id) 
        : removeFavorite('albums', id)
    })
  }

  toggleTracks = () => {
    this.setState(({ showTracks }) => ({
      showTracks: !showTracks
    }))
  }

  render() {
    const { id, name, images, artists, available_markets } = this.props.album
    const { isFavorite, showTracks } = this.state
    return (
      <Card>
        {showTracks && <Tracks id={id} onClose={this.toggleTracks} />}
        <Picture images={images} onClick={this.toggleTracks} />
        <CardInfo>
          <Header>
            <Title>{name}</Title>
            <LikeButton
              onClick={() => this.toggleFavorite(id)}
              isChecked={isFavorite}/>
          </Header>
          <Artists items={artists} />
          <Availability availabilities={available_markets}/>
        </CardInfo>
      </Card>
    )
  }
}

export default AlbumCard
