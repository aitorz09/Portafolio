import { myWork } from '../../data/data.js'
import { NavLink } from 'react-router-dom'

export const Mywork = () => {
  return (
    <div className='second-section'>
       <section id='mywork' className='mywork-wrap'>
        <h2 className='h2'>My Work</h2>
        {
          myWork.map((work,index)=>{
            return (
              <article className='work-wrap' key={index}>
                <NavLink to={work.url} target='_blank' rel="noopener noreferrer">
                  <img className='work-img' src={work.imagenUrl} alt={`Imagen de presentacion de ${work.nombre}`} />
                </NavLink>
                <h4><NavLink className="styled-link" target='_blank' rel="noopener noreferrer" to={work.url}>{work.nombre}</NavLink></h4>
                <p>{work.descripcion}</p>
                <h5 className='tecnologias-usadas'>Tecnologias usadas</h5>
                <div className='mywork-tecnologies-wrap'>
                  {
                    work.tecnologias.map((tec,index)=>{
                      return (
                        <img className='tecnologie-img' src={tec} key={index}></img>
                      )
                    })
                  }
                </div>
              </article>
            )
          
          })
        }
      </section>
      </div>
  )
}
