import React from 'react'
import styled, { keyframes } from 'styled-components'

const Showbox = styled.div`
  background-color: rgba(0, 0, 0, .6);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 5%;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  z-index: 9999;
`

const Loader = styled.div`
  position: relative;
  margin: 0 auto;
  width: 100px;
  &:before {
    content: '';
    display: block;
    padding-top: 100%;
  }
`

const spin = keyframes`
  to { transform: rotate(360deg);}
`
const Spinner = styled.div`
  border: 8px solid rgba(200, 200, 200, 0.1);
  border-left-color: #6290C8;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  animation: ${spin} 1.2s linear infinite;
`

const ModalLoader = () => {
  return (
    <Showbox>
      <Loader>
        <Spinner />
      </Loader>
    </Showbox>
  )
}

export default ModalLoader