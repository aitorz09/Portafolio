import React, { useEffect, useRef } from 'react'
import{motion,useInView,useAnimation} from 'framer-motion'

export const Reveal = ({children,width = 'fit-content'}) => {
  const ref = useRef(null)
  const isInView = useInView(ref, {once:true})
  const mainControls = useAnimation()
  const slideControls = useAnimation()
  useEffect(()=>{
    if (isInView){
      mainControls.start('visible')
      slideControls.start('visible')
    }
    console.log(isInView);
  },[isInView])
  return (
    <div ref={ref} style={{position:"relative"}}>
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
      <motion.div variants={{
        hidden:{left:"0"},
        visible:{left:"100%"}
      }}
      initial='hidden'
      animate={slideControls}
      transition={{duration:0.5,ease:'easeIn'}}
      style={{position:'absolute',background:'white',left:'0',top:'4',bottom:'4',right:'0',zIndex:'20'}}
      />
    </div>
  )
}
