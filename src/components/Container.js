import React, { Component } from 'react'
import Clock from './Clock'
import Timer from './Timer'
import StopWatch from './StopWatch'

export class Container extends Component {
  render() {
    return (
      <div className='container'>
        <Clock />
        <Timer />
        <StopWatch />
      </div>
    )
  }
}

export default Container