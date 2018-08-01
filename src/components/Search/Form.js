/* LIBS */
import React, { Component } from 'react'
import styled from 'styled-components'
/* CONFIG */
import { screens } from '../../theme/globalStyle'
/* COMPONENTS */
import Options from './Options'
import InputText from '../ui/InputText'
import Button from '../ui/Button'

const FormStyled = styled.form`
  display: flex;
  flex-direction: row
  width: 100%;
  @media(max-width: ${screens.small}) {
    flex-wrap: wrap;
  }
`

class Form extends Component {
  static defaultProps = {
    onSubmit: () => {},
    option: 'artist',
    query: ''
  }

  state = {
    option: '',
    query: ''
  }

  componentDidMount () {
    const { option, query } = this.props
    this.setState({option: option, query: query})
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
      <FormStyled 
        method={'POST'}
        onSubmit={(event) => this.submit(event)}>       
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
      </FormStyled>
    )
  }
}

export default Form
