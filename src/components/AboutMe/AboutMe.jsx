import React from 'react'
import { NavLink } from 'react-router-dom'
import aitorimg from '../../assets/AitorFoto.png'
import { tecnologias } from '../../data/data.js'
import './index.css'
import { Reveal } from '../Reveal/Reveal.jsx'

export const AboutMe = () => {
  return (
    <section id='aboutme' className='first-section'>
      
        <div className="main-aboutMe-img-wrap">
          <div  style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"
          }}>
            <Reveal>
            <img className="main-aboutMe-img" src={aitorimg} alt="Imagen de Aitor Carreras Simonet" />
            </Reveal>
            <Reveal>
            <div className="aboutme-nav-wrap">
              <NavLink className="styled-link" target='_blank' to={'https://github.com/aitorz09'}>GitHub</NavLink>
              <NavLink className="styled-link" target='_blank' to={'https://www.linkedin.com/in/aitor-carreras/'}>Linkedin</NavLink>
            </div>
            </Reveal>
          </div>
          <Reveal>

          <h1 className='main-aboutMe-h2'>Aitor <Reveal></Reveal><span style={{ display: 'block', color: '#09f' }}>Carreras</span> </h1>
          </Reveal>
        </div>
      
      <section className="main-aboutMe-wrap">
        <Reveal>
          <h2 className='main-aboutMe-h2'>Junior FullStack Developer</h2>
        </Reveal>
        <Reveal>
          <p>Graduado en un bootcamp intensivo. Me encanta crear aplicaciones funcionales y bien diseñadas. Durante el bootcamp, trabajé en varios proyectos que me permitieron aplicar mis conocimientos en situaciones reales y desarrollar mis habilidades como programador.</p>
        </Reveal>
        <div className='soft-skills'>
          <Reveal>
            <h3 style={{ color: '#09f' }}>SoftSkills</h3>
          </Reveal>
          <Reveal>
            <ul className='main-aboutMe-tecnologies-wrap'>
              {
                tecnologias.map((tec, index) => {
                  return (
                    <li key={index}><img className='tecnologie-img' src={tec.imagenUrl} alt={tec.nombre} /></li>
                  )
                })
              }
            </ul>
          </Reveal>
        </div>
      </section>
    </section>
  )
}
