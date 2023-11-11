import React from 'react'
import { Card, ListGroup } from 'react-bootstrap'
import './ProfileTasks.css'

const ProfileTasks = () => {
  return (
    <div> <Card style={{ width: '18rem' , flex : '1' , padding : '15px'}}>
    <Card.Img className='imgg' variant="top" src="/me.webp" height={"300px"}/>
    <Card.Body>
      <Card.Title>User Name</Card.Title>
      <Card.Text>
        User Description
      </Card.Text>
    </Card.Body>
    <ListGroup className="list-group-flush">
      <ListGroup.Item>Achoievements : 10</ListGroup.Item>
      <ListGroup.Item>Tasks completed : 120</ListGroup.Item>
      <ListGroup.Item> Tier : Conqueror</ListGroup.Item>
    </ListGroup>
    <Card.Body>
      <Card.Link href="#">See Profile</Card.Link>
    </Card.Body>
  </Card></div>
  )
}

export default ProfileTasks
