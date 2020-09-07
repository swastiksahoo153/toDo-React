import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Register from './Register';

class index extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             users:[
              {
                text:"abc",
                key: 123
              },
              {
                text:"abcd",
                key: 1234
              }
             ]
        }
        this.updateUser=this.updateUser.bind(this)
    }
    

    updateUser(newUser){
        this.setState( prevState => {
          console.log("prevstate    ",prevState)
            return{
                users:prevState.users.push(newUser)
            }
        },
        console.log("newstate    ",this.state.users)
        )
    }

  render() {
    return (
    <Router>
        <div>
          <h2>Welcome to your own ToDo List</h2>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
          {/* {console.log(this.state.users)} */}
          <ul className="navbar-nav mr-auto">
            <li><Link to={'/'} className="nav-link"> Home </Link></li>
            <li><Link to={'/register'} className="nav-link">Register</Link></li>
            <li><Link to={'/about'} className="nav-link">About</Link></li>
          </ul>
          </nav>
          <hr />
          <Switch>
              <Route exact path='/' render={() => <Home users={this.state.users} />} />
              <Route path='/register' render={() => <Register updateSelectionList={this.updateUser} />} />
              <Route path='/about' component={About} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default index;