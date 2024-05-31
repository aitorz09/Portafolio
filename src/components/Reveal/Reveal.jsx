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
  },[isInView,slideControls,mainControls])
  return (
    <div ref={ref} style={{position: "relative", width }}>
      <motion.div
      variants={{
        hidden:{
          opacity:0,
          y:25
        },
        visible:{
          opacity:1,
          y:0
        }

      }}
      initial='hidden'
      animate={mainControls}
      transition={{duration:0.5,delay:0.5,ease:'easeIn'}}
      >{children}
      </motion.div>
      <motion.div variants={{
        hidden:{left:"0"},
        visible:{right:"100%"}
      }}
      initial='hidden'
      animate={slideControls}
      transition={{duration:0.5,ease:'easeIn'}}
      style={{
        position:'absolute',
        background:'#8DCF00',
        top:'0',
        bottom:'0',
        left:'0%',
        right:'0%',
        zIndex:20
      }}
      />
    </div>
  )
}
