import React, { useState } from 'react'
import { Button, FloatingLabel, Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { addTask } from '../JS/Actions/TaskActions';


const AddTask = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [newTask, setNewTask] = useState({});
  const display = {backgroundColor : "whitesmoke" , "padding" : "20px" , "borderRadius" : "10px" , "marginTop" : "50px" , "marginBottom" : "40px" , height : "auto" , width : "auto"}
  const handleChange = (e) => {
    setNewTask({...newTask , [e.target.name] : e.target.value});
}
const Add = () => {
  dispatch(addTask(newTask));
  navigate(-1)
}
console.log(newTask)

  return (
    <div style={display} >

<Form style={{marginBottom : "20px"}}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="text" placeholder="Enter your task's name" name='name' onChange={handleChange}/>
          <Form.Text className="text-muted">
            the name is required
          </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3"  controlId="formBasicPassword">
        <Form.Label>Deadline</Form.Label>
      <input  name="deadline"  type="date"
        disabled={false}
        onChange={handleChange}
        className="form-control"   />
      </Form.Group>

      <FloatingLabel controlId="floatingTextarea2" label="Description">
          <Form.Control
            as="textarea"
            name="description"
            placeholder="Leave a comment here"
            style={{ height: '100px' }}
            onChange={handleChange}
          />
      </FloatingLabel>


</Form>
<Button onClick={() => Add()} variant="outline-success" type="submit">
          Submit
      </Button>
      <Button onClick={() => navigate(-1)} style={{margin : "0 10px"}} variant="outline-secondary" >
          Cancel
      </Button>
    </div>
  )
}

export default AddTask
