import React from 'react'
import styled from 'styled-components'

const Content = styled.div`
  width: 100%;
  padding: 5px;
`

const ButtonStyled = styled.button`
  cursor: pointer;
  background-color: #6290C8;
  color: #FFF;
  padding: 6px;
  width: 100%;
  border: 1px solid #CCC;
  border-radius: 3px;
  font-size: 16px;
  font-weight: bold; 
  text-align: center;
  text-transform: uppercase;
  &:hover {
    background-color: #376996;
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
