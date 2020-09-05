import React,{ Component } from 'react'

class Compose extends Component{

    constructor(){
        super()
        this.state={
            message: 'Welcome'
        }
    }

    changeMessage(){
        this.setState({
            message: 'Thank you for Subscribing'
        })
    }

    render(){
        return(
            <div>
                <h1>Press the button</h1>
                <button onClick={() => this.changeMessage()}>{this.state.message}</button>
            </div>
        )       
    }
}

export default Compose