import { useEffect } from 'react'
import {useState} from 'react'

export const TitleUpdater = () => {
    const [updater, setUpdater] = useState(0)

    useEffect(()=>{
      document.title = 'Mudei '+updater

    },[updater])

  return (
    <div className='TitleUpdater'>
        <h2>TitleUpdater</h2>

    <button onClick={()=>{
        setUpdater(prevUpdater =>prevUpdater + 1)
    }}>Acresentar</button>

<button onClick={()=>{
        setUpdater(prevUpdater =>prevUpdater - 1)
    }}>Decrementar</button>

    <p>Contador :{updater}</p>
    </div>
  )
}
