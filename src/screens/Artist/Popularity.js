import React from 'react'
import styled from 'styled-components'

const Label = styled.span`
  color: ${props => props.color ? props.color : '#333'};
  font-weight:  bold;
`

const Content = styled.p` 
  width: 100%;
`

const Popularity = ({ popularity }) => {
  let label = <Label>Underground</Label>
  if (popularity >= 80) {
    label = <Label color={'#FB5656'}>Hot</Label>
  } else if (popularity >= 60) {
    label = <Label color={'#EAEA00;'}>Cool</Label>
  } else if (popularity >= 30) {
    label = <Label color={'#7E7EE3'}>Regular</Label>
  }

  return <Content>{label}</Content>
}

export default Popularity
