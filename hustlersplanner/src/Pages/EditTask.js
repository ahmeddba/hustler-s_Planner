import React, { useEffect, useState } from 'react'
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useMatch, useNavigate } from 'react-router-dom';
import { editTask, getOneTask } from '../JS/Actions/TaskActions';
import { todoReducer }  from '../JS/Reducers/TaskReducer';

const EditTask = () => {
    const [newTask, setNewTask] = useState({});
    const display = {backgroundColor : "whitesmoke" , "padding" : "20px" , "borderRadius" : "10px" , "marginTop" : "50px" , "marginBottom" : "40px" , height : "auto" , width : "auto"}
    const match = useMatch('/editTask/:id');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const task = useSelector((state)=> state.todoReducer.oneTask)
    useEffect(() => {
         dispatch(getOneTask(match.params.id))
        }, [dispatch, match.params.id ])

    const handleChange = (e) => {
        setNewTask({...newTask , [e.target.name] : e.target.value});
    }
    const Edit = () => {
        dispatch(editTask(task._id , newTask));
        navigate(-1)
    }

console.log(newTask)
  return (
    <div style={display}>

<Form style={{marginBottom : "20px"}}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="text" placeholder="Edit your task's name" name='name' onChange={handleChange} />
          <Form.Text className="text-muted">
            the name is required
          </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3"  controlId="formBasicPassword">
        <Form.Label>Deadline</Form.Label>
      <input  name="deadline"  type="date"
        disabled={false}
        onChange={handleChange}
        className="form-control"
        />
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
<Button onClick={() => Edit()}  variant="success" type="submit">
          Submit
      </Button>
      <Button onClick={() => navigate(-1)} style={{margin : "0 10px"}} variant="secondary" >
          Cancel
      </Button>
    </div>
  )
}

export default EditTask
