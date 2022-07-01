import {React} from 'react'

//pager
export default (props)=>
{
    //undefined array
    var numbers=[]

    var {totalPostsInAPI,MaxDisplayrecordsPerButton,getButtonNumber}=props

     var numberOfButtons=Math.floor(totalPostsInAPI/MaxDisplayrecordsPerButton);

    for(let i=1;i<=numberOfButtons;i++)
    {
       numbers.push(i) 
    }
    return
         <div class="container p-5">

            <ul class="pagination">
            {
                numbers.map((bno,i)=> <li class="page-item">
                <a class="page-link" onClick={()=>getButtonNumber(bno)}>{bno}</a></li>)
            }
            </ul>
         </div>
}