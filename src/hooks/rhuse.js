import{React, useState,useEffect} from 'react'
 
import axios from 'axios'

const apiurl=`https://fakestoreapi.com/products`

export default (props)=>{

     //STATE OBJECT IMPLEMENTATION
    var [products,setStateProducts] = useState([]);

    useEffect(()=>
    {
        axios.get(apiurl).then((result)=>setStateProducts(result.data))
    },[])

    return(<div className ="container p-3">
                <h1 className="text-center h4">React UseEffect Hooks for API calls</h1>

                 <div className="row">
                    {
                        products.map((res,i)=>
                        {
                            return(<div className="col-lg-2" key={i}>

                                <div className="card">
                                    <img src={res.image} class="card-img-top w-50 mx-auto my-2" style={{height:'200px'}} />
                                    <div className="card-body text-center">
                                    <h5 className="card-title">{res.title}</h5>
                                    <h4 className="card-title">{res.price}</h4>
                                    <p className="card-text">{res.description.slice(0,30)}</p>
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                    </div>-
                                </div>  

                            </div>)
                        })
                    }

                 </div>
           </div>)
}
