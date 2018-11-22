import React, {Component} from 'react'
import styled from 'styled-components'

const Container = styled.div`
  border: dashed 2px black;
  box-shadow: 0px 0px 1px 1px white inset;
  box-sizing: border-box;
  transition: box-shadow 0.21s ease-in-out;
  z-index: 1;
`

class Rectangle extends Component {

  render() {
    const {annotation, onClick, className, style, rectangleIsActive, isActive} = this.props
    const { geometry, data } = annotation
    if (!geometry) return null

    return (
        <Container
          onDoubleClick={() => onClick(data.id)}
          className={className}
          onMouseEnter={() => rectangleIsActive(true, data.id)}
          onMouseLeave={() => rectangleIsActive(false, data.id)}
          style={{
            position: 'absolute',
            left: `${geometry.x}%`,
            top: `${geometry.y}%`,
            height: `${geometry.height}%`,
            width: `${geometry.width}%`,
            boxShadow: isActive  && '0 0 1px 1px yellow inset',
            ...style
          }}
        />
    )
  }
}

Rectangle.defaultProps = {
  className: '',
  style: {}
}

export default Rectangle
