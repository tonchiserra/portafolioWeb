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
        text={<p className="text">¡Hola! Mi nombre es Gonzalo Serra pero puedes llamarme <b>Tonchi</b>. Tengo 20 años y soy un apacionado por el mundo IT. Actualmente me encuentro viviendo en <b>Rosario, Santa Fe, Argentina</b>.</p>}
      />

      <TargetAboutMe 
        icon={iconMiCarrera}
        subtitle="Mi carrera"
        text={<p className="text">En 2019 comencé a estudiar <b>Ingeniería en Sistemas de Información</b> en la Universidad Tecnológica Nacional FRRo y de forma <b>autodidacta</b> me centro en aprender y mejorar mis habilidades como <b>Frontend Developer</b>.</p>}
      />

      <TargetAboutMe 
        icon={iconHobbies} 
        subtitle="Hobbies"
        text={<p className="text">En mi tiempo libre, cuando no estoy estudiando o programando, me encuentro con mis amigos, miro películas, escucho música, juego videojuegos o paso tiempo con mi familia.</p>}
      />

      </div>
    </section>
  );
}