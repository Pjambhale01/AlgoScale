import React from 'react'
import { Card} from 'react-bootstrap'
const Home = () => {
  return (
    <div style={{width:"30%",margin:'auto',marginTop:'120px'}}>
      <Card border="primary" style={{ width: '18rem' }}>
        <Card.Header style={{textAlign:"center"}}>Algoscale</Card.Header>
        <Card.Body>
          <Card.Text>
          <a href='http://127.0.0.1:8000/accounts/google/login'>  login with google </a>
          </Card.Text>
        </Card.Body>
      </Card>
     
    </div>
  )
}
export default Home
