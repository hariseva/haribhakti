// import React from "react";
// import {Card } from "react-bootstrap"


        

//     function Boot() {
//         return (
//             <Card className="text-danger">
//                 <Card.Body>This is some text within a card body.</Card.Body>
//             </Card>
//         );
//     }

// export default Boot
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Boot() {
  return (
    <div className='bg-info'>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
  );
}

export default Boot;
    