/* LIBS */
import React, { Component } from 'react'
import styled from 'styled-components'
import { screens } from '../../theme/globalStyle'
import { setFavorite, removeFavorite, getFavorites } from '../../utils'
/* COMPONENTS */
import LikeButton from '../../components/LikeButton'
import Popularity from './Popularity'
import Albums from './Albums'

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

const Genders = styled.p` 
  font-size: 14px;
  color: #666;
  width: 100%;
  padding: 5px 0; 
`

const CardInfo = styled.div`
  padding: 10px; 
  font-size: 14px;
  width: 100%;
  min-height: 140px;
`

const genresList = (items) => {
  return items.map(genre => genre).join(', ')
}

class ArtistCard extends Component {
  state = { 
    isFavorite: false,
    showAlbums: false 
  }

  componentDidMount() {
    const { id } = this.props.artist
    const favorites = getFavorites()['artist'] || []
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
        ? setFavorite('artist', id) 
        : removeFavorite('artist', id)
    })
  }

  toggleAlbums = () => {
    this.setState(({ showAlbums }) => ({
      showAlbums: !showAlbums
    }))
  }

  render() {
    const { id, name, images, genres, popularity } = this.props.artist
    const { isFavorite, showAlbums } = this.state
    return (
      <Card>
        {showAlbums && <Albums id={id} onClose={this.toggleAlbums} />}
        <Picture images={images} onClick={this.toggleAlbums} />
        <CardInfo>
          <Header>
            <Title>{name}</Title>
            <LikeButton
              onClick={() => this.toggleFavorite(id)}
              isChecked={isFavorite}/>
          </Header>
          <Popularity popularity={popularity} />
          <Genders>{genresList(genres)}</Genders>
        </CardInfo>
      </Card>
    )
  }
}

export default ArtistCard
