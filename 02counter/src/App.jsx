import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0);
  
  // let counter = 5;

  const addValue = () => {
    // counter = counter + 1;  // both works the same way
    if(counter < 20 ){
      setCounter(counter + 1);
    }else{
      alert('value can not be exceeded now');
    }
    

    // console.log('clicked', counter);
  }

  const removeValue = () => {
    // Check if the counter is greater than zero
    if (counter > 0) {
      // Decrement the counter by 1
      setCounter(counter - 1);
    }else{
      alert('value can not go below 0')
    }
  }

  return (
    <>

     <h1>React with Vite</h1>
      <h2>Counter Value: {counter} </h2>

      <button onClick={addValue}>
        Add Value
      </button>
      <br />
      <button onClick={removeValue}>
        Remove Value
      </button>

    </>
  )
}

export default App
