import React from 'react'
import './Task.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faPenToSquare, faTrash, faXmark } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux'
import { change_mod, delet_task, done_task} from '../JS/Actions'

const Task = ({task , indexx }) => {
  const dispatch = useDispatch();
  const display = {display : 'flex' , flexDirection : 'row' , flexWrap : 'nowrap',justifyContent : 'space-between' ,alignItems : 'center' ,width : '73%' , margin : '10px 0',backgroundColor : 'white',borderRadius : '30px',padding : '10px'  }
const modify = useSelector(state => state.mod);

console.log(modify)
  return (
    <div style={display}>
      <div style={{display : 'flex'}}>
    <div className='number'>{indexx}</div>
    <span style={{marginLeft : '10px'}} className={task.isDone ? 'taskTitle' : ''}>{task.decription}</span>

    </div>
    <div>
      <span>{task.isDone ? "Finished" : "Working on"}</span>
    </div>
    <div>
      {
        task.isDone ? <button onClick={() => dispatch(done_task(task.id))}><FontAwesomeIcon icon={faXmark} style={{color: "#8a2be2",}} /></button>
:
<><button onClick={() => {dispatch(change_mod(task.id))}}><FontAwesomeIcon icon={faPenToSquare} style={{color: "#8a2be2",}} /></button>
<button onClick={() => dispatch(done_task(task.id))}><FontAwesomeIcon icon={faCheck} style={{color: "#8a2be2",}} /></button></>
      }

<button onClick={() => dispatch(delet_task(indexx))} ><FontAwesomeIcon icon={faTrash} style={{color: "#8a2be2",}} /></button>

      </div>
    </div>
  )
}

export default Task
