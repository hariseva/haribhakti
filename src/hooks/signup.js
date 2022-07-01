import React, { useState,useEffect } from 'react'

import axios from 'axios'

const url=`http://localhost:3001/users`
export default (props)=> {
 
   var [userData,setStateUserData]=  useState({
    name:'',
    email:'',
    phone:'',
    txtConformation:''
   })
   
 //destructuring
 var { name, email, phone, txtConformation } = userData;

let formDatahandling = (e)=>{
    setStateUserData({...userData,[e.target.name]:e.target.value});
}

 let submitHandler =(e) =>
 {
   e.preventDefault();

   var FormData=
   {
     name:`${userData.name}`,
     email:`${userData.email}`,
     phone:`${userData.phone}`
   }
     // alert(formData);
      axios.post(url,FormData)
      .then(()=>{
        //window.alert("...CREATED...");
        props.history.push('/hooksuser')
      });
 }
 
      
    return (
      <div className="container p-5">
          <h3 className="text-center">User Registration</h3>
       
        <div className="container w-50">
        <form onSubmit={submitHandler.bind(this)}>

         <div class="mb-3">
            <label className="form-label">Name</label>
             <input type="text" class="form-control"
              value={name} name="name"
              onChange={formDatahandling.bind(this)} />
             
         </div>

         <div class="mb-3">
            <label className="form-label">Email</label>
             <input type="email" class="form-control" 
              value={email} name="email"
              onChange={formDatahandling.bind(this)} />
             
         </div>

         <div class="mb-3">
            <label className="form-label">Phone</label>
             <input type="number" class="form-control"
              value={phone} name="phone"
              onChange={formDatahandling.bind(this)} />
              
         </div>

         <div class="mb-3">
             <button type="submit" class="btn btn-primary">CREATE ACCOUNT</button>
         </div>
            
            <p class="text-primary">{txtConformation}</p>
         </form>

         </div>
       
        </div>
        )
  }

