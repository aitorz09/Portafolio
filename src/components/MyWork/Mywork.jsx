import React from 'react'
import { myWork } from '../../data/data.js'
import { NavLink } from 'react-router-dom'
import { Reveal } from '../Reveal/Reveal.jsx'

export const Mywork = () => {
  return (
    <div className='second-section'>
      <section id='mywork' className='mywork-wrap'>
        <h2 className='h2'>
          <Reveal>{/* Envuelve el título en un componente Reveal */}
            My Work
          </Reveal>
        </h2>
        {myWork.map((work, index) => {
          return (
              <article key={index} className='work-wrap'>
                <Reveal><NavLink to={work.url} target='_blank' rel="noopener noreferrer">
                  <img className='work-img' src={work.imagenUrl} alt={`Imagen de presentacion de ${work.nombre}`} />
                </NavLink></Reveal>
               <Reveal><h4>
                  <NavLink className="styled-link" target='_blank' rel="noopener noreferrer" to={work.url}>{work.nombre}</NavLink>
                </h4></Reveal> 
                <Reveal>{/* Envuelve el párrafo en un componente Reveal */}
                  <p>{work.descripcion}</p>
                </Reveal>
                <h5 className='tecnologias-usadas'>
                  <Reveal>{/* Envuelve el título de tecnologías en un componente Reveal */}
                    Tecnologías usadas
                  </Reveal>
                </h5>
                <div className='mywork-tecnologies-wrap'>
                  {work.tecnologias.map((tec, index) => {
                    return (
                      <Reveal key={index}>{/* Envuelve cada imagen de tecnología en un componente Reveal */}
                        <img className='tecnologie-img' src={tec} alt={`Tecnología ${index}`} />
                      </Reveal>
                    )
                  })}
                </div>
              </article>
          )
        })}
      </section>
    </div>
  )
}
