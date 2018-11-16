import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import styled from 'styled-components'

import Root from './components/Root'
import Home from './components/Home'
import Footer from './components/Footer'

const Main = styled.main`
  margin: 0 16px;
  margin-top: 51px;
`

export default () => (
  <Router basename='/react-image-annotation'>
    <Root>
      <Main>
        <Route
          exact
          path='/'
          component={Home}
        />
      </Main>
      <Footer />
    </Root>
  </Router>
)
