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
             ],
            //  userkey:{itemkey:item}
             userLists:{
                  123:[
                    {key:11,text:"pikachu"},
                    {key:12,text:"ben10"},
                    {key:13,text:"doremon"}
                  ],
                  1234:[
                    {key:21,text:"pikapika"},
                    {key:22,text:"10avatar"},
                    {key:23,text:"jyadugar"}
                  ]
              },
             currentUser:null,
             currentList:null
        }
        this.updateUser=this.updateUser.bind(this)
        this.showUser=this.showUser.bind(this)
        this.addItemToList=this.addItemToList.bind(this)
    }
    
    addItemToList(userKey,newItem){
      var userlists=this.state.userLists
      userlists[userKey]=[...userlists[userKey],newItem]
      console.log(userKey,newItem)
      this.setState(prevState=>({
        ...prevState,
        userLists:userlists
      }))
    }

    updateUser(newUser){
      var keyofuser=newUser.key
      var newList={...this.state.userLists}
      newList[keyofuser]=[]
        this.setState( prevState => ({
          ...prevState,
          users:[...prevState.users,{text:newUser.text,key:newUser.key}],
          userLists:newList,
        }),
        ()=>console.log(this.state.userLists,this.state.users)
        )
    }

    showUser(name){
      // console.log(name)
      // console.log(this.state.users)
      var curUser=this.state.users.find((curU)=>curU.text===name)
      var curList=this.state.userLists[curUser.key]
      this.setState({
        currentUser:curUser,
        currentList:curList
      })
      // console.log(this.state)
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
              <Route exact path='/' render={() => <Home currState={this.state} addItemToList={this.addItemToList} users={this.state.users} showUser={this.showUser}/>} />
              <Route path='/register' render={() => <Register updateSelectionList={this.updateUser} />} />
              <Route path='/about' component={About} />
          </Switch>
          
          
        </div>
      </Router>

  
    );
  }
}

export default index;