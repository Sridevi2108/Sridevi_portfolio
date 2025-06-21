import styles from './AboutStyles.module.css';
import profileImg from '../../assets/hero-img.png'; // Replace with another image if preferred

function About() {
  return (
    <section id="about" className={styles.container}>
  <h2 className={styles.gradientTitle}>WHO I AM?</h2>


  <div className={styles.content}>
    <img src={profileImg} alt="Sridevi Raju" className={styles.image} />

    <div className={styles.text}>
  <p>
    I am <span>Sridevi Raju</span>, an aspiring software developer currently pursuing my MCA at
    <span> Coimbatore Institute of Technology</span>. I’m passionate about crafting intuitive user
    interfaces, developing smart and scalable systems, and building applications that make a
    real-world impact.
  </p>

  <p>
    I have hands-on experience in both <span>frontend</span> and <span>backend</span> development, and I
    love turning ideas into production-ready solutions. I actively contribute to
    <span> open-source projects</span> and I'm currently building real-world applications that blend
    <span> AI</span>, <span>React</span>, <span>Flask</span>, and <span>MongoDB</span> — including a mental health chatbot named
    <strong> AuraCare</strong> and a women’s safety platform called <strong>Serenova</strong>.
  </p>

  <p>
    With a deep interest in <span>AI/ML</span>, <span>full-stack web development</span>, and
    <span> problem solving</span>, I'm on a mission to grow every day and secure a role where I can
    learn, contribute, and thrive — in a company where innovation meets impact.
  </p>
</div>

  </div>
</section>

  );
}

export default About;
