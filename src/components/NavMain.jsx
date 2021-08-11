import '../styles/NavMain.css'

import bars from '../assets/bars.svg';
import cross from '../assets/cross.svg';

import { SocialNetworks } from './ui/SocialNetworks.jsx';

export function NavMain(){

  const showMenu = () => {
    const $btnMenu = document.querySelector(".menu-btn");
    const $menu = document.querySelector(".nav-main-menu");
  
    $btnMenu.firstElementChild.classList.toggle("none");
    $btnMenu.lastElementChild.classList.toggle("none");
    $menu.classList.toggle("is-active");
  
    document.addEventListener("click", (e) => {
      if(!e.target.matches(".nav-main-link")) return false;
  
      $btnMenu.firstElementChild.classList.remove("none");
      $btnMenu.lastElementChild.classList.add("none");
      $menu.classList.remove("is-active");
    })
  }

  return(
    <header className="nav-main">
      <div className="nav-main-content">
        
        <div className="nav-main-logo">
          <a href="#home">GS</a>
        </div>

        <button className="menu-btn" onClick={showMenu}>
          <img src={bars} alt="|" className="menu-btn-bars" />
          <img src={cross} alt="X" className="menu-btn-cross none" />
        </button>

        <nav className="nav-main-menu">
          <a href="#home" className="nav-main-link">INICIO</a>
          <a href="#about" className="nav-main-link">SOBRE MI</a>
          <a href="#skills" className="nav-main-link">SKILLS</a>
          <a href="#projects" className="nav-main-link">PROYECTOS</a>
          <a href="#contact" className="nav-main-link">CONTACTO</a>
        
          <SocialNetworks />
        </nav>

        <SocialNetworks />
      </div>
    </header>
  );
}