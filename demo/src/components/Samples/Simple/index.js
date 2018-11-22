import React, { Component } from 'react'
import Annotation from '../../../../../src'

import Root from '../../Root'
import img from '../../../img.jpg'

export default class Simple extends Component {
  state = {
    annotations: [],
    annotation: {}
  }

  onChange = (annotation) => {
    this.setState({ annotation })
  }

  methodName = (methodName) => {
    this.setState({methodName})
  }

  onSubmit = (annotation) => {
    const { geometry, data } = annotation

    this.setState({
      annotation: {},
      annotations: this.state.annotations.concat({
        geometry,
        data: {
          ...data,
          id: Math.random()
        }
      })
    })
  }

  removeAnnotation = (annotationId) => {
    const annotationsTemp = [...this.state.annotations]
    const annotations = annotationsTemp.filter(elem => elem.data.id !== annotationId)
    this.setState({annotations})
  }

  doubleClick = (elemId) => {
    this.removeAnnotation(elemId)
  }


  render () {
    return (
      <Root>
        <Annotation
          src={img}
          alt=''
          annotations={this.state.annotations}
          type={this.state.type}
          removeAnnotation={this.removeAnnotation}
          value={this.state.annotation}
          methodName={this.methodName}
          onChange={this.onChange}
          onSubmit={this.onSubmit}
          doubleClick={this.doubleClick}
        />
      </Root>
    )
  }
}
