import React from 'react'
import styled from 'styled-components'
import { screens } from '../../theme/globalStyle'

const Content = styled.div`
  padding: 5px;
  @media(max-width: ${screens.small}) {
    width: 100%;
  }  
`

const ButtonStyled = styled.button`
  cursor: pointer;
  background-color: #6290C8;
  color: #FFF;
  padding: 6px 50px;
  border: 1px solid #333;
  border-radius: 3px;
  font-size: 18px;
  font-weight: bold; 
  text-align: center;
  text-transform: uppercase;
  transition: all 0.3s ease;
  &:hover {
    background-color: #376996;
  }
  @media(max-width: ${screens.small}) {
    width: 100%;
  }  
`

const Button = (props) => {
  return (
    <Content>
      <ButtonStyled {...props}/>
    </Content>
  )
}

export default Button
