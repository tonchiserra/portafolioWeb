import '../styles/App.css'
import '../styles/AboutMe.css'

import { TargetAboutMe } from './ui/TargetAboutMe.jsx';

import iconQuienSoy from '../assets/icon-quien-soy.svg';
import iconMiCarrera from '../assets/icon-mi-carrera.svg';
import iconHobbies from '../assets/icon-hobbies.svg';

export function AboutMe(){
  return(
    <section id="about" className="about-me">
      <h3 className="title">Sobre mi</h3>
      <div className="about-me-content">

      <TargetAboutMe 
        icon={iconQuienSoy}
        subtitle="¿Quién soy?"
        text={<p className="text">¡Hola! Mi nombre es Gonzalo Serra pero puedes llamarme <b>Tonchi</b>. Tengo 20 años y soy un apacionado por el mundo IT.</p>}
      />

      <TargetAboutMe 
        icon={iconMiCarrera}
        subtitle="Mi carrera"
        text={<p className="text">En 2019 comencé a estudiar <b>Ingeniería en Sistemas de Información</b> en la Universidad Tecnológica Nacional FRRo y de forma <b>autodidacta</b> me centro en aprender y mejorar mis habilidades como <b>Frontend Developer</b>.</p>}
      />

      <TargetAboutMe 
        icon={iconHobbies} 
        subtitle="Aprendizaje"
        text={<p className="text">Actualmente, de forma autodidacta, estoy aprendiendo sobre <b>React.js</b> y <b>Redux</b>. En cuanto a la universidad, estoy aprendiendo sobre <b>Bases de Datos</b> y <b>Diseño UX</b>.</p>}
      />

      </div>
    </section>
  );
}