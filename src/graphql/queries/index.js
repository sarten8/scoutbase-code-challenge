import gql from 'graphql-tag'

export const GET_COUNTRIES = gql`
  {
    countries {
      name
      native
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
