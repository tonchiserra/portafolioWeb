import '../styles/Skills.css';
import { TargetSkills } from './ui/TargetSkills.jsx';
import { TargetExtraSkills } from './ui/TargetExtraSkills.jsx';

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
import iconFormik from '../assets/formik.png';
import iconRouter from '../assets/router.svg';
import iconRedux from '../assets/redux.svg';
import iconCommercejs from '../assets/commercejs.svg';
import iconJava from '../assets/java.svg';

export function Skills(){
  return(
    <section id="skills" className="skills">
      <h3 className="title">Tecnologías que aplico</h3>
      <div className="skills-content">

        <div className="skills-target-content">
          <TargetSkills img={iconCss} name="CSS" />
          <TargetSkills img={iconJs} name="JavaScript" />
          <TargetSkills img={iconRedux} name="Redux" />
          <TargetSkills img={iconReact} name="React.js" />
          <TargetSkills img={iconJava} name="Java" />
          <TargetSkills img={iconMySql} name="MySQL" />
        </div>

        <div className="extra-skills-content">
          <TargetExtraSkills img={iconGit} name="Git" />
          <TargetExtraSkills img={iconCommercejs} name="Commerce.js" />
          <TargetExtraSkills img={iconRouter} name="React Router" />
          <TargetExtraSkills img={iconStyCom} name="Styled Components" />
          <TargetExtraSkills img={iconFormik} name="Formik" />
          <TargetExtraSkills img={iconFigma} name="Figma" />
          <TargetExtraSkills img={iconHtml} name="HTML" />
          <TargetExtraSkills img={iconAxure} name="Axure RP" />        
          <TargetExtraSkills img={iconIBMRSM} name="IBM Rational SM" />         
          <TargetExtraSkills img={iconWorkbench} name="MySQL Workbench" />          
          <TargetExtraSkills img={iconTerminal} name="Terminal" />
        </div>
        
      </div>
    </section>
  );
}