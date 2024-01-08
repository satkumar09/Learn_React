//To receive data through context


import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

function Profile() {

  //value is set in user therefore we picked user from UserContext
  const {user} = useContext(UserContext)

  //conditional return: 
  if(!user) return <div>Please Login</div>

  return <div>Welcome {user.username}</div>
}

export default Profile