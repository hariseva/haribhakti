import React, {  useEffect, useState } from 'react'
import axios from 'axios';
import { Link,useParams } from 'react-router-dom';
//global
var idno;
//global variable for restapi url

 export default(props)=>{
   var [userData,setStateUserData]=useState({
    id:'',
    name:'',
    email:'',
    phone:''

   });

   let {idno}=useParams();
   
    let {id,name,email,phone}= userData

  //restapi calls
  useEffect(()=>{
    const url=`http://localhost:3001/users/${idno}`
    axios.get(url).then((result)=> setStateUserData(result.data));
  },[]);
  
    return (
      <div className="container p-5">
         <h2>VIEW COMPONENT PAGE</h2>
      <p>
          {idno} th record data
      </p>

      <ul>
          <li>{id}</li>
          <li>{name}</li>
          <li>{email}</li>
          <li>{phone}</li>
      </ul>

          <Link className="btn btn-success" to="/hooksuser">GO BACK</Link>
      
      </div>
      )
  }


