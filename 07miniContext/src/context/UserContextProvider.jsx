import React from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({children}) => {

  //way to use a state without importing it -> React.statename
  const [user, setUser] = React.useState(null)
  return(
      <UserContext.Provider value={{user, setUser}}>
      {children}
      </UserContext.Provider>
  )
}


export default UserContextProvider