import React, { useEffect, useState } from 'react'
import './App.css'
import Derlin from './Components/Derlin'
import star from './assets/star.png' 
import bgImage from './assets/background.jpg'

function App() {
  

  const [hovered,setHovered]=useState(false);
  useEffect(()=>{

  },[])
  function handleHover()
  {
setHovered(true);
  }

  return (
    <div className='w-screen h-screen relative  bg-cover bg-center flex justify-center items-center overflow-x-hidden' style={{ backgroundImage: `url(${bgImage})`}}>
      <div className='absolute top-[-35%] left-[70%] z-50 animate-move-diagonal  r '>
        <img src="https://i.pinimg.com/originals/1a/8f/45/1a8f45557f4df6b9e0adf351d26a20ba.png" className='rotate-[-22deg] z-40   ' alt="" />
      </div>
      <div className='absolute top-[-35%] left-[90%] z-50 animate-move-diagonal  r '>
        <img src="https://i.pinimg.com/originals/1a/8f/45/1a8f45557f4df6b9e0adf351d26a20ba.png" className='rotate-[-22deg] z-40   ' alt="" />
      </div>
      <div className='absolute top-[-35%] left-[40%] z-50 animate-move-diagonal  r '>
        <img src="https://i.pinimg.com/originals/1a/8f/45/1a8f45557f4df6b9e0adf351d26a20ba.png" className='rotate-[-22deg] z-40   ' alt="" />
      </div>
      <div className='absolute top-10 left-[25%] hidden md:block  z-50'>
        <img src={star}width={30} onMouseOver={handleHover} className={`rotate-[-22deg] z-40  ${hovered?'animate-move-diagonal':null} ` }alt="" />
      </div>
     
      <Derlin />
    </div>
  )
}

export default App
