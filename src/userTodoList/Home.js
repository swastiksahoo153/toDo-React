import React, { Component,createRef } from 'react';

class Home extends Component {

    constructor(props) {
        super(props)
        this.inputRef=createRef();
        this.state = {
             
        }
    }

    getInfo(e){
        e.preventDefault()
        // console.log(this.inputRef.current.value)
    }
    
  render() {
    var displayList=this.props.users.map(user=><option key={user.key} value={user.text}>{user.text}</option>)
    // console.log(this.props)
    return (
        <div>
            <form onSubmit={(e)=>this.getInfo(e)}>
                <label >Choose your name: </label>
                <select ref={this.inputRef} name="username" id="username">
                    {displayList}
                </select>
                <button>Submit</button>
            </form>
        </div>
    );
  }
}

export default Home;