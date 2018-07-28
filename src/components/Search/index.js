/* LIBS */
import React, { Component } from 'react'
import styled from 'styled-components'
/* CONFIG */
import { screens } from '../../theme/globalStyle'
/* COMPONENTS */
import Options from './Options'
import InputText from '../ui/InputText'
import Button from '../ui/Button'

const Form = styled.form`
  display: flex;
  flex-direction: row
  width: 100%;
  @media(max-width: ${screens.small}) {
    flex-wrap: wrap;
  }
`

class Search extends Component {
  static defaultProps = {
    onSubmit: () => {}
  }

  state = {
    option: 'artist',
    query: ''
  }

  handleChange = ({target: {name, value}}) =>{
    this.setState({[name]: value})
  }

  submit = (event) => {
    event.preventDefault()
    const { query, option } = this.state
    this.props.onSubmit({ query, option })
  }

  render() {
    const { query, option } = this.state
    return (
      <Form method={'POST'} onSubmit={(event) => this.submit(event)}>
        <Options
          onChange={this.handleChange}
          name={'option'}
          selected={option}/>
        <InputText
          onChange={this.handleChange}
          name={'query'}
          value={query}
          placeholder={'Search for Artists, Albums or Tracks...'} />
        <Button type={'submit'}>
          Search
        </Button>
      </Form>
    )
  }
}

export default Search
