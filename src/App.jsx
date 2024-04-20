import { useState } from 'react'
import './App.css'


// useState is a hook, a hook is a way to manage the state and other react features in the project
// useState: This hook allows functional components to manage state. It returns a stateful value and a function to update it.

function App() {
   
    const [counter, setCounter] = useState(0) // 1 is the default value that is assigned to a counter
     // here counter is a variable.
     // setCounter is a function which will manage the state of the counter


     const increment = () =>{

      if(counter !== 5){
        setCounter(counter + 1)  // this will manange the state of the counter
     }
    }

     const decrement = () =>{
      if (counter == 0){
         document.getElementsByClassName("note").innerHTML  = "Cannot Decrease value less than 0"
      }
      else{
        setCounter(counter -   1) // this will manange the state of the counter
      }  
     }

  return (
    <>
      <h1>React Counter Project</h1>

      <h2>Counter: {counter}</h2>  {/* We can inject any variable in html using {} */}
        
        <h4 className="note"></h4>

      <button
      onClick={increment}
      >Increment Counter</button>{" "}

      <button
      onClick={decrement}
      >Decrement Counter</button>
    </>
  )
}

export default App
