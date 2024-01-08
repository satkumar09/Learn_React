//To send data through context: 


import React, {useState, useContext} from 'react'
import UserContext from '../context/UserContext'

function Login() {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  //to fetch values from UserContext
  const {setUser} = useContext(UserContext)
  //we defined setUser in UserContextProvider which act as a method to setUser, so agar sirf user ka need hota to direct user lete but user ka value update karna hai issi liye setUser liye

  const handleSubmit = (e) => {
    e.preventDefault()
    setUser({username,password})
  }

  return (
    <div>
      <h2>Login</h2>
      <input type="text" 

      value={username}
      onChange={(e) => setUsername(e.target.value)}
      
      placeholder="username"/>

      <input type="text" 
      
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      
      placeholder="password"/>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login