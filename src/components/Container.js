import React, { Component } from 'react'
import Clock from './Clock'
import Timer from './Timer'

export class Container extends Component {
  render() {
    return (
      <div className='container'>
        <Clock />
        <Timer />
      </div>
    )
  }
}

export default Container