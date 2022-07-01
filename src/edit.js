import React, { Component } from 'react'
import axios from 'axios';

import { Link } from 'react-router-dom';

//global
var idno;

const url='http://localhost:3001/users'

export default class view extends Component {
  
  constructor(props) {
    super(props)
  
    this.state =
    {
      name:'',
      email:'',
      phone:'',
      txtConformation:''
    }
  }

//name input text box
unameHandling = (e)=>
{
   this.setState({ name:e.target.value})
}

 //email input text box
 emailHandling = (e)=>
 {
    this.setState({ email:e.target.value})
 }

  //phone input text box
phoneHandling = (e)=>
{
   this.setState({ phone:e.target.value})
}

submitHandler =(e) =>
{
  e.preventDefault();

  var formData=
  {
    'name':this.state.name,
    'email':this.state.email,
    'phone':this.state.phone
  }
     axios.put(`${url}/${idno}`,formData)
     .then(()=>{
      // window.alert("...UPDATED...");
       this.props.history.push('/restapi')
     });
}

  render() {
    idno = this.props.match.params.idno
    console.log(idno) 

     //destructuring
     var { name, email, phone} = this.state
    return (<div>
      <div className="container p-5">
         <h3 className="text-center">EDIT COMPONENT PAGE</h3>
        
        <form onSubmit={this.submitHandler.bind(this)}>
             
             <div class="mb-3">
               <label class="form-label">Name</label>
               <input type="text" class="form-control"
                value={name} 
                onChange={this.unameHandling.bind(this)}/>
             </div>

             <div class="mb-3">
               <label class="form-label">Email</label>
               <input type="email" class="form-control" 
               value={email} 
               onChange={this.emailHandling.bind(this)}/>
             </div>

             <div class="mb-3">
               <label class="form-label">Phone</label>
               <input type="number" class="form-control" 
               value={phone}
               onChange={this.phoneHandling.bind(this)} />
             </div>

             <div class="mb-3">
             <Link className="btn btn-success mx-2" to="/restapi">GOTO BACK</Link>
               <button type="number" class="btn btn-warning text-white" value="Update">Update</button>
             </div>

        </form>
        
        </div>
    </div>)
  }
  //restapi calls
  componentDidMount()
  {
      axios.get(`${url}/${idno}`).then((result)=> this.setState(result.data));
  }
}
