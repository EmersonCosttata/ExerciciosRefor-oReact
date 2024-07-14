import { useState, useEffect } from 'react'

export const PersistentCounter = () => {

    const [contador, setContador]  = useState(0)

    useEffect(() => {
        const LocalContador = parseInt(localStorage.getItem('count'));
        if (LocalContador) {
            setContador(LocalContador);
        }
      }, []);

      useEffect(() => {
        if (contador) {
          localStorage.setItem('count', contador.toString());
        }
      }, [contador]);

  return (
    <div>
    <h2>PersistentCounter</h2>
    <h3>Contador Local: {contador}</h3>
    <button onClick={()=>setContador(prevContador => prevContador +1 )}>Acresentar</button>
    <button onClick={()=>setContador(prevContador => prevContador -1 )}>Decrementar</button>
    </div>
  )
}
