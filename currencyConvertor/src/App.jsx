
import { useState } from "react"
import InputBox from "./Components/InputBox.jsx";


const App = () => {
  const [count,setcount]=useState("heyyy");
  return (
    <>
    <div className='text-blue-500'>{count}</div>
<InputBox/>
    </>
  )
}

export default App

