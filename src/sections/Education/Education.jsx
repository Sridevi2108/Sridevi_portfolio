// Education.jsx
import styles from './EducationStyles.module.css';

const educationData = [
  {
    title: 'MCA - Master of Computer Applications',
    institution: 'Coimbatore Institute of Technology',
    duration: 'Sep 2024 – May 2026',
    grade: 'CGPA: 9.5 / 10',
    icon: 'fa-solid fa-graduation-cap',
    side: 'right', // Right-aligned
  },
  {
    title: 'B.Sc – Computer Systems and Design',
    institution: 'PSG College Of Technology',
    duration: 'Sep 2020 – May 2023',
    grade: 'CGPA: 8.57 / 10',
    icon: 'fa-solid fa-laptop-code',
    side: 'left', // Left-aligned
  },
  {
    title: 'High School',
    institution: 'Dr VGN Matric Hr Sec School',
    duration: 'May 2019 – April 2020',
    grade: 'Marks: 85.5%',
    icon: 'fa-solid fa-school',
    side: 'right', // Right-aligned
  },
  {
    title: 'SSLC',
    institution: 'Dr VGN Matric Hr Sec School',
    duration: 'May 2017 – April 2018',
    grade: 'Marks: 94.2%',
    icon: 'fa-solid fa-book',
    side: 'left', // Left-aligned
  },
];

function Education() {
  return (
    <section id="education" className={styles.container}>
      <h2 className={styles.gradientTitle}>Education</h2>
      <div className={styles.timeline}>
        {educationData.map((item, idx) => (
          <div key={idx} className={`${styles.entry} ${styles[item.side]}`}>
            <div className={styles.icon}>
              <i className={item.icon}></i>
            </div>
            <div className={styles.content}>
              <div className={styles.card}>
                <h3 className={styles.title}>{item.title}</h3>
                <p className={styles.institution}>{item.institution}</p>
                <div className={styles.details}>
                  <span className={styles.duration}>{item.duration}</span>
                  <span className={styles.grade}>{item.grade}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;