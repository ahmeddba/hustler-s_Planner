import React, { useEffect, useState } from 'react'
import Task from './Task'
import { Form, Spinner } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { get_tasks } from '../../JS/Actions/TaskActions'


  const ListTask = ({list}) => {
    const user = JSON.parse(localStorage.getItem('user'));
    console.log(user)
  const dispatch = useDispatch();
  const load = useSelector(state => state.todoReducer.loadTasks);
  const listTasks = useSelector(state => state.todoReducer.tasksList);

  const display = {display : 'flex' , flexDirection : 'column' , justifyContent : 'center' ,alignItems : 'center' ,width : '100%' , margin : '20px 0' , flex :'2'}
const [selectedFilter , setSelectedFilter] = useState('')

useEffect(() => {

dispatch(get_tasks())
}, [dispatch,user._id])
  return (
    <div style={display} >
{
  load?  <Spinner animation="grow" variant="success" />:  <>
 <div style={display}>
    <Form.Select value={selectedFilter} onChange={(e) => setSelectedFilter(e.target.value)} style={{width : '73%', margin :'20px 0', border:'#28a745 solid 1px'}} aria-label="Default select example">
      <option value=''>Show All</option>
      <option value="1">Done</option>
      <option value="2">Undone</option>
      {/* <option value="3">Three</option> */}
    </Form.Select>
    <h3 style={{color : 'white'}}>Work to do</h3 >
    {
        selectedFilter === '1' ? listTasks.filter(el => el.isDone===true && el.user === user._id).sort((a, b) => new Date(a.deadline) - new Date(b.deadline)).map((el,i)=> <Task key={i} task={el} indexx={i} />) :
        selectedFilter === '2' ? listTasks.filter(el => el.isDone===false && el.user === user._id).sort((a, b) =>{
          const dateA = new Date(a.deadline);
          const dateB = new Date(b.deadline);
          const currentDate = new Date();

          const differenceA = Math.abs(dateA - currentDate);
          const differenceB = Math.abs(dateB - currentDate);

          return differenceA - differenceB;}).map((el,i)=> <Task key={i} task={el} indexx={i} />)
          :
        listTasks.filter(el => el.user === user._id).sort((a, b) =>{
          const dateA = new Date(a.deadline);
          const dateB = new Date(b.deadline);
          const currentDate = new Date();

          const differenceA = Math.abs(dateA - currentDate);
          const differenceB = Math.abs(dateB - currentDate);

          return differenceA - differenceB;}).map((el,i)=> <Task key={i} task={el} indexx={i} />)
    }
    </div>
  </>
}
    </div>
  )
}

export default ListTask
