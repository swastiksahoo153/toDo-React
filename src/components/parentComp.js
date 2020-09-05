import React, { Component } from 'react'
import Child from './childComp'

class parentComp extends Component {

    constructor(props) {
        super(props)

        this.state = {
             parentName: 'parent'
        }
        this.greetParent=this.greetParent.bind(this) 
    }
    
    greetParent(a){
        alert(`Hello ${this.state.parentName} from ${a}`)
    }

    render() {
        return (
            <div>
                <Child Handler={this.greetParent} />
            </div>
        )
    }
}

export default parentComp 