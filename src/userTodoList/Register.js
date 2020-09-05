import React, { Component,createRef } from 'react';

class Register extends Component {

  constructor(props) {
    super(props)
    this.inputRef1=createRef()
    this.inputRef2=createRef()
    this.state = {
      users: []
    }
    // this.addItem = this.addItem.bind(this);
    
  } 
  
  addItem(e){
    e.preventDefault()

    if(this.inputRef1.current.value!=="" && this.inputRef2.current.value!==""){
        // console.log(this.inputRef.current.value)
        var newUser={
            text:this.inputRef1.current.value,
            key: this.inputRef2.current.value
        }
         
        this.setState( prevState => {
            // console.log(prevState.users.concat(newUser))
            return{
                users:prevState.users.push(newUser)
            }
        })
        // console.log(newUser)
        // console.log(this.state.users)
        this.inputRef1.current.value=""
        this.inputRef2.current.value=""
    }
    // console.log(this.state.users)
}

  componentDidUpdate(){
    this.props.updateSelectionList(this.state.users)
    console.log(this.props,this.state.users)
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