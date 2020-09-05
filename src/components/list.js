import React, { Component } from 'react'

export class list extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             
        }
        this.createTask=this.createTask.bind(this)
    }

    delItem(key){
        this.props.delete(key)
    }

    createTask(item){
        return <li onClick={() => this.delItem(item.key)} key={item.key}>{item.text}</li>
    }

    render() {
        var displayList=this.props.items.map(this.createTask)
        return (
            <div className="theList">
                {displayList}
            </div>
        )
    } 
}

export default list
