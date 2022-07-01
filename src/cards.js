import React from "react"

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Service from "./main.json"

function cards() {

    
        return (
            Service.map((data,i)=>
            {
              return(
   <div>
                <Card>
  <Card.Header>Featured
  
  </Card.Header>
  <Card.Body>
    <Card.Title>{data.Title}</Card.Title>
    <Card.Text>
      {data.description}
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
</div>)
             } ) 
)} 



export default cards