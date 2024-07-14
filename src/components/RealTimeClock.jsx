import { useEffect } from "react";
import { useState } from "react"


export const RealTimeClock = () => {
    const [timeNow, setTimeNow] = useState(null);

    useEffect(()=>{
        const tempoNow = setInterval(() => {
            setTimeNow(new Date());
        }, 1000);
        return () => clearInterval(tempoNow);

    })
    console.log(timeNow)

    const formatTime = (date) => {
        const horas = date.getHours().toString().padStart(2, '0');
        const minutos = date.getMinutes().toString().padStart(2, '0');
        const segundos = date.getSeconds().toString().padStart(2, '0');
        return `${horas}:${minutos}:${segundos}`;
    };


  return (
    <div>
        <h2>RealTimeClock</h2>
        <p>Hora Atual: {timeNow && formatTime(timeNow)}</p>
        </div>
  )
}
