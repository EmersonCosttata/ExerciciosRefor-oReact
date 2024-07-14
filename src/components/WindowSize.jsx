import React from 'react'
import { useState, useEffect } from 'react'

export const WindowSize = () => {
    const [size, setSize] = useState(window.innerWidth)

    useEffect(() => {
        const Resize = () => setSize(window.innerWidth);
        
        window.addEventListener('resize', Resize);  
      }, []);
    
  return (
    <div>
        <h2>WindowSize</h2>    
        <p>Tamanho da Janela!: {size}</p>
    </div>
  )
}
