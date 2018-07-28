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
  render() {
    return (
      <Container>
        <Search />
      </Container>
    )
  }
}

export default App;
