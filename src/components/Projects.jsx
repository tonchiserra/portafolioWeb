import '../styles/Projects.css';
import { TargetProject } from './ui/TargetProject.jsx';

import react from '../assets/react.svg';
import javascript from '../assets/javascript.svg';
import css from '../assets/css3.svg';
import html from '../assets/html5.svg';
import figma from '../assets/figma.svg';
import formik from '../assets/formik.png';
import styledcomponents from '../assets/styled-components.svg';
import weatherImage from '../assets/weather-app-image.png';
import todoImage from '../assets/todolist-image.png';
import searchimgImage from '../assets/search-img-image.png';
import shopcartImage from '../assets/shopcart-image.png';


export function Projects(){
  return(
    <section id="projects" className="projects">
      <h3 className="title">Mis proyectos realizados</h3>
    
      <div className="projects-content">

        <TargetProject
          name="WeatherApp"
          image={weatherImage}
          desc="Aplicación Web para saber cómo se encuentra clima actualmente en cualquier parte del mundo. Utilizando la API de OpenWeather y ReactJS."
          demo={true}
          techs={[react, javascript, html, css, figma]}
          github="https://github.com/tonchiserra/weather-app"
          linkDemo="https://gserra-weather.netlify.app/"
        />

        <TargetProject 
          name="SearchImage"
          image={searchimgImage}
          desc="Buscador de imagenes. Mediante la API de Unsplash podemos buscar increíbles imágenes sobre cualquier tema."
          demo={true}
          techs={[react,formik, styledcomponents, javascript, html, css]}
          github="https://github.com/tonchiserra/search-img"
          linkDemo="https://gserra-searchimg.netlify.app/"
        />

        <TargetProject 
          name="TodoList"
          image={todoImage}
          desc="App Web de lista de tareas, creada utilizando create-react-app. Las tareas realizadas y a realizar se almacenan en el LocalStorage."
          demo={true}
          techs={[react, javascript, html, css]}
          github="https://github.com/tonchiserra/ToDoList"
          linkDemo="https://todolist-gserra.netlify.app/"
        />

        <TargetProject 
          name="ShopCart"
          image={shopcartImage}
          desc="Carrito de compras creado con React.js utilizando solo componentes de clases. Puedes agregar y eliminar productos."
          demo={false}
          techs={[react, javascript, html, css]}
          github="https://github.com/tonchiserra/shopcart"
          linkDemo=""
        />

      </div>

      <p className="text">Puedes ver todos mis proyectos en mi perfil de <a href="https://github.com/tonchiserra" title="github.com/tonchiserra" target="_blank" rel="noopener noreferrer">GitHub</a>.</p>
    </section>
  );
}