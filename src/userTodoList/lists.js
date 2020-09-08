import React, { Component, Fragment,createRef } from 'react';

class Lists extends Component {

    constructor(props) {
        super(props)
        this.inputRef=createRef()

        this.state = {
             
        }
        this.addItem=this.addItem.bind(this)
    }

    createTask(item){
        return <li  key={item.key}>{item.text}</li>
    }

    addItem(e){
        e.preventDefault()

        if(this.inputRef.current.value!==""){
            // console.log(this.inputRef.current.value)
            var newItem={
                text:this.inputRef.current.value,
                key: Date.now()
            }
            console.log(this.props)
            if(this.props.cUser) this.props.addItemToList(this.props.cUser.key,newItem)
            this.inputRef.current.value=""
        }
    }

  render() {

    var displayList=null
    var username=null
    console.log(this.props)
    if(this.props.cUser){
        username=this.props.cUser.text
    }
    if(this.props.cList) displayList=this.props.cList.map(this.createTask)
    
        return (
            
            <Fragment>
                <div className="todoListMain">
                <div className="header">
                    <form onSubmit={this.addItem}>
                        <input type="text" ref={this.inputRef} placeholder="enter task"></input>
                        <button type="submit">Add</button>
                        <div className="theList">
                            <h2>{username}</h2>
                            {displayList}
                        </div>
                    </form>
                </div>
                </div>
                
            </Fragment>
        )
  }
}

export default Lists;