import React from 'react'
import styled from 'styled-components'

const Content = styled.div`
  width: 100%;
  padding: 5px;
`

const Input = styled.input`
  background-color: #FFF;
  padding: 6px;
  width: 100%;
  border: 1px solid #CCC;
  border-radius: 3px;
  font-size: 16px;
`

const InputText = (props) => {
  return (
    <Content>
      <Input type={'text'} {...props}/>
    </Content>
  )
}

export default InputText
