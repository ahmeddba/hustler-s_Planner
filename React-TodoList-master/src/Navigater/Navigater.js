import React, { useState } from 'react'
import {Navbar,Container} from 'react-bootstrap'
import './Navigater.css'

const Navigater = () => {
    const [name , setName] = useState("Ahmed Ben Abid");


  return (
<>
<Navbar className="nv bg-body-tertiary">
      <Container>
        <h3>Hustler's Planner</h3>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">{name}</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
</>
    )
}

export default Navigater
