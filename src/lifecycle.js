import React, {Component} from 'react'

class Lifecycle extends Component {

    //constructor_is_Mounting_method
    constructor(props){
        super(props);
        this.state={}
        console.log(`****Constructor_is_Mounting_method****`)
    }

    componentWillMount()
    {

        console.log(`****ComponentWillMount_is_Mounting_method****`)

    }
    render(){
        console.log(`****Render_is_Mounting_methos****`)
  return (
    <div className='p-5 text-center'>
    <h1>REACT CLASS COMPONENT LIFE CYCLE PROCESS</h1>
      
    </div>)
  
    }
    //Rest API calls
componentDidMount()
{
    console.log(`****ComponentDidMount_is_Mounting_method****`)

}
}

export default Lifecycle;