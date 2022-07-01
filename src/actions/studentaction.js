import axios from "axios"




export default function StudentsAction(){

    const url = "http://localhost:3001/users"
    return({
        type:"StudentsAction",
        payload:axios.get(url).then((result)=> result.data)
    })
}


