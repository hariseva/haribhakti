import axios from "axios";


export default function UsersAction(){
    const url = "https://jsonplaceholder.typicode.com/users"

    return({
        type:'UsersAction',
        payload:axios.get(url).then((result)=> result.data)
    })
}