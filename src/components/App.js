import '../styles/App.css';

import { NavMain } from './NavMain.jsx';
import { Home } from './Home.jsx';
import { AboutMe } from './AboutMe.jsx';
import { Skills } from './Skills.jsx';
import { Projects } from './Projects.jsx';
import { Contact } from './Contact.jsx';
import { Footer } from './Footer.jsx';

function App() {
  return(
    <div className="App">

      <NavMain /> 
      <Home />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
      <Footer />

    </div>
  );
}

export default App;