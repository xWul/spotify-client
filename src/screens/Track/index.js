/* LIBS*/
import React, { Component } from 'react'
import styled from 'styled-components'
import { withRouter } from 'react-router-dom'
import { screens } from '../../theme/globalStyle'
/* API */
import SpotifyWrapper from '../../api/index'
import { TOKEN } from '../../api/config'
/* COMPONENTS */
import Alert from '../../components/Alert'
import Search from '../../components/Search'
import Loader from '../../components/Loader'
import List from './List'

const Container = styled.main`
  min-height: 100vh;
  background-color: #1D1D1D;
  padding: 40px 10%;
  @media(max-width: ${screens.small}) {
    padding: 40px 5% 100px 5%;
  }
`

class Track extends Component {
  state = {
    tracks: [],
    isLoading: false,
    errorMessage: false
  }

  componentDidMount() {
    const { query } = this.props.match.params
    this.fetchTracks(query)
  }

  componentWillReceiveProps(props) {
    const { query } = props.match.params
    this.fetchTracks(query)
  }

  fetchTracks = (query) => {
    this.setState({isLoading: true})
    const spotify = new SpotifyWrapper({
      token: TOKEN
    })
    spotify.search.tracks(query)
    .then(data => {
      this.setState({isLoading: false})
      if (data.error) {
        this.setState({errorMessage: data.error.message})
      }else {
        this.setState({tracks: data.tracks.items})
      }
    })
  }

  render() {
    const { query } = this.props.match.params
    const { tracks, isLoading, errorMessage } = this.state
    return (
      <Container>
        {isLoading && <Loader/> }
        <Search option={'track'} query={query} />
        {errorMessage && <Alert>{errorMessage}</Alert>}
        {tracks.length > 0 ? <List items={tracks} /> : null}
      </Container>
    )
  }
}


export default withRouter(Track)
