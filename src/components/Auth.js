import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class Auth extends Component {
  state={
    username:"",
    password:""
  }
  handleUsername=(event)=>{
      this.setState({
        username: event.target.value
      })
  } 
   handlePasswor=(event)=>{
    this.setState({
      password: event.target.value
    })
}
    login=()=>{
      const {username,password} = this.state
      console.log(username);
      console.log(password);
      if (username === "salom" && password === "1234") {
        alert("Success")
      }else{
        alert("Fail")
      }
    }
  render() {
    return (<div>
        
        <div className='container'>
      <div className='row mt-4'>
        <div className='col-6 offset-3'>
          <div className='card'>
              <div className='card-header'>
                <h1 className='text-center'>Login</h1>
              </div>
              <div className="card-body">
                <input type="text" className='form-control my-2' onChange={this.handleUsername} placeholder='Username' />
                <input type="text" className='form-control my-2' onChange={this.handlePasswor}  placeholder='Password' />
              </div>
              <div className='card-footer d-flex justify-content-center'>
                  <div className='row'>
                        <button onClick={this.login} className='btn btn-success'>Login</button>
                        <Link to="/cars" className='btn btn-danger'>Cars page</Link>
                  </div>
              </div>
          </div>
        </div>
      </div>
    </div>


      </div>)
  }
}
