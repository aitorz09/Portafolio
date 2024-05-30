import './index.css'
import { tecnologias,myWork } from '../../data/data.js'
import aitorimg from '../../assets/AitorFoto.png'
import habimg from '../../assets/HAB.png'
import foto1 from '../../assets/1.png'
import foto3 from '../../assets/3.png'
import foto2 from '../../assets/2.png'
export const Main = () => {
  return (
    <main className="main">
      <div className='first-section'>
      <section className="main-aboutMe-img-wrap">
        <img className="main-aboutMe-img" src={aitorimg} alt="Imagen de Aitor Carreras Simonet" />
        <h2 className='main-aboutMe-h2'>Aitor <span style={{display:'block'}}>Carreras Simonet</span> </h2>
      </section>
      <section className="main-aboutMe-wrap">
        <h2 className='main-aboutMe-h2'>Junior FullStack Developer</h2>
         <p>Graduado en un bootcamp intensivo. Me encanta crear aplicaciones funcionales y bien diseñadas. Durante el bootcamp, trabajé en varios proyectos que me permitieron aplicar mis conocimientos en situaciones reales y desarrollar mis habilidades como programador.</p>
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
      </section>
      </div>
        <section className='bootcamp-section'>
          <div className='bootcamp-info'>
            <h2>Mi experiencia en un BootCamp: {"Hack a Boss"}</h2>
            <p> Estoy muy emocionado de contarles que he completado el Bootcamp de Full Stack en #HackABoss.<br/> Han sido 16 semanas intensas, con desafíos y aprendizajes, pero finalmente he logrado obtener un APTO en todas las competencias.
            <br/><br/>Durante este tiempo, comenzamos con HTML y CSS, lo cual parecía sencillo al principio. Luego nos adentramos en JavaScript, donde las cosas se pusieron más desafiantes, pero con dedicación y práctica, lo superamos. Continuamos con MySQL y Node.js, explorando el fascinante mundo del backend, y descubrí lo mucho que me gusta trabajar del lado del servidor.
            <br/><br/>Finalmente, volvimos al frontend con React, aprendiendo sobre hooks y renderizados condicionales, lo cual hizo nuestras aplicaciones muy interactivas y fue una etapa muy gratificante.
            <br/><br/>Ahora, estoy ansioso por comenzar mi carrera en desarrollo web, aplicar lo aprendido y seguir creciendo profesionalmente. ¡Estoy listo para nuevos desafíos y para contribuir con mis habilidades a proyectos emocionantes!</p>
          </div>
          <div className='bootcamp-img-wrap'>
          <img src={foto3} alt="Imagen de Hack a Boss"/>
          <img src={foto2} alt="Imagen de Hack a Boss"/>
          <img src={foto1} alt="Imagen de Hack a Boss"/>
          </div>
        </section> 
      <div className='second-section'>

       <section className='mywork-wrap'>
        <h3 className='h3'>My Work</h3>
        {
          myWork.map((work,index)=>{
            return (
              <article className='work-wrap' key={index}>
                <a href={work.url} target='_blank' rel="noopener noreferrer">
                  <img className='work-img' src={work.imagenUrl} alt={`Imagen de presentacion de ${work.nombre}`} />
                </a>
                <h4><a target='_blank' rel="noopener noreferrer" href={work.url}>{work.nombre}</a></h4>
                <p>{work.descripcion}</p>
                <h5>Tecnologias usadas</h5>
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
      
    </main> 
  )
}
