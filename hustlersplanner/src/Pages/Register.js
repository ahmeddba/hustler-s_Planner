import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import './Register.css'
import { useDispatch, useSelector } from 'react-redux'
import { register } from '../JS/Actions/AuthActions'



const Register = () => {
  const dispatch = useDispatch();

const errors = useSelector(state => state.AuthReducer.errors);

console.log(errors)

  const [newUser , setNewUser] = useState({image : "no image"});

  const handleChange = (e) => {
    setNewUser({...newUser , [e.target.name] : e.target.value})
  }
  console.log(newUser)

  const flex1 = {"backgroundColor" : "white"  , "height" : "auto"  , "borderRadius" : "30px" , "margin" : "10% 30px" , "marginTop" : "50px" , "marginBottom" : "40px"}
 const flexx = {"backgroundColor" : "white"  , "height" : "auto"  , "borderRadius" : "30px" , "margin" : "10% 30px" , "padding" : "30px" ,"display" : "flex" , "flexDirection" : "row" , "justifyContent" : "center" , "alignItems" : "center"  , "marginBottom" : "40px"}
  const display = { "display" : "flex" , "flexDirection" : "column" , "justifyContent" : "space-evenly" , "alignItems" : "flex-start" , "margin": "0px 40px"}

  return (
<div style={flex1}>
    <div style={flexx}>

    <div style={display}>
    <Form.Group className="mb-3 a " controlId="formBasicPassword">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" placeholder="First Name" onChange={handleChange} name='first_name'/>
        <Form.Text className="text-muted">
        {
          errors ? errors.map((el , index) => el.path === 'first_name' && <p style={{color : "red"}} key={index}>{el.msg}</p>)
          :
           null
          }
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3 a" controlId="formBasicPassword">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" placeholder="Last Name" onChange={handleChange} name='last_name' />
        <Form.Text className="text-muted">
        {
          errors ? errors.map((el , index) => el.path === 'last_name' && <p style={{color : "red"}} key={index}>{el.msg}</p>)
          :
           null
          }
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3 a" controlId="formBasicEmail">
        <Form.Label>Age</Form.Label>
        <Form.Control type="number" placeholder="Select your age" onChange={handleChange} name='age' min={0} />
        <Form.Text className="text-muted">
          {
          errors ? errors.map((el , index) => el.path === 'age' && <p style={{color : "red"}} key={index}>{el.msg}</p>)
          :
           null
          }

        </Form.Text>
      </Form.Group>
    </div>
    <div style={display}>
      <Form>
      <Form.Group className="mb-3 a" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={handleChange} name='email'/>
        <Form.Text className="text-muted">
        {
          errors ? errors.map((el , index) => el.path === 'email' && <p style={{color : "red"}} key={index}>{el.msg}</p>)
          :
           null
          }        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3 a" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={handleChange} name='password'/>
        <Form.Text className="text-muted">
        {
          errors ? errors.map((el , index) => el.path === 'password' && <p style={{color : "red"}} key={index}>{el.msg}</p>)
          :
           null
          }
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3 a" controlId="formBasicPassword">
        <Form.Label>Fonction</Form.Label>
        <Form.Select aria-label="Default select example" onChange={handleChange} name='fonction'>
      <option>Chose Fonction</option>
      <option value="Ingénieur">Ingénieur</option>
      <option value="Etudiant">Etudiant</option>
      <option value="Enseignat">Enseignat</option>
      <option value="Autre">Autre</option>
    </Form.Select>
    <Form.Text className="text-muted">
        {
          errors ? errors.map((el , index) => el.path === 'fonction' && <p style={{color : "red"}} key={index}>{el.msg}</p>)
          :
           null
          }
        </Form.Text>

    </Form.Group>

      </Form>
    </div>
    </div>
    <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Select your Photo</Form.Label>
        <Form.Control type="file" />
        <Form.Text className="text-muted">
        {
          errors ? errors.map((el , index) => el.path === 'image' && <p style={{color : "red"}} key={index}>{el.msg}</p>)
          :
           null
          }
        </Form.Text>
      </Form.Group>
      <Button style={{"marginRight" : "10px"}} variant='outline-success' onClick={() => dispatch(register(newUser))}>Submit</Button>
      <Button variant='outline-secondary'>Log in</Button>
    </div>
  )
}

export default Register
