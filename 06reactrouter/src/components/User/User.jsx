import React from 'react'
import { useParams } from 'react-router-dom'

//we need this useParams to get access to the userid mentioned in main.jsx

function User() {

  const {userid} = useParams()

  return (
    <div className='bg-gray-600 text-white text-3xl p-4'>User: {userid}</div>

  )
}

export default User