import React from 'react'
import './TaskDetail.css'
import { useDispatch } from 'react-redux'
import { delete_task } from '../../JS/Actions/TaskActions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const TaskDetail = ({task}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const displayButtons ={display : "flex" , justifyContent : "flex-start" ,width : '100%' , margin : '10px 0' }

  return (
    <div className='container'>

<div className='details'>
    <div style={{ flex : 2 ,overflow:'hidden'  , marginRight : '20px'}}>
      <h4 style={{textAlign : 'start'}}>Description: </h4>
      <div ><p  style={{textAlign : 'start' , whiteSpace: 'pre-wrap',wordBreak: 'break-word' }}>{task.description} </p> </div>
    </div>
    <div style={{ flex : 1}}>
      <h4 style={{textAlign : 'start'}}>Started at: </h4>
      <div  style={{textAlign : 'start'}}>{task.register_time}</div>
      <h4 style={{textAlign : 'start'}}>Deadline: </h4>
      <div  style={{textAlign : 'start'}}>{task.deadline}</div>
      <h4 style={{textAlign : 'start'}}>Status:</h4>
      <div  style={{textAlign : 'start'}}>{task.isDone? 'Done' : 'Undone'}</div>
    </div>
    <div style={{ flex : 1}}>
      <h4 style={{textAlign : 'start'}}>points: </h4>
      <div  style={{textAlign : 'start'}}>{task.value}</div>
    </div>
    </div>
    <div style={displayButtons}></div>
    <button onClick={() => dispatch(delete_task(task._id))}><FontAwesomeIcon icon={faTrash} style={{color: "#28a745",}} /></button>
  
    <button onClick={() => navigate(`/editTask/${task._id}`)}><FontAwesomeIcon icon={faPenToSquare} style={{color: "#28a745",marginLeft : '10px'}} /></button>

    </div>
  )
}

export default TaskDetail

