import React, {  useState } from 'react'
import { useDispatch } from 'react-redux';
import { Button, Form } from 'react-bootstrap'
// import { useNavigate } from 'react-router-dom';
import { login } from '../JS/Actions/AuthActions';
import { useNavigate } from 'react-router-dom';
// import {AuthReducer} from '../JS/Reducers/AuthReducer'

const Login = () => {
    const display = {"backgroundColor" : "white"  , "height" : "auto"  , "borderRadius" : "30px" , "margin" : "10% 30px" , "padding" : "30px"}

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const [user, setUser] = useState({});
    // const isAuth = useSelector((state) => state.AuthReducer.isAuth);

   const handleChange = (e) => {
        setUser({...user , [e.target.name] : e.target.value});
   }
  //  const handleLogin = () => {

  //       // isAuth && navigate('/tasks');
  //  }
console.log(user)
  return (
  <>
<div style={display}>
<Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={handleChange} name="email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={handleChange} name="password" />
      </Form.Group>

      <Button style={{ border :"none"}} variant='outline-success' onClick={() => dispatch(login(user,navigate))}>
        Submit
      </Button>
    </Form>

</div>
  </>

  )
}

export default Login
