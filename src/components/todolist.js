import React, { Component, createRef } from 'react'
import List from './list'
import "./TodoList.css";

export class todolist extends Component {

    constructor(props) {
        super(props)
        this.inputRef=createRef()
        this.state = {
             items: []
        }
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    addItem(e){
        e.preventDefault()

        if(this.inputRef.current.value!==""){
            // console.log(this.inputRef.current.value)
            var newItem={
                text:this.inputRef.current.value,
                key: Date.now()
            }

            this.setState( prevState => {
                return{
                    items:prevState.items.concat(newItem)
                }
            })
            this.inputRef.current.value=""
        }
    }

    deleteItem(key) {
        var filteredItems = this.state.items.filter(function (item) {
          return (item.key !== key);
        });
       
        this.setState({
          items: filteredItems
        });
    }

    render() {     
        return (
            <div className="todoListMain">
                <div className="header">
                    <form onSubmit={this.addItem}>
                        <input type="text" ref={this.inputRef} placeholder="enter task"></input>
                        <button type="submit">Add</button>
                        <List 
                            items={this.state.items}
                            delete={this.deleteItem}
                        >
                        </List>
                    </form>
                </div>
            </div>
        )
    }
}   

export default todolist