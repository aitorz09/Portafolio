import React, { useEffect, useRef } from 'react'
import{motion,useInView,useAnimation} from 'framer-motion'

export const Reveal = ({children,width = 'fit-content'}) => {
  const ref = useRef(null)
  const isInView = useInView(ref, {once:true})
  const mainControls = useAnimation()
  useEffect(()=>{
    if (isInView){
      mainControls.start('visible')
    }
    console.log(isInView);
  },[isInView])
  return (
    <div ref={ref} style={{}}>
      <motion.div
      variants={{
        hidden:{
          opacity:0,
          y:-100
        },
        visible:{
          opacity:1,
          y:0
        }

      }}
      initial='hidden'
      animate={mainControls}
      transition={{duration:0.5,delay:0.5}}
      >{children}</motion.div>
    </div>
  )
}
