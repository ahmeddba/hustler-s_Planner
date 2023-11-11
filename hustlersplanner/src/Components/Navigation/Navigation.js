import React from 'react'
import './Navigation.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faListCheck } from '@fortawesome/free-solid-svg-icons'
import {  Link, useNavigate } from 'react-router-dom'
import { Button, Dropdown } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../JS/Actions/AuthActions'


const Navigation = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.AuthReducer.isAuth);

    const navBar = {backgroundColor : "whitesmoke" , width : "100%" , height : "100px" ,position : "fixed" , top : "0px" , left : "0px" , right :"0px", zIndex : "1000"}
  return (
    <div className='nav' style={navBar}>
        <div >
        <h1 ><FontAwesomeIcon icon={faListCheck} style={{color: "#000000",height: "30px"}} /> Hustler's Planner</h1>
        </div>

<div >
  <h1>navigation options</h1>
</div>


{
  isAuth ?
  <>
  <div>
 <Dropdown>

<Dropdown.Toggle variant="success" id="dropdown-basic">
<img src="/me.webp" alt="Avatar" class="avatar" />
  User Name
</Dropdown.Toggle>

<Dropdown.Menu>
  <Dropdown.Item as={Link} to='/tasks'>Tasks</Dropdown.Item>
  <Dropdown.Item as={Link} to='/profile'>Profile</Dropdown.Item>
  <Dropdown.Item as={Link} to='/Achievements'>Achievements</Dropdown.Item>
  <Dropdown.Divider />
      <Dropdown.Item as={Link} to='/login' onClick={() => dispatch(logout())}>Log out</Dropdown.Item>

</Dropdown.Menu>
</Dropdown>
</div>
  </>
  :
  <div>
  <Button variant='success' style={{marginRight : '10px'}} onClick={() => navigate('/login')} >Log in</Button>
  <Button variant='secondary' onClick={() => navigate('/register')} >Register</Button>
</div>
}


</div>


  )
}

export default Navigation
