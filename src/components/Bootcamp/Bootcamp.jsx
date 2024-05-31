
import foto1 from '../../assets/1.png'
import foto3 from '../../assets/3.png'
import foto2 from '../../assets/2.png'
import './index.css'
export const Bootcamp = () => {
  return (
    <section id='bootcamp' className='bootcamp-section'>
    <div className='bootcamp-info'>
      <h2 className='main-aboutMe-h2'>Mi experiencia en un BootCamp: {"Hack a Boss"}</h2>
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
  )
}
