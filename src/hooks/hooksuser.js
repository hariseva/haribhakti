import React, { useState, useEffect } from 'react'

import axios from 'axios';
import { Link } from 'react-router-dom';

//global variable for restapi url
const url=`http://localhost:3001/users` //array type of object
 
export default () =>{
    let [userData, setStateuserData]= useState([]);
    
    let getData=()=>{
        axios.get(url).then((result)=> setStateuserData(result.data))
       
    }

 
useEffect(()=>{getData()},[]);


  //delete the data
  let DeleteHandler=(id)=> {
    
     if (window.confirm(`delete the record number is ${id}?`)){
        axios.delete(`${url}/${id}`)  
        getData();
     }
  }

  
    return (
      <div className="container p-5">
        <h3 class="text-center">FETCH RESTAPI DATA USING GLOBAL URL/CLIENTS</h3>
     
        <table className="table table-warning table-bordered">
            <thead className="table table-light">
                <tr>
                    <th>SNO</th>
                    <th>NAME</th>
                    <th>EMAIL</th>
                    <th>phone</th>
                    <th colSpan="3" className="text-center">ACTION</th>
                </tr>
            </thead>
            
            
            <tbody>
            {
         userData.map((res,i)=>
         {
            return(<tr key={i}>
             <td>{i+1}</td>
             <td>{res.name}</td>
             <td>{res.email}</td>
             <td>{res.phone}</td>
             <td>
                 <Link to={`/hooksuser/view/${res.id}`}  class="btn btn-primary">VIEW</Link>
             </td>
             <td>
                 <Link to={`/hooksuser/edit/${res.id}`} class="btn btn-warning">Edit</Link>
             </td>
             <td>
                 <button onClick={()=>DeleteHandler(res.id)} class="btn btn-danger">Delete</button>
             </td>
            </tr>)
         })
     }
            </tbody>



        </table>

      </div>
      )
  }

  
