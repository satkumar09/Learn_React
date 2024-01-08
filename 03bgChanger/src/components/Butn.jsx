import React from 'react'
import { useState } from "react"

//tried to do it using component
function Butn({col}) {
  //default state = olive
  const [color, setColor] = useState("olive")

  return (
    <button onClick = {() => setColor(col)}
      className="outline-none px-4 py-1 rounded-full test-white shadow-lg" style={{backgroundColor: col}}>{col}</button>
  )
}

export default Butn
