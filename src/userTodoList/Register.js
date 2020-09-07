import React, { Component,createRef } from 'react';

class Register extends Component {

  constructor(props) {
    super(props)
    this.inputRef1=createRef()
    this.inputRef2=createRef()
    // this.addItem = this.addItem.bind(this);
    
  } 
  
  addItem(e){
    e.preventDefault()

    if(this.inputRef1.current.value!=="" && this.inputRef2.current.value!==""){
        var newUser={
            text:this.inputRef1.current.value,
            key: this.inputRef2.current.value
        }
         
        console.log(newUser)
        this.props.updateSelectionList(newUser)
        this.inputRef1.current.value=""
        this.inputRef2.current.value=""
    }
}
  render() {
    return (
        <div>
          <form onSubmit={(e)=>this.addItem(e) }>
            <label>Name: </label>
            <input ref={this.inputRef1} name="name" type="text"></input>
            <label>Mobile Number: </label>
            <input ref={this.inputRef2} name="mnumber" type="text"></input>
            <button type="submit">Submit  </button>
          </form>
        </div>
    );
  }
}

export default Register;