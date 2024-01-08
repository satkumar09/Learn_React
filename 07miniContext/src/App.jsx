
import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContextProvider'

function App() {
  

  return (
    <UserContextProvider>
      <h1>React with Chai</h1>
      
      <Login/>
      <Profile/>

      {/* now both login and profile component have access to the userContext as it wrapped in UserContextProvider */}
      
    </UserContextProvider>
  )
}

export default App
