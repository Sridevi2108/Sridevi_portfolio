import styles from "./AboutStyles.module.css";
import profileImg from "../../assets/hero-img.png";

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
            I am <strong>Sridevi Raju</strong>, a Software Engineer with a
            strong foundation in <span>Java</span>, <span>Python</span>,
            <span> C</span>, <span>React</span>, <span>Flask</span>,
            <span> SQL</span>, and
            <span> full-stack application development</span>. I completed my
            <strong> Master of Computer Applications (MCA)</strong> from
            <strong> Coimbatore Institute of Technology</strong> with a
            <strong> 9.59 CGPA</strong> and was honored with the
            <strong> Best Outgoing Student Award</strong>.
          </p>

          <p>
            I have professional experience at
            <strong> ICU Medical</strong> and
            <strong> Digiverifier</strong>, where I gained hands-on experience
            in software engineering, automation, and enterprise applications.
            These opportunities strengthened my analytical thinking,
            problem-solving abilities, and understanding of real-world software
            development practices.
          </p>

          <p>
            I enjoy building innovative applications that solve real-world
            problems. My projects include <strong>AuraCare</strong>, an
            AI-powered multilingual mental health chatbot, and
            <strong> Serenova</strong>, an AI-powered women's safety platform,
            developed using <span>React</span>, <span>Flask</span>,
            <span> MongoDB</span>, <span>LLaMA</span>, <span>Rasa</span>, and
            modern machine learning technologies.
          </p>

          <p>
            I am passionate about software engineering, backend development,
            artificial intelligence, and modern web technologies. I enjoy
            learning new technologies, solving challenging problems, and
            building scalable applications that create meaningful impact. I look
            forward to contributing, learning, and growing as a Software
            Engineer while developing innovative software solutions.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
