import React, { Component } from 'react'
import axios from 'axios';
import {Container, Row, Col, Card} from 'react-bootstrap';

/*import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
*/

//Global-variable for RESTAPI-URL
const url ="https://jsonplaceholder.typicode.com/photos?_start=0&_end=10"

export default class ReactBootstrap extends Component {

  constructor(props) {
    super(props);
  
    this.state = {
      photos:[] //empty Array
       
    }
  }

    
    render() {
    
    return (<div>
      <div className='container text-center'>

      <h2>React Bootstrap UI Package</h2>

      <Container>
        <Row>
          {
            this.state.photos.map((res,i)=>
            {
              return(<Col lg="4" md="4" sm="6" xs="12">

              <Card className='my-3'>
            
                <Card.Img variant='top' className='w-80 mx-auto my-2'  src={res.thumbnailUrl}/>
                  <Card.Body>
                    <Card.Title className='h6'>{res.title}</Card.Title>
                  
                    <a className='btn btn-primary' href={res.url} target="_blank">Visit Site</a>
                   
                  </Card.Body>
                
              </Card>

                    </Col>)
            })
          }
        </Row>
      </Container>
        
      </div>
    </div>)
  }

  componentDidMount()
  {
    axios.get(url).then((result)=> this.setState({photos:result.data}))
  }
}
