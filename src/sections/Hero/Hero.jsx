import { useState, useEffect } from 'react';
import styles from './HeroStyles.module.css';
import heroImg from '../../assets/hero-img.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import twitterLight from '../../assets/twitter-light.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import Emaillight from '../../assets/email-white.jpg';
import Emaildark from '../../assets/email-dark.png';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/cv.pdf';
import { useTheme } from '../../common/ThemeContext';

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;
  const emailIcon = theme === 'light' ? Emaillight : Emaildark;

  const verbs = ["creates", "develops", "contributes"];
  const subjects = [
    "interactive web applications.",
    "cutting-edge AI models.",
    "open source projects."
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % verbs.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <div className={styles.heroWrapper}>
          <img
          src={heroImg}
          className={styles.hero}
          alt="Picture of Sridevi"
        />
      </div>
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>

      <div className={styles.info}>
        <h1>Hi, I'm</h1>
        <h1 className={styles.gradientText}>Sridevi Raju</h1>


        <div className={styles.description}>
          <p>A software developer</p>
          <p>
            who <span className={styles.verb}>{verbs[index]}</span>
          </p>
          <p className={styles.highlight}>{subjects[index]}</p>
        </div>

        <span>
          <a href="https://www.linkedin.com/in/sridevi21/" target="_blank" rel="noopener noreferrer">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
          <a href="https://github.com/Sridevi2108/" target="_blank" rel="noopener noreferrer">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a href="mailto:sridevi21082003@gmail.com" target="_blank" rel="noopener noreferrer">
          <span className={styles.emailCircle}>
          <img src={emailIcon} alt="Email icon" />
          </span>
        </a>
        </span>

        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
