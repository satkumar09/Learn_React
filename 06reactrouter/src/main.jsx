import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromChildren, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import About from './components/About/About.jsx'
import Home from './components/Home/Home.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github, { githubInfoLoader } from './components/Github/Github.jsx'


//One way to create routers: 
/*
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "contact",
        element: <Contact />
      },
      {
        path: "user/:userid",
        element: <User />
      }
    ]
  }
])
*/

//Better way to create routers: (different syntax)

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route 
        loader={githubInfoLoader}
        path='github' 
        element={<Github />} 
      />
      <Route path='user/:userid' element={<User />} /> 
    </Route>
  )
)

// /:id -> in this syntax the element assigned will directly get the access of id, in the above case User will access userid directly

//we use this /:id for fetching data for each different individual. There whole layout remains same just the id differs for different user

//loader-> provide data to the route element before it renders. i.e. even before someone clicks Github button, just placing the cursor over button will trigger the event and data will start loading and fetching, providing even more optimization 


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
