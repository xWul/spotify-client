/* LIBS */
import React, { Component } from 'react'
import styled from 'styled-components'
import { screens } from '../theme/globalStyle'
/* UTILS */
import { getQueryParams } from './utils'
import AUTH_URL from '../api/auth'
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
    const token = window.localStorage.getItem('token')
    if (!token) {
      const queryParams = getQueryParams(window.location.hash.substring(1))
      if (queryParams.access_token) {
        window.localStorage.setItem('token', queryParams.access_token)
      } else {
        window.location.href = AUTH_URL
      }
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
