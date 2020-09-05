import React, { Component } from 'react'

class form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             userName:'',
             comments:''
        }
    }
    
    handelChangeUsername = event =>{
        this.setState({
            userName: event.target.value
        })
    }

    handelChangeComment = event =>{
        this.setState({
            comments: event.target.value
        })
    }

    render() {
        return (
            <div>
                <form>
                    <div>
                        <label>Username</label>
                        <input value={this.state.UserName} onChange={this.handelChangeUsername}></input>
                    </div>
                    <div>
                        <label>Comments</label>
                        <textarea value={this.state.comments}  onChange={this.handelChangeComment}></textarea>
                    </div>
                    <div>
                        <select>
                            <option>React</option>
                            <option>Angular</option>
                            <option>Vue</option>
                        </select>
                    </div>
                </form>
            </div>
        )
    }
}

export default form

