import React from 'react'
import { NavLink } from 'react-router-dom'
import aitorimg from '../../assets/AitorFoto.png'
import { tecnologias } from '../../data/data.js'
export const AboutMe = () => {
  return (
    <section id='aboutme' className='first-section'>
    <div className="main-aboutMe-img-wrap">
      <div>
        <img className="main-aboutMe-img" src={aitorimg} alt="Imagen de Aitor Carreras Simonet" />
          <div className="aboutme-nav-wrap">
            <NavLink className="styled-link" target='_blank' to={'https://github.com/aitorz09'}>GitHub</NavLink>
            <NavLink className="styled-link" target='_blank' to={'https://www.linkedin.com/in/aitor-carreras/'}>Linkedin</NavLink>
          </div>
      </div>
      <h1 className='main-aboutMe-h2'>Aitor <span style={{display:'block', color:'#09f'}}>Carreras</span> </h1>
    </div>
    <section className="main-aboutMe-wrap">
      <h2 className='main-aboutMe-h2'>Junior FullStack Developer</h2>
       <p>Graduado en un bootcamp intensivo. Me encanta crear aplicaciones funcionales y bien diseñadas. Durante el bootcamp, trabajé en varios proyectos que me permitieron aplicar mis conocimientos en situaciones reales y desarrollar mis habilidades como programador.</p>
       <div className='soft-skills'>

        <h3 style={{color:'#09f'}}>SoftSkills</h3>
          <ul className='main-aboutMe-tecnologies-wrap'>
          {
            
            tecnologias.map((tec,index)=>{
              console.log(tec.imagenUrl);
              return (
                <li key={index}><img className='tecnologie-img' src={tec.imagenUrl} alt={tec.nombre} /></li>
              )
            })
          }
          </ul>
       </div>
    </section>
    </section>
  )
}
