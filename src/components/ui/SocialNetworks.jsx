import twitterIcon from '../../assets/twitter.svg';
import instagramIcon from '../../assets/instagram.svg';
import githubIcon from '../../assets/github.svg';
import linkedinIcon from '../../assets/linkedin.svg';

export function SocialNetworks(){
  return(
    <div className="social-networks">
      <a href="https://www.twitter.com/tonchiserra" target="_blank" title="Twitter" rel="noopener noreferrer" className="social-networks-item"><img src={twitterIcon} alt="twitter-icon" /></a>
      <a href="https://www.instagram.com/tonchiserra" target="_blank" title="Instagram" rel="noopener noreferrer" className="social-networks-item"><img src={instagramIcon} alt="instagram-icon" /></a>
      <a href="https://www.github.com/tonchiserra" target="_blank" title="GitHub" rel="noopener noreferrer" className="social-networks-item"><img src={githubIcon} alt="github-icon" /></a>
      <a href="https://www.linkedin.com/in/serragonzalo/" target="_blank" title="LinkedIn" rel="noopener noreferrer" className="social-networks-item"><img src={linkedinIcon} alt="linkedin-icon" /></a>
    </div>
  );
}