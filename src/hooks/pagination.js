import{React, useState,useEffect} from 'react'
 
import axios from 'axios'
 import Pager from './pager.js'

const apiurl=`https://jsonplaceholder.typicode.com/posts`

export default (props)=>{

     //STATE OBJECT IMPLEMENTATION
    var [posts,setStatePosts] = useState([]);

    //SELECT DEFAULT MAX POSTS PER ACTION
     var [DefaultMaxDisplayposts] = useState(8);

     //first button number
     var [DefaultButton,SetStateDefaultButton]= useState(1);
     //last index number
     var lastindex=DefaultButton*DefaultMaxDisplayposts
     var FirstIndex=lastindex-DefaultMaxDisplayposts

    useEffect(()=>
    {
        axios.get(apiurl).then((result)=>setStatePosts(result.data))
    },[])

    //var DisplayDefaultButtonposts= posts.slice(FirstIndex,lastindex)

    //totalpost from api
    var totalPosts= posts.length

    let handleButtonNumberChanges=(btnNumber)=>
    {
        SetStateDefaultButton(btnNumber)
    }

    return(
           <div class="container p-3">
                <h4>showing{FirstIndex+1}-{lastindex} of {totalPosts}results for "posts"</h4>
                
                <br></br>
                <Pager totalPostsInAPI={totalPosts}
                 MaxDisplayrecordsPerButton=
                 {DefaultMaxDisplayposts}
                 getButtonNumber={(bno)=>handleButtonNumberChanges(bno)}/>

                 <br></br>
                    {
                       posts.slice(FirstIndex,lastindex).map((res,i)=>
                        {
                            return(<ul key={i}>

                                <li>
                                    <h4>{res.id}</h4>
                                    <h5>  {res.title}</h5>
                                    <p>{res.body}</p>
                                </li>

                            </ul>)
                        })
                    }

                 </div>
           
    )
}
