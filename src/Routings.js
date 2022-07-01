
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import Home from './Home'
import About from './about'
import Services from './services'
import Contact from './Contact'

import Header from './Header'
import Itrout from './Itstructures'
import Lifecycle from './lifecycle'
import Restapi from './Restapi'
import view from './View'
import edit from './edit'
import Signup from './signup'
import ReactBootstrap from './reactbootstrap';
import ReactReduxConnection from './reactreduxconnection';
import rhusestate from './hooks/rhuse';
import pagination from './hooks/pagination';
import hooksuser from './hooks/hooksuser';
import hooksview from './hooks/hooksview';
import hooksedit from './hooks/hooksedit';
import HooksRedux from './hooks/hookswithredux';

function Routings() {



    return (<BrowserRouter>

        <Header />

        <div>
            {/*<Link to='/Home'>Home </Link>
<Link to='/about'>About </Link>
<Link to='/services'>services </Link>
<Link to='/contact'> Contact</Link>
<Link to='/Itstructures'>Itstructures </Link>*/}

            <Route exact path="/Home" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/services" component={Services} />
            <Route path="/Contact" component={Contact} />
            <Route path="/Itstructures" component={Itrout} />
            <Route path="/lifecycle" component={Lifecycle} />
            <Route path="/restapi" component={Restapi} />
            <Route path="/restapi/View/:idno" component={view} />
            <Route path="/restapi/edit/:idno" component={edit} />
            <Route path="/signup" component={Signup} />
            <Route path="/reactbootstrap" component={ReactBootstrap} />
            <Route path="/reactreduxconnection" component={ReactReduxConnection} />
            <Route path="/rhusestate" component={rhusestate} />
            <Route path="/pagination" component={pagination} />
            <Route path="/hooksuser" component={hooksuser} />
            <Route path="/hooksuser/view/:idno" component={hooksview} />
            <Route path="/hooksuser/edit/:idno" component={hooksedit} />
            <Route path="/HooksRedux" component={HooksRedux} />
            

        </div>







    </BrowserRouter>

    )
}

export default Routings