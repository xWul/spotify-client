import React from 'react'
import styled from 'styled-components'

const Alert = styled.div`
  display: flex;
  text-align: center;
  font-size: 14px;
  border: 2px solid;
  border-color: #BA2B2B;
  background-color: #DE6045;
  color: #FFF;
  padding: 7px;
  margin: 5px;
  border-radius: 2px;
  text-align: center;
  line-height: normal;
  opacity: 1;
  transition: all 0.3s ease;
  justify-content: center;
`

export default function (props) {
  return (
    <Alert {...props} />
  )
}
