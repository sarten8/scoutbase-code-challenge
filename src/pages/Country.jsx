import React, { Fragment } from 'react'
import styled from 'styled-components'
import { useQuery } from '@apollo/react-hooks'
import { GET_COUNTRY } from '../graphql/queries'
import Loading from '../components/Loading'

const Country = styled.div`
  margin: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

const Title = styled.h1`
  margin: 5px 0;
  font-family: 'Oswald', sans-serif;
  font-weight: 700;
  font-size: 36px;
  letter-spacing: -2px;
`

const Currency = styled.p`
  margin: 2px 0;
  font-family: 'Oswald', sans-serif;
  font-weight: 100;
  font-size: 18px;
`

const showCountry = ({ country }) => {
  return (
    <Fragment>
      {country 
      ? 
        <div>
          <Title>{country.name}</Title>
          <p><span role='img' aria-label='flag'>{country.emoji}</span> • <span role='img' aria-label='phone'>📞</span> {country.phone}</p>
          <Currency>Currency: {country.currency}</Currency>
        </div> 
      : 'Not found'}
    </Fragment>
  )
}

export default ({ match }) => {
  const code = match.params.id.toUpperCase()
  const { loading, error, data } = useQuery(GET_COUNTRY, {
    variables: { code },
  })
  return (
    <Country>
      {loading ? <Loading /> : ''}
      {error ? <span>ERROR:: ${error}</span> : ''}
      {data ? showCountry(data) : ''}
    </Country>
  )
}
