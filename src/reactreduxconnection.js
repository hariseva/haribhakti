import React, { Component } from 'react'

//step1
import {connect} from 'react-redux';
//step-3
//import EmpAction from '../src/actions/empaction' //external data-restapi
import EmpAction from './actions/empaction'
import UsersAction from './actions/useraction'
import StudentsAction from './actions/studentaction'
//step-4
import { bindActionCreators } from 'redux';

class ReactReduxConnection extends Component
{
   constructor(props) 
   {
     super(props);
   
     this.state = {}
   }

   componentDidMount()
   {
    this.props.EmpAction();
    this.props.UsersAction();
    this.props.StudentsAction();
   }

    render() 
  {
    return (<div className="container py-2">
       <h2 className="text-center">ReactReduxConnection</h2>
     
       <h3>synchronous data from redux_actionc</h3>
     {
        this.props.empdata.map((res,i)=>
        {
            return(<ul key={i}>
                <li>{res.id}</li>
                <li>{res.name}</li>
                <li>{res.email}</li>
            </ul>)
        })
     }

<h3>Asynchronous data-1[global restapi] from redux_actionc</h3>
     {
        this.props.userdata.map((res,i)=>
        {
            return(<ul key={i}>
                <li>{res.id}</li>
                <li>{res.name}</li>
                <li>{res.email}</li>
            </ul>)
        })
     }

<h3>Asynchronous data-2[local restapi] from redux_actionc</h3>
     {
        this.props.studentdata.map((res,i)=>
        {
            return(<ul key={i}>
                <li>{res.id}</li>
                <li>{res.name}</li>
                <li>{res.email}</li>
            </ul>)
        })
     }
   
    </div>
   
    )
  }
}
//step-6
const mapStateToProps=(state)=>{
    //get the data from the redux store by using reducers
   console.log(state)
    return ({
    empdata:state.Empreducer,
     userdata: state.Userreducer,
    studentdata:state.Studentreducer
}) 
}

//step-5
const mapDispatchToProps=(dispatch)=>{
    //calling redux actions
    return bindActionCreators({EmpAction,UsersAction,StudentsAction},dispatch) 
}

//export default ReactReduxConnection
//step-2
export default connect(mapStateToProps,mapDispatchToProps)(ReactReduxConnection)