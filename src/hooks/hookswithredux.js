import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import EmpAction from '../actions/empaction'
import UserAction from '../actions/useraction'
import StudentAction from '../actions/studentaction'
import { bindActionCreators } from 'redux';

      let HooksRedux=(props) => {
    useEffect(() =>{
        
            props.EmpAction();
            props.UserAction();
            props.StudentAction();    
    },[])

    return (
        <div className="container p-5">
             <h2 className='text-center'>HooksReduxConections</h2>

              <h3>Synconus data from the react_redux action</h3>

             {
                props.empdata.map((res,i)=>
                {
                    return(
                        <ul key={i}>
                           <li>{res.id}</li>
                           <li>{res.name}</li>
                           <li>{res.email}</li>
                        </ul>)
                })
             }

             <h3>ASynconus data from [RESTAPI] the react_redux action</h3>

             {
                props.userdata.map((res,i)=>
                {
                    return(
                        <ul key={i}>
                           <li>{res.id}</li>
                           <li>{res.name}</li>
                           <li>{res.email}</li>
                        </ul>
                    )
                })
             }
              
             <h3>ASynconus data from [RESTAPI] the react_redux action students</h3>
             
             {
                props.studentdata.map((res,i)=>
                {
                    return(
                        <ul key={i}>
                           <li>{res.id}</li>
                           <li>{res.name}</li>
                           <li>{res.email}</li>
                        </ul>
                    )
                })
             }
        </div>
      )
  }

const mapStateToProps = (state) => {
  //  console.log(state);
//get the data from the redux_store[state data] by using reducers[state objects]
    return({
        empdata:state.Empreducer,
        userdata:state.Userreducer,
        studentdata:state.Studentreducer
    })
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ EmpAction,UserAction, StudentAction },dispatch)
    //calling redux action
}

//export default ReactReduxConnections -> normal react component export

export default connect(mapStateToProps,mapDispatchToProps)(HooksRedux)
 

