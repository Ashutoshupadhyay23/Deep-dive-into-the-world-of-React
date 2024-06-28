import { useCallback, useEffect, useRef, useState } from 'react'



function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const [copy, setCopy] = useState("Copy");

  // useRef hook 
  // to use useRef, we have to make variable of it 
  const passwordRef = useRef(null);

  // const passwordGenerator = useCallback(fn, dependencies[])   //usecallback takes a function and dependencies

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(numberAllowed){
      str += "0123456789"
    }

    // if(numberAllowed) str += '0123456789'  //shorthand for upper condition

    if(charAllowed){
      str += "`~!@#$%^&*-_+=[]{}"
    }

    // if(numberAllowed) str += '`~!@#$%^&*()_+=[]{}' //shorthand 

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char);

    }

    setPassword(pass);

  }, [length, numberAllowed, charAllowed, setPassword]);

  const copyPasswordToClipboard = useCallback(() => {
    setCopy("Copied!");
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0,5);
    window.navigator.clipboard.writeText(password)

    setTimeout(() => {
      setCopy("Copy");
      if (passwordRef.current) {
        passwordRef.current.selectionStart = 0;
        passwordRef.current.selectionEnd = 0; // Remove focus to deselect
      }
    }, 4000);

  }, [password]);

  useEffect(() => {
    passwordGenerator();
    setCopy("Copy");
  }, [length, numberAllowed, charAllowed,passwordGenerator]);

  return (
    <>

      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800'>

        <h1 className='text-center text-white my-3'>Password Generator</h1>

        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input
            type="text"
            value={password}
            className='outline-none w-full py-1 px-3'
            placeholder='password'
            readOnly
            ref={passwordRef}
          />

          <button
            onClick={copyPasswordToClipboard}
            className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>
            {copy}
          </button>

        </div>

        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input
             type="range"
             min={8}
             max={25}
             value={length}
             className='cursor-pointer'
             onChange={(e) => {setLength(e.target.value)}}
            />
            <label>Length: {length}</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input
             type="checkbox"
             defaultChecked ={numberAllowed}
             id='numberInput'
             onChange={() => {
              setNumberAllowed((prev) => !prev);
             }}
            />

            <label htmlFor="numberInput">Numbers</label>

          </div>

          <div className='flex items-center gap-x-1'>
            <input
             type="checkbox"
             defaultChecked ={charAllowed}
             id='characterInput'
             onChange={() => {
              setCharAllowed((prev) => !prev);
             }}
            />
            <label htmlFor="characterInput">Characters</label>

          </div>

        </div>

      </div>

    </>
  )
}

export default App
