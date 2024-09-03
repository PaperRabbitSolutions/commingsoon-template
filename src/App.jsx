import React, { useState } from 'react';
import './App.css';
import Derlin from './Components/Derlin';
import star from './assets/star.png';
import bgImage from './assets/background.jpg';

function App() {
  // Individual states for each image hover
  const [hovered1, setHovered1] = useState(false);
  const [hovered2, setHovered2] = useState(false);
  const [hovered3, setHovered3] = useState(false);

  // Handle hover state for each image
  const handleHover1 = () => setHovered1(true);
 

  const handleHover2 = () => setHovered2(true);
  

  const handleHover3 = () => setHovered3(true);
  

  return (
    <div className='w-screen h-screen relative bg-cover bg-center flex justify-center items-center overflow-hidden' style={{ backgroundImage: `url(${bgImage})` }}>
      <div className='absolute top-[-35%] right-[-40%] md:right-[-10%] z-50 animate-move-diagonal-sm lg:animate-move-diagonal-lg  '>
        <img src="https://i.pinimg.com/originals/1a/8f/45/1a8f45557f4df6b9e0adf351d26a20ba.png" className='rotate-[-32deg] lg:rotate-[-25deg] z-40 ' alt="" />
      </div>
      {/* <div className='absolute top-[-35%] left-[90%] z-50 animate-move-diagonal-sm lg:animate-move-diagonal-lg  '>
        <img src="https://i.pinimg.com/originals/1a/8f/45/1a8f45557f4df6b9e0adf351d26a20ba.png" className='rotate-[-30deg] lg:rotate-[-22deg] z-40 ' alt="" />
      </div>
      <div className='absolute top-[-40%] left-[40%] z-50 animate-move-diagonal-sm lg:animate-move-diagonal-lg   '>
        <img src="https://i.pinimg.com/originals/1a/8f/45/1a8f45557f4df6b9e0adf351d26a20ba.png" className='rotate-[-30deg] lg:rotate-[-22deg] z-40 ' alt="" />
      </div>
      <div className='absolute top-[-45%] left-[80%] z-50 animate-move-diagonal-sm lg:animate-move-diagonal-lg  '>
        <img src="https://i.pinimg.com/originals/1a/8f/45/1a8f45557f4df6b9e0adf351d26a20ba.png" className='rotate-[-30deg] lg:rotate-[-22deg] z-40 ' alt="" />
      </div>
      <div className='absolute top-[-48%] left-[98%] z-50 animate-move-diagonal-sm lg:animate-move-diagonal-lg  '>
        <img src="https://i.pinimg.com/originals/1a/8f/45/1a8f45557f4df6b9e0adf351d26a20ba.png" className='rotate-[-30deg] lg:rotate-[-22deg] z-40 ' alt="" />
      </div> */}
      <div className='absolute top-10 left-[25%] hidden md:block z-50'>
        <img
          src={star}
          width={30}
          onMouseOver={handleHover1}
          
          className={`rotate-[-22deg] z-40 ${hovered1 ? 'animate-move-diagonal' : ''}`}
          alt=""
        />
      </div>
      <div className='absolute top-20 left-[75%] hidden md:block z-50'>
        <img
          src={star}
          width={30}
          onMouseOver={handleHover2}
          
          className={`rotate-[-22deg] z-40 ${hovered2 ? 'animate-move-diagonal' : ''}`}
          alt=""
        />
      </div>
      <div className='absolute top-80 left-[80%] hidden md:block z-50'>
        <img
          src={star}
          width={30}
          onMouseOver={handleHover3}
          
          className={`rotate-[-22deg] z-40 ${hovered3 ? 'animate-move-diagonal' : ''}`}
          alt=""
        />
      </div>
     
      <Derlin />
    </div>
  );
}

export default App;
