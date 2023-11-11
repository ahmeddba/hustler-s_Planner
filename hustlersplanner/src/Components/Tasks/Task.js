import React, { useState } from 'react'
import './Task.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faChevronDown, faChevronUp, faPenToSquare, faTrash, faXmark } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux'
import { change_mod, delete_task, done_task} from '../../JS/Actions/TaskActions'
import TaskDetail from './TaskDetail'

const Task = ({task , indexx }) => {
  const [affiche , setAffiche] = useState(false)
  const dispatch = useDispatch();
  const display = {display : 'flex' , flexDirection : 'row' , flexWrap : 'nowrap',justifyContent : 'space-between' ,alignItems : 'center' ,width : '73%' , margin : '10px 0',backgroundColor : 'white',borderRadius : '30px',padding : '10px' , border :"#15cb43 solid 2px" }
const modify = useSelector(state => state.mod);
console.log(task.isDone)
console.log(modify)
  return (
    <>
    <div style={display}>
      <div style={{display : 'flex'}}>
    <div className='number'>{indexx}</div>
    <span style={{marginLeft : '10px'}} className={task.isDone ? 'taskTitle' : ''}>{task.name}</span>


    </div>
    <div>
      <span>{task.register_time}</span>
    </div>
    <div>




{
  affiche ?<button onClick={() => setAffiche(false)}><FontAwesomeIcon icon={faChevronUp} style={{color: "#28a745",}} /> </button>
  :
  <button onClick={() =>  setAffiche(true) }><FontAwesomeIcon icon={faChevronDown} style={{color: "#28a745",}} /> </button>
}





      </div>

    </div>
{
  affiche ? <TaskDetail task={task}/> : null
}
    </>
  )
}

export default Task
