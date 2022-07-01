import axios from 'axios'
import React, { Component } from 'react'
 class Signup extends Component {

    constructor(props) {
      super(props)
    
      this.state = {

        uname:'',
        username:'',
        email:'',
        phone:''
         
      }
    }

    unameHandling=(e)=>{
        this.setState({uname:e.target.value})
    }

    usernameHandling=(e)=>{
        this.setState({username:e.target.value})
    }

    emailHandling=(e)=>{
        this.setState({email:e.target.value})
    }

    phoneHandling=(e)=>{
        this.setState({phone:e.target.value})
    }


    submitHandler=(e)=>
    {
      const url=`http://localhost:3001/users` 

        e.preventDefault();

        var FormData =
        {
        "name": this.state.uname,
        "username": this.state.username,
        "email": this.state.email,
        "phone": this.state.phone
        }

        alert(JSON.stringify(FormData))

        axios.post(url, FormData).then(()=>window.alert("....CREATED....")).catch(()=>window.alert("ERROR"));

    }
    
  render() {

    //Destructuring...
    var {uname,username, email, phone}=this.state

    return (<div>
      <div className='container p-3'>

      <h2 className='py-3 text-center'>User Registration Form</h2>


      <div className='container w-75'>

        <form   className='bg-light'>
            <div class="mb-3">
                <label className='form-label'>Name</label>
                <input type="text" class="form-control" value={uname} onChange={this.unameHandling.bind(this)} />
            </div>
            <div class="mb-3">
                <label className='form-label'>Username</label>
                <input type="text" class="form-control" value={username} onChange={this.usernameHandling.bind(this)}/>
            </div>
            <div class="mb-3">
                <label className='form-label'>Email</label>
                <input type="email" class="form-control" value={email} onChange={this.emailHandling.bind(this)} />
            </div>
            <div class="mb-3">
                <label className='form-label'>Phone</label>
                <input type="number" class="form-control" value={phone} onChange={this.phoneHandling.bind(this)} />
            </div>
           
            <div class="mb-3">
  <label for="formFile" class="form-label">Default file input example</label>
  <input class="form-control" type="file" id="formFile"/>
</div>
               
                <button type="Submit" class="btn btn-primary">Create Account</button> 
            
        </form>
      </div>
        
      </div>
    </div>)
  }
}

export default Signup