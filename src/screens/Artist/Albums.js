/* LIBS */
import React, { Component } from 'react'
import styled from 'styled-components'
/* API */
import SpotifyWrapper from '../../api/index'
import { TOKEN } from '../../api/config'
const NUMBER_OF_ALBUMS = 5

const Content = styled.div`
  background-color: rgba(0, 0, 0, 0.5 );
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  border: 2px solid #FFF;
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 1;
  transition: all 0.3s ease;
  z-index: 110;
`

const Close = styled.span`
  cursor: pointer;
  display: block;
  padding: 10px;
  float: right;
  color: #FFF;
  width: 100%;
  text-align: right;
`
const List = styled.ul`
  width: 100%;
`
const Card = styled.li`
  display: flex;
  align-items: center;
  background-color: #FFF;
  margin: 5px;
  padding: 2px;
  border-radius: 3px;
  img {
    width: 45px;
    height: 45px;
  }
  p {
    padding: 0px 5px;
  }
`
const Load = styled.p`
  color: #FFF;
  text-align: center;
  width: 100%;
`

const Album = ({album: {name, images}}) => {
  return (
    <Card>
      <img src={images[0].url} alt={name} />
      <p>{name}</p>
    </Card>
  )
}

const AlbumsList = ({items}) => {
  return (
    <List>
      {
        items.map(album => {
          return <Album album={album} key={album.id}/>
        })
      }
    </List>
  )
}

const Loading = () => {
  return <Load>Loading...</Load>
}

class Albums extends Component {
  state = { albums: [], isLoading: false }

  componentDidMount() {
    const { id } = this.props
    this.setState({isLoading: true})
    const spotify = new SpotifyWrapper({
      token: TOKEN
    })
    spotify.artist.getAlbum(id)
      .then(response => {
        this.setState({ albums: response.items, isLoading: false })
      })
  }

  render() {
    const { onClose } = this.props
    const { albums, isLoading } = this.state
    return (
      <Content>
        <Close onClick={onClose}>Close</Close>
        {albums && <AlbumsList 
            items={albums.slice(0, NUMBER_OF_ALBUMS)} />}
        {isLoading && <Loading />}
      </Content>
    )
  }
}

export default Albums
