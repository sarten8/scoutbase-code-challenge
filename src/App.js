import React from 'react'
import { ApolloProvider } from '@apollo/react-hooks'
import ApolloClient from 'apollo-boost'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
import Header from './components/Header'
import Home from './pages/Home'
import Countries from './pages/Countries'
import Country from './pages/Country'
import NoMatch from './pages/NoMatch'

const client = new ApolloClient({
  uri: 'https://countries.trevorblades.com',
})

const Container = styled.div`
  margin: 0;
  padding: 20px;
  max-width: 100%;
  display: flex;
  flex-direction: column;
`

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Container>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/countries" component={Countries} />
            <Route exact path="/countries/:id" component={Country} />
            <Route component={NoMatch} />
          </Switch>
        </Container>
      </Router>
    </ApolloProvider>
  )
}

export default App
