import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useQuery } from '@apollo/react-hooks'
import { GET_COUNTRIES } from '../graphql/queries'
import Loading from '../components/Loading'

const Countries = styled.div`
  margin-top: 20px;
  padding: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Title = styled.h1`
  margin: 0;
  font-family: 'Oswald', sans-serif;
  font-weight: 700;
  font-size: 36px;
  letter-spacing: -2px;
  align-self: flex-start;
`

const Country = styled.div`
  margin: 10px;
  padding: 10px;
  width: 80%;
  height: auto;
  border-bottom: 1px solid;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-color: #ffffff11;
  display: flex;
  flex-direction: column;
`

const Flag = styled.span`
  font-size: 18px;
`

const CountryName = styled.span`
  position: relative;
  cursor: pointer;
  margin-left: 5px;
  font-size: 24px;
  transition: all 0.5s ease-in-out;
  ::before {
    content: '';
    width: 0;
    height: 0;
    position: absolute;
    top: 0;
    left: 0;
    transition: all 0.5s;
    border-radius: 25px;
    background: #c31432;
    background: -webkit-linear-gradient(to left, #240b36, #c31432);
    background: linear-gradient(to left, #240b36, #c31432);
  }
  :hover::before {
    width: 100%;
    height: 2px;
    transition: width 0.5s ease-in-out;
  }
  & > * {
    text-decoration: none;
    color: white;
  }
`

const Description = styled.span`
  margin-left: 5px;
  font-size: 16px;
  opacity: 0.7;
`

const showCountries = ({ countries }) => {
  return (
    <Countries>
      <Title>Countries</Title>
      {countries.map((c, index) => (
        <Country key={`c${index}`}>
          <div>
            <Flag role='img' aria-label='flag'>{c.emoji}</Flag>
            <CountryName><Link to={`/countries/${c.code}`}>{c.name}</Link></CountryName>
          </div>
          <div>
            <span>
              Continent: <Description>{c.continent.name}</Description>
            </span>
          </div>
          <div>
            {c.languages.length > 0 ? (
              <span>
                Languages:{' '}
                {c.languages.map((l, index) => (
                  <Description key={`l${index}`}>{l.name}</Description>
                ))}
              </span>
            ) : (
              'x'
            )}
          </div>
        </Country>
      ))}
    </Countries>
  )
}

export default () => {
  const { loading, error, data } = useQuery(GET_COUNTRIES)
  return (
    <Countries>
      {loading ? <Loading /> : ''}
      {error ? <span>ERROR:: ${error}</span> : ''}
      {data ? showCountries(data) : ''}
    </Countries>
  )
}
