import '../styles/Skills.css';
import { TargetSkills } from './ui/TargetSkills.jsx';

import iconHtml from '../assets/html5.svg';
import iconCss from '../assets/css3.svg';
import iconJs from '../assets/javascript.svg';
import iconGit from '../assets/git.svg';
import iconReact from '../assets/react.svg';
import iconMySql from '../assets/mysql.svg';

export function Skills(){
  return(
    <section id="skills" className="skills">
      <h3 className="title">Tecnologías que aplico</h3>
      <div className="skills-content">

        <div className="skills-target-content">
          <TargetSkills 
            img={iconHtml}
            name="HTML"
          />
          <TargetSkills 
            img={iconCss}
            name="CSS"
          />
          <TargetSkills 
            img={iconJs}
            name="JavaScript"
          />
          <TargetSkills 
            img={iconGit}
            name="Git"
          />
          <TargetSkills 
            img={iconReact}
            name="React.js"
          />
          <TargetSkills 
            img={iconMySql}
            name="MySQL"
          />
        </div>

        <div className="extra-skills-content">
          <div className="extra-skills">
            <h4 className="subtitle">Herramientas</h4>
            <div className="extra-skills-target">
              <p className="skill-name">Figma</p>
              <p className="skill-name">Terminal</p>
              <p className="skill-name">GitHub</p>
              <p className="skill-name">IBM Rational SM</p>
              <p className="skill-name">MySQL Workbench</p>
            </div>
          </div>

          <div className="extra-skills">
            <h4 className="subtitle">Habilidades</h4>
            <div className="extra-skills-target">
              <p className="skill-name">Inglés básico</p>
              <p className="skill-name">Diseño UX/UI</p>
              <p className="skill-name">Análisis de sistemas</p>
              <p className="skill-name">Gestión de datos</p>
              <p className="skill-name">Redacción de CU</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}