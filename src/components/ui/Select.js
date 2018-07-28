import React from 'react'
import styled from 'styled-components'

const Content = styled.div`
  width: 100%;
  padding: 5px;
`

const SelectStyled = styled.select`
  background-color: #FFF;
  cursor: pointer;
  padding: 5px;
  width: 100%;
  border: 1px solid #CCC;
  border-radius: 3px;
  font-size: 16px;
`

const Select = (props) => {
  return (
    <Content>
      <SelectStyled {...props} />
    </Content>
  )
}

export default Select
