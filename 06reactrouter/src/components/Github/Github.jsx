import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

//Api Structure:

/* Here we have a property with key followers:
{
  "login": "hiteshchoudhary",
  "id": 11613311,
  "avatar_url": "https://avatars.githubusercontent.com/u/11613311?v=4",
  "url": "https://api.github.com/users/hiteshchoudhary",
  "html_url": "https://github.com/hiteshchoudhary",
  "followers_url": "https://api.github.com/users/hiteshchoudhary/followers",
  "following_url": "https://api.github.com/users/hiteshchoudhary/following{/other_user}",
  "type": "User",
  "site_admin": false,
  "public_gists": 2,
  "followers": 12042,
  "following": 0,
  "created_at": "2015-03-23T13:03:25Z",
  "updated_at": "2023-11-03T18:29:21Z"
}
*/

function Github() {

//different way to fetch data from API
  const data = useLoaderData()
/*
  const [data,setData] = useState([])

  

  useEffect(() => {
    fetch('https://api.github.com/users/hiteshchoudhary')
    .then(res => res.json())
    .then(data => {
      setData(data)
    })
  }, [])
  //the function will fetch the data at the time when components loads using the useEffect state

  //now we can access the follower using data.followers and avatar using data.avatar_url
*/ 

  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
    Github followers: {data.followers}
    <img src={data.avatar_url} alt="Git Picture" width={300}/>

    </div>
  )
}

export default Github

//for loader in route of Github in main.jsx
export const githubInfoLoader = async () => {
  const res = await fetch('https://api.github.com/users/hiteshchoudhary')
  return res.json()
}