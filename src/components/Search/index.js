/* LIBS */
import React, { Component } from 'react'
import styled from 'styled-components'
/* COMPONENTS */
import Form from './Form'
import Alert from '../ui/Alert'

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`

class Search extends Component {
  state = { errorMessage: false }

  redirect = ({ query, option }) =>{
    this.setState({errorMessage: false})

    if (query === '') {
      this.setState({errorMessage: 'Enter the name of an artist, album or track.'})
    } else {
      this.props.history.push(`/${option}/${encodeURI(query)}`)
    }
  }

  render() {
    const { errorMessage } = this.state
    return (
      <Container>
         {errorMessage && <Alert>{errorMessage}</Alert>}
        <Form onSubmit={(event) => this.redirect(event)} />
      </Container>
    )
  }
}

export default Search
