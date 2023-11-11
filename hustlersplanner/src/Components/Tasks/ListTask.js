import React, { useEffect, useState } from 'react'
import Task from './Task'
import { Form, Spinner } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { get_tasks } from '../../JS/Actions/TaskActions'
import { todoReducer }  from '../../JS/Reducers/TaskReducer'


  const ListTask = ({list}) => {
  const dispatch = useDispatch();
  const load = useSelector(state => state.todoReducer.loadTasks);
  const listTasks = useSelector(state => state.todoReducer.tasksList);

  const display = {display : 'flex' , flexDirection : 'column' , justifyContent : 'center' ,alignItems : 'center' ,width : '100%' , margin : '20px 0' , flex :'2'}
const [selectedFilter , setSelectedFilter] = useState('')

console.log(selectedFilter)
useEffect(() => {

dispatch(get_tasks())
}, [dispatch])
console.log(listTasks)
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
        selectedFilter === '1' ? listTasks.filter(el => el.isDone===true).map((el,i)=> <Task key={i} task={el} indexx={i} />) :
        selectedFilter === '2' ? listTasks.filter(el => el.isDone===false).map((el,i)=> <Task key={i} task={el} indexx={i} />) :
        listTasks.map((el,i)=> <Task key={i} task={el} indexx={i} />)
    }

    </div>
  </>
}

    {/* <h3 >List of finished Tasks</h3 >
    <div style={display}>

    {
        list.filter(el => el.isDone===true).map((el,i)=> <Task key={i} task={el} indexx={i} />)
    }

    </div> */}
    </div>
  )
}

export default ListTask
