/* LIBS */
import React from 'react'
import styled from 'styled-components'
/* CONFIG */
import { screens } from '../../theme/globalStyle'
/* COMPONENTS */
import Select from '../ui/Select'

const Content = styled.div`
  width: 40%;
  @media(max-width: ${screens.small}) {
    width: 100%
  }
`

const Options = (props) => {
  return (
    <Content>
      <Select
        {...props}
        value={props.selected}>
        <option value={'artist'}>Artists</option>
        <option value={'album'}>Albums</option>
        <option value={'track'}>Tracks</option>
      </Select>
    </Content>
  )
}

Options.defaultProps = {
  selected: 'artist'
}

export default Options
