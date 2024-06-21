import React, { useEffect, useState } from 'react'

const Bt5 = () => {
    const[time,setTime] = useState(new Date());

    useEffect(() =>{
        const timerId = setInterval(() =>{
            setTime(new Date());
        }, 1000);

        return() => clearInterval(timerId);
    }, []);
    const formatTime = (date:any)=>{
        const hours = String(date.getHours()).padStart(2,'0');
        const minutes = String(date.getMinutes()).padStart(2,'0');
        const seconds = String(date.getSeconds()).padStart(2,'0');
        return `${hours}: ${minutes}: ${seconds}`
    };
  return (
    <div>
      <h1>Bây giờ là: {formatTime(time)}</h1>
    </div>
  )
}

export default Bt5
