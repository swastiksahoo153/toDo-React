import React, { Component } from 'react';

class Home extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    
    createTask(user){
        return <option key={user.key} value={user.text}>{user.text}</option>
    }
    
  render() {
    var displayList
    // console.log(this.props.users)

    return (
        <div>
            <label >Choose your name: </label>
            <select name="username" id="username">
                {displayList}
            </select>
        </div>
    );
  }
}

export default Home;