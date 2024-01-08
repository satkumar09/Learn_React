import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  //useState is used to change the state, these changes are propagated in UI
  //it simple update the counter according to the setCounter function everywhere in the UI where counter is present 

  let [counter, setCounter] = useState(0)  //the names counter, setCounter can be changed, its just the common naming convention
  

  // let count = 5
  const addValue = () => {
    //console.log("clicked", counter);
    if(counter<20){
      setCounter(counter + 1)
      //we can also do: 
      //setCounter(prevCounter => prevCounter + 1)
      /*counter = counter + 1
      setCounter(counter)*/

      /*What will happen if counter=5 and we do: 
      setCounter(counter + 1)
      setCounter(counter + 1)
      setCounter(counter + 1)
      setCounter(counter + 1)
      counter=6 or counter=9?
      Ans: counter=6, as useState sends update in batches to UI 
      so basically we are doing same thing again and again in same batch so it will only update the counter once. So to update the counter again and again: 
      setCounter(prevCounter => prevCounter + 1)
      setCounter(prevCounter => prevCounter + 1)
      setCounter(prevCounter => prevCounter + 1)
      setCounter(prevCounter => prevCounter + 1)
      now it will update counter 4 times
      */
    }  
  }

  const removeValue = () => {
    //console.log("clicked", counter);
    if(counter>0){
      counter = counter -1
      setCounter(counter)
    }
  }

  return (
    <>
      <h1>Click Counter Range - /0-20/ </h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={removeValue}>Remove value</button>
    </>
  )
}

/*

Problem: UI updation

function App() {

  let counter = 5
  const addValue = () => {
    console.log("clicked", counter);
    counter = counter + 1
  }
  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add value</button>
      <br />
      <button>Remove value</button>
    </>
  )
}

the above code should have worked and Counter value: should have increased with each click but it didn't 
*/
export default App
