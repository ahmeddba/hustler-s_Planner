import React from 'react'
import { Button, Form } from 'react-bootstrap'

const Login = () => {
    const display = {"backgroundColor" : "white"  , "height" : "auto"  , "borderRadius" : "30px" , "margin" : "10% 30px" , "padding" : "30px"}
  return (
  <>
  <h1 style={{color : "white"}}>Log In</h1>
<div style={display}>
<Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      <Button style={{backgroundColor : "#8a2be2" , border :"none"}} type="submit">
        Submit
      </Button>
    </Form>

</div>
  </>

  )
}

export default Login
