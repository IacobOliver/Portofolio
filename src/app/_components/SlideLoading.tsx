"use client"
import React, { useEffect, useRef } from 'react'

export default function SlideLoading() {
    const loader = useRef<HTMLInputElement>(null);
    const path = useRef<SVGPathElement>(null);
    const initialCurve = 200;
    const duration = 700;
    let start : number;
  
    useEffect(() => {
      setPath(initialCurve);
      setTimeout( () => {
        requestAnimationFrame(animate)
      }, 500)
    }, [])
  
    const animate = (timestamp : number) => {
      if(start === undefined){
        start = timestamp
      }
  
      const elapsed = timestamp - start;
      loader.current!.style.top = easeOutQuad(elapsed, 0, -loaderHeight(), duration) + "px";
  
      if(elapsed < duration){
        requestAnimationFrame(animate)
      }
    }
  
    const easeOutQuad = (time:any, start:any, end:any, duration:any) => {
      return -end * (time /= duration) * (time - 2) + start;
    }
  
    const loaderHeight = () => {
      const loaderBounds =  loader.current!.getBoundingClientRect();
      return loaderBounds.height;
    }
  
    const setPath = ( curve : number) => {
      const width = window.innerWidth
      const height = loaderHeight();
      path.current!.setAttributeNS(null, "d",
      `M0 0
      L${width} 0
      L${width} ${height}
      Q${width/2} ${height - curve} 0 ${height}
      L0 0`
      )
    }
  return (
    <div ref={loader} className={"loader z-50 absolute top-0 left-0 h-screen w-screen"}>
        <svg>
          <path ref={path}></path>
        </svg>
      </div>
  )
}
