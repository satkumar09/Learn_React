import React from "react";

//create context and export it 
const UserContext = React.createContext()

//will later be used as wrapper for different components
export default UserContext

//every component wrapped by this context will get access to global user Context (basically global variable ka access mil jayega and props ka unnessesary data pass ka issue khatam ho jayega)

