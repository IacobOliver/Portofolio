
'use client';
import { AuroraBackground } from "./_components/AuroraBackground";
import { useEffect, useRef } from "react";

export default function Home() {
  const loader = useRef(null);
  const path = useRef(null);
  const initialCurve = 200;
  const duration = 600;
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
    loader.current.style.top = easeOutQuad(elapsed, 0, -loaderHeight(), duration) + "px";

    if(elapsed < duration){
      requestAnimationFrame(animate)
    }
  }

  const easeOutQuad = (time:any, start:any, end:any, duration:any) => {
    return -end * (time /= duration) * (time - 2) + start;
  }

  const loaderHeight = () => {
    const loaderBounds =  loader.current.getBoundingClientRect();
    return loaderBounds.height;
  }

  const setPath = ( curve : number) => {
    const width = window.innerWidth
    const height = loaderHeight();
    path.current.setAttributeNS(null, "d",
    `M0 0
    L${width} 0
    L${width} ${height}
    Q${width/2} ${height - curve} 0 ${height}
    L0 0`
    )
  }

  return (
    <main className="flex h-screen w-screen flex-col items-center justify-between  bg-black overflow-x-hidden">
      <div ref={loader} className={"loader z-10"}>
        <svg>
          <path ref={path}></path>
        </svg>
      </div>

      <AuroraBackground showRadialGradient={true} className="w-screen"
        children={
          <div id="mainContainer" className="w-full h-full p-10">
            <div id="introduction" className=" text-purple-100 text-6xl gap-52">
              <p className="my-2">Hello ! </p>
              <p className="ml-3 my-2"> Nice to meet you!</p>
              <p className="ml-6 my-2">I'm Iacob Oliver</p>
            </div>

          </div>} />


      <div className="w-full h-36 bg-red-500">
        hehehehe
      </div>

      
      

    </main>
  );
}
