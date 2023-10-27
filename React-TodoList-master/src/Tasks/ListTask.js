import React, { useState } from 'react'
import Task from './Task'
import { Form } from 'react-bootstrap'

const ListTask = ({list}) => {
  const display = {display : 'flex' , flexDirection : 'column' , justifyContent : 'center' ,alignItems : 'center' ,width : '100%' , margin : '20px 0'}
const [selectedFilter , setSelectedFilter] = useState('')

console.log(selectedFilter)
  return (
    <>

    <div style={display}>
    <Form.Select value={selectedFilter} onChange={(e) => setSelectedFilter(e.target.value)} style={{width : '73%', margin :'20px 0'}}  aria-label="Default select example">
      <option value=''>Show All</option>
      <option value="1">Done</option>
      <option value="2">Undone</option>
      {/* <option value="3">Three</option> */}
    </Form.Select>
    <h3 style={{color : 'white'}}>List of Tasks</h3 >
    {
        selectedFilter === '1' ? list.filter(el => el.isDone===true).map((el,i)=> <Task key={i} task={el} indexx={i} />) :
        selectedFilter === '2'? list.filter(el => el.isDone===false).map((el,i)=> <Task key={i} task={el} indexx={i} />) :
        list.map((el,i)=> <Task key={i} task={el} indexx={i} />)
    }

    </div>
    {/* <h3 >List of finished Tasks</h3 >
    <div style={display}>

    {
        list.filter(el => el.isDone===true).map((el,i)=> <Task key={i} task={el} indexx={i} />)
    }

    </div> */}
    </>
  )
}

export default ListTask
