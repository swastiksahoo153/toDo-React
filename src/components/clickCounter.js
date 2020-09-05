import React, { Component } from 'react'
import withCounter from './withCounter'

class clickCounter extends Component {
    render() {
        const {count,incrementCount} = this.props
        return <button onClick={incrementCount}> Clicked {count} times</button>
    }
}

export default withCounter(clickCounter)
