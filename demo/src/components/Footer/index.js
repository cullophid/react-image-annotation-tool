import React from 'react'
import styled from 'styled-components'

const Footer = styled.div`
  color: #666;
  padding: 16px;
  padding-bottom: 32px;
  text-align: center;
  a {
    text-decoration: none;
    &:hover {
      color: #222;
    }
  }
`

export default () => (
  <Footer>
    <a target="_blank" rel="noopener noreferrer" href="https://github.com/Secretmapper/react-image-annotation">Inspired by react-image-annotation</a>
    <p>
      {'Credits to '}
      <a href='//arianv.com'>@secretmapper</a>
    </p>
  <p>
    Released under the MIT License
  </p>
  <p>
      {'Re-engineered by '}
      <a href='https://github.com/hleote'>@hleote</a>
    </p>
  </Footer>
)
