
import { useEffect } from 'react'
import { Reveal } from '../Reveal/Reveal.jsx'
import './index.css'
import { Toaster, toast } from 'sonner'
import emailJs from 'emailjs-com'
export const ContactMe = () => {
  useEffect(()=>{
    emailJs.init('YX4HD6kMy60XgXvhI')
  },[])
  const handleForm = (e)=>{
    e.preventDefault()
  
  emailJs.sendForm(' smtp-relay.brevo.com','himynamesis',e.target,'YX4HD6kMy60XgXvhI')
       .then((result) => {
           console.log(result.text);
           if(result.text === 'OK'){
            toast.success('Email sent to pqpiacarreras@gmail.com')
            e.target.reset()
           }
       })
       .catch((error) => {
           console.log(error.text);
       });
    
  } 
  
  return (
    
    <section id='contactme' className='conctactme-wrap'>
      <Toaster/>
      <section className='info-wrap'>
        <Reveal>
          <h3 className='yellow-text'>My info</h3>
        </Reveal>
        <Reveal>        
          <p>Email: <span className='green-text'>pqpiacarreras@gmail.com</span></p>
        </Reveal>
        <Reveal>         
          <p>Phone Number: <span className=' blue-text'>+34652157195</span></p>
        </Reveal>
      </section>
      <form className='form' onSubmit={handleForm} >
      <Reveal>
          
        <h3 className='yellow-text'>Contact Me</h3>
      </Reveal>
      <Reveal>
          
        <label required id='name' htmlFor="name" >Name</label>
        </Reveal>
        <Reveal>
          
        <input className='form-input' type="text" id="name" name="name" required placeholder='Aitor Carreras' />
        </Reveal>
        <Reveal>
          
        <label id='email' htmlFor="email">Email</label>
        </Reveal>
        <Reveal>
          
        <input className='form-input' type="email" id="email" name="email" required placeholder='pqpiacarreras@gmail.com' />
        </Reveal>
        <Reveal>
          
        <label htmlFor="message">Message</label>
        </Reveal>
        <Reveal>
          
        <textarea className='form-input' rows={15} cols={50} id="message" name="message" required placeholder='Hola me gustaria contactar contigo para...'></textarea>
        </Reveal>
        <div style={{display:"flex"}}>
        <Reveal>
          
            <button className='form-btn' >Send</button>
          </Reveal>
          <Reveal>
          
          <button className='form-btn' type="reset">Clear</button>
        </Reveal>
        </div>
      </form>
    </section>
  )
}
