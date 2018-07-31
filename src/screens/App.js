/* LIBS */
import React, { Component } from 'react'
import styled from 'styled-components'
import { screens } from '../theme/globalStyle'
/* COMPONENTS */
import Search from '../components/Search'

const Container = styled.main`
  display: flex;
  align-items: center;
  min-height: 100vh;
  background-color: #1D1D1D;
  padding: 0 10%;
  @media(max-width: ${screens.small}) {
    padding: 0 5%;
  }
`

class App extends Component {
  componentDidMount() {
    const authURL = 'https://accounts.spotify.com/authorize?client_id=734facdc5d78467f87ff591c51e18345&response_type=token&redirect_uri=http://localhost:3000'
    let hashParams = {};
    let e, r = /([^&;=]+)=?([^&;]*)/g,
      q = window.location.hash.substring(1);
    // eslint-disable-next-line
    while (e = r.exec(q)) {
      hashParams[e[1]] = decodeURIComponent(e[2]);
    }

    if (window.localStorage.getItem('token')) {
      hashParams.access_token = window.localStorage.getItem('token')
    }
    if (!hashParams.access_token) {
      window.location.href = authURL;
    } else {
      window.localStorage.setItem('token', hashParams.access_token)
    }
  }

  render() {
    return (
      <Container>
        <Search />
      </Container>
    )
  }
}

export default App;
