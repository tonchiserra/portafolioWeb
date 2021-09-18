import '../styles/Skills.css';
import { TargetSkills } from './ui/TargetSkills.jsx';
import { TargetExtraSkills } from './ui/TargetExtraSkills.jsx';
import { TargetExtraSkills2 } from './ui/TargetExtraSkills.jsx';

import iconHtml from '../assets/html5.svg';
import iconCss from '../assets/css3.svg';
import iconJs from '../assets/javascript.svg';
import iconGit from '../assets/git.svg';
import iconReact from '../assets/react.svg';
import iconMySql from '../assets/mysql.svg';
import iconStyCom from '../assets/styled-components.svg';
import iconFigma from '../assets/figma.svg';
import iconAxure from '../assets/axure.svg';
import iconIBMRSM from '../assets/img-rsm.svg';
import iconWorkbench from '../assets/workbench.svg';
import iconTerminal from '../assets/terminal.svg';

export function Skills(){
  return(
    <section id="skills" className="skills">
      <h3 className="title">Tecnologías que aplico</h3>
      <div className="skills-content">

        <div className="skills-target-content">
          <TargetSkills img={iconHtml} name="HTML" />
          <TargetSkills img={iconCss} name="CSS" />
          <TargetSkills img={iconJs} name="JavaScript" />
          <TargetSkills img={iconGit} name="Git" />
          <TargetSkills img={iconReact} name="React.js" />
          <TargetSkills img={iconMySql} name="MySQL" />
        </div>

        <div className="extra-skills-content">
          <TargetExtraSkills img={iconStyCom} name="Styled Components" />
          <TargetExtraSkills img={iconFigma} name="Figma" />
          <TargetExtraSkills img={iconAxure} name="Axure RP" />        
          <TargetExtraSkills img={iconIBMRSM} name="IBM Rational SM" />         
          <TargetExtraSkills img={iconWorkbench} name="MySQL Workbench" />          
          <TargetExtraSkills img={iconTerminal} name="Terminal" />
        </div>

        <div className="extra-skills-content">
          <TargetExtraSkills2 name="Inglés básico" />
          <TargetExtraSkills2 name="Diseño UX/UI" />
          <TargetExtraSkills2 name="Análisis de sistemas" />
          <TargetExtraSkills2 name="Gestión de datos" />
          <TargetExtraSkills2 name="Redacción de CU" />
        </div>
        
      </div>
    </section>
  );
}