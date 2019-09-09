import gql from 'graphql-tag'

export const GET_COUNTRIES = gql`
  {
    countries {
      code
      name
      continent {
        name
      }
      languages {
        name
        native
      }
      emoji
    }
  }
`

export const GET_COUNTRY = gql`
  query getCountry($code: String) {
    country(code: $code) {
      code
      name
      phone
      currency
      emoji
    }
  }
`
