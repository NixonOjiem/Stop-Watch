import React, { Component } from 'react'
import Clock from './Clock'

export class Container extends Component {
  render() {
    return (
      <div>
        <h1>Container</h1>
        <Clock />
      </div>
    )
  }
}

export default Container