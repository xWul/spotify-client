/* LIBS */
import React, { Component } from 'react'
import styled from 'styled-components'
/* API */
import SpotifyWrapper from '../../api/index'
import { TOKEN } from '../../api/config'

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
  z-index: 120;
`
const List = styled.ul`
  width: 100%;
  height: 89%;
  position: absolute;
  overflow: auto;
  margin-top: 8%;
  background-color: #FFF;
`
const Card = styled.li`
  display: flex;
  align-items: center;
  padding: 5px;
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

const Track = ({ track }) => {
  const { name } = track
  return (
    <Card>
      <p>{name}</p>
    </Card>
  )
}

const TracksList = ({ tracks }) => {
  return (
    tracks.items
      ? <List>
        {
          tracks.items.map(track => {
            return <Track track={track} key={track.id} />
          })
        }
      </List>
      : <Load>No tracks found.</Load>
  )
}

const Loading = () => {
  return <Load>Loading...</Load>
}

class Tracks extends Component {
  state = { tracks: [], isLoading: false }

  componentDidMount() {
    const { id } = this.props
    this.setState({ isLoading: true })
    const spotify = new SpotifyWrapper({
      token: TOKEN
    })
    spotify.album.getAlbum(id)
      .then(response => {
        this.setState({ tracks: response.tracks, isLoading: false })
      })
  }

  render() {
    const { onClose } = this.props
    const { tracks, isLoading } = this.state
    return (
      <Content>
        <Close onClick={onClose}>Close</Close>
        {tracks && <TracksList
          tracks={tracks} />}
        {isLoading && <Loading />}
      </Content>
    )
  }
}

export default Tracks
