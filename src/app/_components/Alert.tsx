"use Client"
import React from 'react'

interface params{
  message : string,
  show : boolean,
  setShow : any,
  color? : string | null
}

export default function Alert({message, show, setShow, color} : params) {  
 
    return (
    <>{
      show ?  <div className={ `${color != ""? color : "bg-red-500"}  text-white fixed top-7 mt-10 py-5 px-10 z-10 rounded-xl animate-jump-in`}>
        {message}
      </div> : null
    }
    </>
  )
}
