import styles from './AboutStyles.module.css';
import profileImg from '../../assets/hero-img.png';

function About() {
  return (
    <section id="about" className={styles.container}>
      <h2 className={styles.gradientTitle}>About Me</h2>

      <div className={styles.content}>
        <img
          src={profileImg}
          alt="Sridevi Raju"
          className={styles.image}
        />

        <div className={styles.text}>
          <p>
            I am <span>Sridevi Raju</span>, a software developer with a strong
            foundation in <span>Python</span>,<span>Java</span>,
            <span> React</span>, <span>Flask</span>, and
            <span> full-stack web development</span>. I completed my
            <span> Master of Computer Applications (MCA)</span> from
            <span> Coimbatore Institute of Technology</span> with a
            <span> 9.59 CGPA</span> and was honored with the
            <strong> Best Outgoing Student Award</strong>.
          </p>

          <p>
            I have professional experience at <span>ICU Medical</span> and
            <span> Digiverifier</span>, where I worked on software validation,
            automation, and business solutions. These experiences strengthened
            my problem-solving skills and exposed me to real-world software
            development practices.
          </p>

          <p>
            I enjoy building impactful applications that solve real-world
            problems. My projects include <strong>AuraCare</strong>, an
            AI-powered multilingual mental health chatbot, and
            <strong> Serenova</strong>, an AI-based women's safety platform,
            developed using <span>React</span>, <span>Flask</span>,
            <span> MongoDB</span>, <span>LLaMA</span>,
            <span> Rasa</span>, and machine learning techniques.
          </p>

          <p>
            I am passionate about software engineering, backend development, and
            modern web technologies. I am currently seeking full-time
            <span> Software Engineer</span>,
            <span> Java Developer</span>,
            <span> Python Developer</span>, or
            <span> Full Stack Developer</span> opportunities in
            <span> Chennai</span> or <span>Remote</span>, where I can
            contribute, learn, and grow while building meaningful software.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
