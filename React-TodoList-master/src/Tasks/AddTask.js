import React, { useEffect, useState } from 'react'
import './AddTask.css'
import { useDispatch, useSelector } from 'react-redux'
import { add_task, cancel_mod, clear_id, edit_task } from '../JS/Actions'
import { Button } from 'react-bootstrap'
// import {Form} from 'react-bootstrap'

const AddTask = () => {
  const display = {display : 'flex' , flexDirection : 'row' , justifyContent : 'center' ,alignItems : 'center' ,width : '100%' , margin : '20px 0'}
  const [description , setDescription] =useState('')
  const newId = useSelector(state => state.tasksList.length + 1)
  const dispatch = useDispatch();
  const modify = useSelector(state => state.mod)
  const reserved_id = useSelector(state => state.reserved_id)
  const reserved_description = useSelector(state => state.reserved_description)
  const [newDescription , setNewDescription] = useState( reserved_description )

console.log(newDescription)
useEffect(() => {
  setNewDescription(reserved_description)
},[reserved_description])
// console.log(reserved_id , description)
const modd = ()=>{
  dispatch(edit_task(reserved_id , newDescription))
  dispatch(cancel_mod());
setDescription('')
setNewDescription('')
}

const handleModify = () => {
  newDescription ?
modd()
:
alert('Please enter a task')

}
  const handleAdd = () => {

    description ?
dispatch(add_task({id : newId , decription : description , isDone : false}))
:
alert('Please enter a task')
setDescription('')
document.querySelector('.taskInput').value = ''
  }


  return (
    // <Form.Control size="lg" type="text" placeholder="Large text" />

    <div style={display}>
    <input className='taskInput' type="text" value={modify? newDescription:description}  onChange={modify ?(e) => setNewDescription(e.target.value): (e) => setDescription(e.target.value)} />
    {
      !modify ?
      <button className='newTaskButton' onClick={() => handleAdd()}>Add Task</button>
      :


      <>
      <button className='newTaskButton' onClick={() => {handleModify()
      document.querySelector('.taskInput').value = ''}}>Modify </button>
      <Button className='cancel' variant='Dark' onClick={() => {dispatch(cancel_mod());
      document.querySelector('.taskInput').value = ''}}>Cancel</Button>
      </>
    }

    </div>
  )
}

export default AddTask
