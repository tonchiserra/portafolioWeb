export function TargetSkills({img, name}){
  return(
    <div className="target-skills">
      <img src={img} alt={name} className="skill-image" />
      <p className="skill-name">{name}</p>
    </div>
  );
}