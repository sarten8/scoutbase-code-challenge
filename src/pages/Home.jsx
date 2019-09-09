import React from 'react'
import styled from 'styled-components'

const Home = styled.div`
  margin: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Title = styled.h1`
  margin: 0;
  font-family: 'Oswald', sans-serif;
  font-weight: 700;
  font-size: 72px;
  letter-spacing: -2px;
`

export default () => (
  <Home>
    <Title>WELCOME</Title>
  </Home>
)
