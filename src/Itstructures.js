import  React from 'react'
import { BrowserRouter, Link, Route,Switch } from 'react-router-dom'
import Artapp from './Artificialintelligence'
import webappl from './webapplication'
import Ultraapp from './Ui'
import Mobapp from './mobileapp'
//import productapp from './Product'


function itstruc()
{
var services=[
{ title:'web-application',
routename:'webapp'
},

{ title:'Artificial-intelligence',
routename:'Artapp'
},

{ title:'UI/UX',
routename:'uiapp'
},

{ title:'Mobile-Application',
routename:'mobapp'
},

{ title:'product-support',
routename:'prodapp'
}

]

return(<BrowserRouter>
<div  className='container-fluid py-md-6'>

<h1>IT structures</h1>

<p className="text-warning">   mode of building, construction, or organization; arrangement of parts, elements, or constituents:   </p>

</div>

<div className='container'>
<div className='row'>
<div className='col-lg-6 bg-primary'>

<ul className="list-group list-group-flush">
  <li className="list-group-item">Web Application
  <Link to="/Itstructures/webapp"> Web Application</Link>
  
  </li>

  <li className="list-group-item">Artificial Intelligence

  <Link to="/Itstructures/Artapp">Artificial Intelligence</Link>
  </li>
  <li className="list-group-item">UI/UX
  <Link to="/Itstructures/uiapp">UI/UX</Link>
  </li>
  <li className="list-group-item">Mobile application
  <Link to="/Itstructures/mobapp">Mobile application</Link>
  </li>
  <li className="list-group-item">Product Support
  <Link to="/Itstructures/prodapp">Product Support</Link>
  
  </li>
</ul>


<ul className="list-group list-group-flush">
{
services.map((data,i)=><li className="list-group-item">

    <Link to={`/Itstructures/${data.routename}`}>{data.title}</Link>
{
    console.log('first')

}
    </li>)

}



</ul>



</div>





<div className='col-lg-6'>


<Switch>
<Route exact  path="/Itstructures/webapp" component={webappl}/>
<Route path="/Itstructures/Artapp"  component={Artapp}/>
<Route path="/Itstructures/uiapp"   component={Ultraapp}/>
<Route path="/Itstructures/mobapp"   component={Mobapp}/>
<Route path="/Itstructures/prodapp"   render={()=>"Brand new service"}/>
</Switch>


</div>
</div>


</div>
</BrowserRouter>

)
}
export default itstruc;