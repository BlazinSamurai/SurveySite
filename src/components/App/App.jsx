import React, { useEffect, useRef, useState } from 'react'
import { initExperience } from '../../Script.js'
import './App.css'
import { div } from 'three/tsl';

function App() {

  const canvasRef = useRef(null);

  useEffect(() => {
    // This runs once when the component enters the page
    const cleanup = initExperience(canvasRef.current)

    return () => {
      // This runs when the component leaves the page
      cleanup()
    }
  }, []);

  return (
    <div>
      <h1>Hello THREE.js</h1>
      <canvas ref={canvasRef} className='webgl'/>
    </div>
  )
}

export default App
