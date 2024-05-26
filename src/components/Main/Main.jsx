import './index.css'
import { tecnologias,myWork } from '../../data/data.js'
import aitorimg from '../../assets/AitorFoto1.png'
import habimg from '../../assets/HAB.png'
export const Main = () => {
  return (
    <main className="main">
      <div className='first-section'>
      <section className="main-aboutMe-img-wrap">
        <img className="main-aboutMe-img" src={aitorimg} alt="Imagen de Aitor Carreras Simonet" />
      </section>
      <section className="main-aboutMe-wrap">
        <span>Hi,my name is</span>
        <h2 className='main-aboutMe-h2'>Aitor Carreras</h2>
        <p>And im a</p>
        <h2 className='main-aboutMe-h2'>Junior <span style={{display:'block'}}>FullStack Developer</span></h2>
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
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus officia voluptatibus est numquam accusamus maiores omnis natus quam, optio cupiditate sequi beatae corrupti at excepturi, nihil sed odit culpa veritatis.</p>
          </div>
          <img src={habimg} alt="Imagen de Hack a Boss"/>
        </section> 
      <div className='second-section'>

        <h3 className='h3'>My Work</h3>
       <section className='mywork-wrap'>
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
