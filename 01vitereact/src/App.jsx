import Chai from './chai'

function App() {
  const username = "Finally"
  return (
    //fragment -> <></> -> used to wrap many html tags as you can't return more than one html tags
    <>           
      <h1>Hello this is</h1>
      <Chai />
      <h2>Yes.....{username}</h2>
    </>
    //{} -> is used to pass evaluated expression, means we can't to stuff like {if(true)statement;}, we can just pass the final evaluated expression like this. 
  )
}

export default App
