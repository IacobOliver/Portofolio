import { useInView, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";


export default function MaskText({ text, loadTimer, className }: { text: Array<String>, loadTimer: number, className: String }) {
    const body = useRef(null);
    const isInView = useInView(body, { margin: "75%" })
    const animationForRow = {
        initial: { y: "100%" },
        enter: (i: number) => ({ y: "0", transition: { duration: 0.90, ease: [0.5, 1.5, 0.68, 1], delay: 0.200 * i } }),
    }

    return (
      <div ref={body}>
                {
                    text.map((phrase, index) => {
                        return <div key={index} className="font-bold m-0  overflow-hidden">
                            <motion.p
                                className={`${className}`}
                                custom={index}
                                variants={animationForRow}
                                initial="initial"
                                animate={isInView ? "enter" : ""}
                            >{phrase}

                            </motion.p>
                        </div>
                    })
                }
            </div>
    )
}