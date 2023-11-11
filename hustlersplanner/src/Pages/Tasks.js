import React from 'react'
import ListTask from '../Components/Tasks/ListTask'
import ProfileTasks from '../Components/Profiles/ProfileTasks'
import { Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

const Tasks = () => {
  const navigate = useNavigate();

  const display = { "display" : "flex" , "flexDirection" : "row" , "justifyContent" : "space-between" , "alignItems" : "center" , "marginTop" : "50px" , "marginBottom" : "40px"}
  return (
    <div style={display} >
       <ProfileTasks/>
       <ListTask/>
       <Button onClick={() => navigate('/newTask')} variant='outline-success'>
          <FontAwesomeIcon icon={faPlus} style={{color: "#15cb43" , marginRight : "6px"}} />
          Add Task
       </Button>
    </div>
  )
}

export default Tasks
