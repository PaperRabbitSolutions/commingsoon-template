import React from 'react'
import './App.css'
import Derlin from './Components/Derlin'

function App() {

  return (
    <div className='w-screen h-screen relative  bg-cover bg-center flex justify-center items-center overflow-x-hidden'  style={{backgroundImage:`url("https://images.pexels.com/photos/956999/milky-way-starry-sky-night-sky-star-956999.jpeg?cs=srgb&dl=pexels-felixmittermeier-956999.jpg&fm=jpg")`}}>
    <div className='absolute top-[-30%] left-[70%] z-50 animate-move-diagonal  r '> 
      {/* <div className='w-[1rem] h-[1rem] bg-white rounded-l-full shadow-white-glow rotate-[-45deg]'></div> */}
      {/* <div className='bg-white w-[4rem] h-[0.25rem] shadow-white-glow rotate-[-45deg]'></div> */}
      <img src="https://i.pinimg.com/originals/1a/8f/45/1a8f45557f4df6b9e0adf351d26a20ba.png" className='rotate-[-22deg] z-40   ' alt="" />
    </div>
    {/* <img src="https://i.pinimg.com/originals/1a/8f/45/1a8f45557f4df6b9e0adf351d26a20ba.png" className='rotate-[-25deg]  absolute' alt="" /> */}
      <Derlin/>
    </div>
  )
}

export default App
