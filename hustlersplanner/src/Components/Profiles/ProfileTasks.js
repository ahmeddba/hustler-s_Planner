import React, { useEffect, useState } from 'react'
import { Card, ListGroup } from 'react-bootstrap'
import './ProfileTasks.css'
import { Link } from 'react-router-dom';

const ProfileTasks = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const fullName = user && `${user.first_name} ${user.last_name}`;


  console.log(user);

  return (
    <div> <Card style={{ width: '18rem' , flex : '1' , padding : '15px'}}>
    <Card.Img className='imgg' variant="top" src="/me.webp" height={"300px"}/>
    <Card.Body>
      <Card.Title>{fullName}</Card.Title>
      <Card.Text>
        {user.description}
      </Card.Text>
    </Card.Body>
    <ListGroup className="list-group-flush">
      <ListGroup.Item>Achoievements : 10</ListGroup.Item>
      <ListGroup.Item>Tasks completed : 120</ListGroup.Item>
      <ListGroup.Item> Tier : Conqueror</ListGroup.Item>
    </ListGroup>
    <Card.Body>
      <Card.Link as={Link} to='/profile'>See Profile</Card.Link>
    </Card.Body>
  </Card></div>
  )
}

export default ProfileTasks
