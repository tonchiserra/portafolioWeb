import '../styles/Home.css';

import weatherImage from '../assets/weather-app-image.png';
import searchimgImage from '../assets/search-img-image.png';
import profileImage from '../assets/profile-image.svg';

export function Home(){

  return(
    <section id="home" className="home">
      <div className="home-content">
        <h1 className="principal-title">Gonzalo Serra</h1>
        <h2 className="principal-subtitle">Frontend Developer</h2>

        <a href="#contact" className="contact-btn">Contáctame</a>

        <div className="last-projects">
          <h3 className="title">Últimos proyectos</h3>
          <div className="last-projects-content">
            <a title="Imagen de 'WeatherApp'" href="https://github.com/tonchiserra/weather-app" target="_blank" rel="noopener noreferrer"><img src={weatherImage} title="Imagen de 'WeatherApp'" alt="WeatherApp" className="last-project-image" /></a>
            <a title="Imagen de 'SearchImg'" href="https://github.com/tonchiserra/search-img" target="_blank" rel="noopener noreferrer"><img src={searchimgImage} title="Imagen de 'SearchImg'" alt="SearchImg" className="last-project-image" /></a>           
          </div>
        </div>
        <img src={profileImage} alt="Imagen de Gonzalo Serra" className="profile-image" />
      </div>
    </section>
  );
}