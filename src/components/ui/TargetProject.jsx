export function TargetProject({name, image, desc, demo, techs, github, linkDemo}){
  return(
    <article className="target-project" title={name}>
      <img src={image} alt="Imagen del proyecto" title={name} className="project-image" />

      <div className="project-description">
        <h4 className="subtitle" title={name}>
          <a href={github} title={name} target="_blank" rel="noopener noreferrer">{name}</a>
        </h4>
        <p className="text">{desc}</p>
      </div>

      <div className="project-btns">
        {demo ? <a href={linkDemo} title="Probar proyecto" target="_blank" rel="noopener noreferrer" className="demo-btn-true">Probar</a> : <a href="none" title="Probar proyecto" className="demo-btn-false">Probar</a>}
        <a href={github} title="Ver código" target="_blank" rel="noopener noreferrer" className="code-btn">Ver código</a>
      </div>

      <div className="project-technologies">
        {techs.map((tech) => (
          <img src={tech} alt="#" />
        ))}
      </div>
    </article>
  );
}