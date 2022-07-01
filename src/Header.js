import React from "react"
import {  NavLink } from "react-router-dom" 






function Header()
{
  var menu=["Home","About","Services","Contact","Itstructures","lifecycle","Restapi","Signup","reactBootstrap","reactreduxconnection","rhusestate","pagination","hooksuser","HooksRedux"]

return(

  <nav className="navbar navbar-expand-lg bg-primary">
  <div className="container-fluid bg-info">
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      
    {
     menu.map((data,i)=> <li className="nav-item" key={i}>
     <NavLink  className="nav-link"  activeClassName=" text-white bg-warning" to= {`${data.toLowerCase()}`} > {data} </NavLink>
       </li>)
    } 
    
    </ul> 
       </div>


</div>
</nav>
)
  }
 export default Header;  