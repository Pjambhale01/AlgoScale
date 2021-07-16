import React, { useState } from 'react'
import { Button, Form, } from 'react-bootstrap'
import axios from 'axios'
const Info = (props) => {
    
    const [contact, setContact] = useState({})
    const handleChange = (e) => {
        setContact({ ...contact,[e.target.name]: e.target.value })
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        await axios.post('http://127.0.0.1:8000/algo/register/',contact)
        setContact('')
    }
    console.log(contact,'contact form')
    return (
        <div style={{margin:'50px 250px 0px 250px'}}>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>first_name</Form.Label>
                    <Form.Control type="text" name="first_name"  onChange={handleChange}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>last_name</Form.Label>
                    <Form.Control type="text" name="last_name" onChange={handleChange}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>email</Form.Label>
                    <Form.Control type="text" name="email" onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    {/* <Form.Control type="text" name="message" rows="10" cols="50" onChange={handleChange} /> */}
                    <div>message</div>
                    <textarea id="w3review" name="message" rows="4" cols="100" onChange={handleChange}></textarea>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>   
    </div>)
}
export default Info