export function TargetAboutMe({icon, subtitle, text}){
  return(
    <div className="about-me-target">
      <img src={icon} alt="about-me-icon" className="about-me-icon" />
      <h4 className="subtitle">{subtitle}</h4>
      {text}
    </div>
  );
}