// import React from 'react'
// import Sec from "./Sec"

// const App = () => {
//   const username="heloo priya";
//   return (
//    <>
//    <h1>arsh {username}</h1>
//    <Sec/>
//    </>
//   )
// }

// export default App


// counter value
// import React, { useState } from 'react'
// const App = () => {
//   const [Counter, setCounter]=useState(0);
//   const addValue=()=>{
//     setCounter(Counter+1) ; 
//   }
//   const removeValue=()=>{
//     setCounter(Counter-1) ; 
//   }
//   return (
//  <>
//  <h1 className='text-yellow-400'>counter {Counter} </h1>
//  <button className='px-3 py-2 rounded-md bg-blue-300' onClick={addValue}>add value</button>
//  <button className='px-3 py-2 rounded-md bg-blue-200' onClick={removeValue}>remove value</button>
//  </>
//   )
// }
// export default App



// PRops used to our code
// import React from 'react'
// import Card from './componets/Card'
// const App = () => {
//   return (
//   <>
//   <div className='bg-purple-600 w-[100vw] h-[100vh] flex items-center gap-4 justify-center'>
// <Card  name='pinso'/>
// <Card />
//   </div>
//   </>
//   )
// }
// export default App



// Do click the button change the color
// import React, { useState } from 'react'

// const App = () => {
//   const [color, setcolor] = useState("yellow")
//   return (
//     <div className='w-full h-screen'
//       style={{ background: color }}>
//       <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-5 gap-5'>
//         <div className='flex flex-wrap justify-center px-2 py-2 gap-3 bg-white shadow-lg rounded-3xl'>
//           <button onClick={()=>setcolor("red")}
//             className='outline-none px-3 py-1 rounded-full text-white shadow-lg' style={{ background: "red" }}
//           >red</button>
//         </div>
//         <div className='flex flex-wrap justify-center px-2 py-2 gap-3 bg-white shadow-lg rounded-3xl'>
//           <button onClick={()=>setcolor("green")}
//            className='outline-none px-3 py-1 rounded-full text-white shadow-lg' style={{ background: "green" }}>green</button>
//         </div>
//         <div className='flex flex-wrap justify-center px-2 py-2 gap-3 bg-white shadow-lg rounded-3xl'>
//           <button onClick={()=>setcolor("purple")}
//            className='outline-none px-3 py-1 rounded-full text-white shadow-lg' style={{ background: "purple" }}>purple</button>
//         </div>
//       </div>
//     </div>
//   )

// }

// export default App


import React, { useState, useCallback } from 'react'

const App = () => {
  const [length, setlength] = useState(8);
  const [numberAllowed, setnumberAllowed] = useState(false);
  const [characterAllowed, setcharacterAllowed] = useState(false);
  const [password, setpassword] = useState("");
  const passwordGenerator = useCallback(() => {
    var pass = ""
    var str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (characterAllowed) str += "!@#$&8-_+={}[]~`"

    for (let i = 1; i <= Array.length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass = str.charAt(char)
    }
    setpassword(pass);
  }, [length, characterAllowed, numberAllowed, setpassword])
  return (
    <div className='bg-black   w-full h-screen py-8'>
      <div className='text-3xl text-white text-center w-full max-w-md px-4 py-3 shadow-md rounded-lg mx-auto   bg-gray-700 ' >
      
      <h1>Password Grenerator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4 gap-4'>
          <input className='w-full outline-none py-1 px-3' type="text" value={password}
            placeholder='password'
            readOnly
          />
<button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>
        </div>
        {/* lowerpart */}
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range"
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e)=>{setlength(e.target.value)}}
             />
<label className=' text-xl' >Length:{length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
<input type="chekbox" 
defaultChecked={numberAllowed}
id='numberInput'
onChange={()=>{
  setnumberAllowed((
    prev) => !prev)
}}
/> 
            </div>
        </div>
      </div>







    </div>
  )
}

export default App