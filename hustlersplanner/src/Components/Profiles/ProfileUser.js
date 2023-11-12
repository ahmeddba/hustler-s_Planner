import React from 'react'
import './ProfileUser.css'

const ProfileUser = () => {
    const display = {"backgroundColor" : "white"  , "height" : "auto"  , "borderRadius" : "30px" , "margin" : "10% 30px" , "padding" : "30px"}
const user = JSON.parse(localStorage.getItem('user'));
const fullName = user && `${user.first_name} ${user.last_name}`;

  return (
    <>

    <div style={display}>
        <div className="about">
    <div className='desc'>
                <h1>{fullName}</h1>
                <p><b>Description:</b>   {user.description}.</p>
                <p><b>Age:</b> {user.age}</p>


            </div>
            <img src='/me.webp' alt='ahmed' className='ahmed' height={"400px"}/>
            </div>
    </div>
        </>  )
}

export default ProfileUser
