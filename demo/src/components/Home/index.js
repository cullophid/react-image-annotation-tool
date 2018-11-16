import React, { Component } from 'react'
import styled from 'styled-components'
import Simple from '../Samples/Simple'

const Hero = styled.div`
  text-align: center;
`

const Title = styled.h1`
  font-size: 36px;
  text-align: center;
`

const Subtitle = styled.p`
  font-size: 20px;
  text-align: center;
`

const Container = styled.main`
  margin: 0 auto;
  padding: 64px 0;
  max-width: 700px;
`

export default class App extends Component {  
  render () {
    return (
      <Container>
        <Hero>
          <Title>Image annotation tool</Title>
          <Subtitle>
            Inspired by react-image-annotation
          </Subtitle>
        </Hero>
        <h3>Try it out by hoverring the image</h3>
        <Simple />
      </Container>
    )
  }
}
