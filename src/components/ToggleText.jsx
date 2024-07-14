import React from 'react'
import { useState } from 'react'

export const ToggleText = () => {
    const [showText, setShowText]  = useState(false)

  return (
    <div>
        <h2>ToggleText</h2>
    {showText  && <p>Esse texto pode sumir testa ai embaixo!</p>}
    <br></br>
    <button onClick={()=>setShowText(true)}>Mostrar</button>
    <button onClick={()=>setShowText(false)}>Sumir</button>
    </div>
  )
}
