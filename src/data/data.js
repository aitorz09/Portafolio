import html5 from '../assets/html5.svg'
import css from '../assets/css.svg'
import facebook from '../assets/facebook.svg'
import mysql from '../assets/mysql.svg'
import nodejs from '../assets/nodejs.svg'
import react from '../assets/react.svg'
import git from '../assets/git.svg'
import github from '../assets/github.svg'
import javascript from '../assets/javascript.svg'
import Thortype from '../assets/Thortype.png'
import emojis from '../assets/emojis.png'
import Country from '../assets/country.png'
export const tecnologias = [
  {
    nombre: "HTML",
    imagenUrl: html5
  },
  {
    nombre: "CSS",
    imagenUrl: css
  },
  {
    nombre: "JavaScript",
    imagenUrl: javascript
  },
  {
    nombre: "React",
    imagenUrl: react
  },
  {
    nombre: "Node.js",
    imagenUrl: nodejs
  },
  {
    nombre: "MySQL",
    imagenUrl: mysql
  },
  {
    nombre: "Git",
    imagenUrl: git
  },
  {
    nombre: "GitHub",
    imagenUrl:  github
  }
];

export const myWork = [
  {
    nombre: "ThorType",
    url:'https://aitorz09.github.io/ThorType/',
    imagenUrl: Thortype,
    descripcion: 'Una pequeña aplicación para practicar mecanografía basada en código. La aplicación cuenta con un temporizador y un contador de palabras. Además, el usuario puede elegir el nivel de dificultad. Inspirado en MonkeyType.',
    tecnologias: [react,javascript,css,html5]
  },
  {
    nombre: "Country Page",
    imagenUrl: Country,
    url:'https://aitorz09.github.io/RestCountryApi/',
    descripcion: 'Una aplicación que muestra información sobre todos los países del mundo. El usuario puede buscar un país por nombre, ver información detallada sobre un país y ver los países fronterizos. La aplicación consume una API externa.',
    tecnologias: [react,javascript,css,html5]
  },
  {
    nombre: "Parejas de emojis",
    imagenUrl: emojis,
    url:'https://aitorz09.github.io/Proyecto-Memory/',
    descripcion: 'Un juego de memoria en el que el usuario debe encontrar todas las parejas de emojis con el menor inteto de errores possibles. Inspirado en el juego de memoria clasico y elaborado durante el BootCamp de Hack a Boss.',
    tecnologias: [javascript,css,html5,git,github]
  }
]