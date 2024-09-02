import React, { useEffect, useState } from 'react'
import './App.css'
import Derlin from './Components/Derlin'

function App() {
  

  const [hovered,setHovered]=useState(false);
  useEffect(()=>{

  },[])
  function handleHover()
  {
setHovered(true);
  }

  return (
    <div className='w-screen h-screen relative  bg-cover bg-center flex justify-center items-center overflow-x-hidden' style={{ backgroundImage: `url("https://images.pexels.com/photos/956999/milky-way-starry-sky-night-sky-star-956999.jpeg?cs=srgb&dl=pexels-felixmittermeier-956999.jpg&fm=jpg")` }}>
      <div className='absolute top-[-35%] left-[70%] z-50 animate-move-diagonal  r '>
        <img src="https://i.pinimg.com/originals/1a/8f/45/1a8f45557f4df6b9e0adf351d26a20ba.png" className='rotate-[-22deg] z-40   ' alt="" />
      </div>
      <div className='absolute top-[-35%] left-[90%] z-50 animate-move-diagonal  r '>
        <img src="https://i.pinimg.com/originals/1a/8f/45/1a8f45557f4df6b9e0adf351d26a20ba.png" className='rotate-[-22deg] z-40   ' alt="" />
      </div>
      <div className='absolute top-[-35%] left-[40%] z-50 animate-move-diagonal  r '>
        <img src="https://i.pinimg.com/originals/1a/8f/45/1a8f45557f4df6b9e0adf351d26a20ba.png" className='rotate-[-22deg] z-40   ' alt="" />
      </div>
      <div className='absolute top-0 left-[15%] z-50'>
        <img src="https://i.pinimg.com/originals/1a/8f/45/1a8f45557f4df6b9e0adf351d26a20ba.png" onMouseOver={handleHover} className={`rotate-[-22deg] z-40  ${hovered?'animate-move-diagonal':null} ` }alt="" />
      </div>
     
      <Derlin />
    </div>
  )
}

export default App
