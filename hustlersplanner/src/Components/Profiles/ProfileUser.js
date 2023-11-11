import React from 'react'
import './ProfileUser.css'

const ProfileUser = () => {
    const display = {"backgroundColor" : "white"  , "height" : "auto"  , "borderRadius" : "30px" , "margin" : "10% 30px" , "padding" : "30px"}

  return (
    <>

    <div style={display}>
        <div className="about">
    <div className='desc'>
                <h1>Hi there , i'm Ahmed Ben Abid</h1>
                <p>A student engineer is an individual who trains to become a full pledge
                    professional engineer by gaining working experience in the field of engineering.
                     By using their knowledge in the principles of science and mathematics, student
                     engineers should help other professionals develop economical solutions and solve technical problems.
                     They are required to engage themselves in the testing, production, or maintenance of newly developed products.</p>

            </div>
            <img src='/me.webp' alt='ahmed' className='ahmed' height={"400px"}/>
            </div>
    </div>
        </>  )
}

export default ProfileUser
