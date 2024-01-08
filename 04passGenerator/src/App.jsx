import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);

  const [numberAllowed, setNumberAllowed] = useState(false);

  const [charAllowed, setCharAllowed] = useState(false);

  const [password, setPassword] = useState("");

  //useRef hook 
  const passwordRef = useRef(null)

  //useCallback is a React Hook that lets you cache a function definition between re-renders.
  //Syntax: useCallback(fn, dependencies). Basically optimize the given function whenever their is a change in the dependencies

  const passwordGenerator = useCallback(() => {
    let pass = "";

    //string for pass when number and charactor not allowed
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvqxyz";
    //string for pass when number is Allowed
    if (numberAllowed) str += "0123456789";
    //string for pass when charactor is allowed
    if (charAllowed) str += "!@#$%^&*-_=+[]{}~`";

    //to generate password
    for (let i = 0; i < length; i++) {
      //generate random index
      let char = Math.floor(Math.random() * str.length + 1);

      //add the character at these random indexes in your password
      pass += str.charAt(char);
    }

    //set the generated password
    setPassword(pass);
    
  }, [length, numberAllowed, charAllowed, setPassword]);
  //above we gave setPassword for memoization as useCallback uses it for optimisation: although even we didn't pass it the code will run effectively, but don't give password as it will generate newpassword infinitely



  //Syntax: useEffect(fn, dependencies). Basically calls the given function whenever the page loads and whenever their is a change in the dependencies
  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])

  // we can make this project without using useCallback, just put the whole code inside useCallback inside useEffect

  //To copy password to clipboard:
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    // passwordRef.current?.setSelectionRange(0,20);
    // the above two lines are just for the select effect and how much length you want the user to select, the bellow code is what copying the password on clipboard. So we can make this project without useRef also
    window.navigator.clipboard.writeText(password)
  },[password])

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
        <h1 className="text-white text-center my-3">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-l px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button onClick = {copyPasswordToClipboard} className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">
            copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              //by default the value will be default length = 8
              value={length}
              className="cursor-pointer"
              //onChange: Call a function when a user changes the selected option of a <select> element:
              //here setLength set the length value according to the change in range value
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              //by default it will be numberAllowed = false
              defaultChecked={numberAllowed}
              id="numberInput"
              //here setNumberAllowed set the numberAllowed value to true and false according to the change in checkbox value (reverse the previous value)
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              //by default it will be charAllowed = false
              defaultChecked={charAllowed}
              id="characterInput"
              //here setCharAllowed set the charAllowed value to true and false according to the change in checkbox value (reverse the previous value)
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
