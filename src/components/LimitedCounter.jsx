import { useEffect } from "react"
import { useState } from "react"


export const LimitedCounter = () => {
    const [count, setCount] = useState(0)

    useEffect(()=>{
        if(count>10){
            alert('Limite de contagens!')
            setCount(0)
        }
    },[count])
            

  return (
    <div>
        <h2>LimitedCounter</h2>
        <p>Contador com Limite 10: {count}</p>
        <button onClick={()=>setCount(prevCount => prevCount +1)}>Acresentar +</button>
        <button onClick={()=>setCount(prevCount => prevCount -1)}>Diminuir -</button>
    </div>
  )
}
