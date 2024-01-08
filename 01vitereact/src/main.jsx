import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// const anotherUser = "chai aur react"

// const reactElement = React.createElement(
//   'a',
//   {href: 'https://google.com',target: '_blank'},
//   'click me to visit google',
//   anotherUser
// )

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  //reactElement     //will simply generate a link to google with text-> click me to visit googlechai aur react
)
