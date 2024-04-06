"use Client"
import React, { useEffect, useState } from 'react'

export default function Alert() {
    const [render, setRender] = useState(false);    

    useEffect(() =>{
        setTimeout(() =>{
            setRender(true)
        }, 2000)
        setTimeout(() =>{
            setRender(false)
        }, 5000)
    }, [])
 
    return (
    <>{
        render ?  <div className='bg-red-500 text-white fixed mt-10 py-5 px-10 rounded-xl animate-jump-in'>
        This project is under construction
      </div> : null
    }
    </>
  )
}
