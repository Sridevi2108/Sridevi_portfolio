import styles from './ProjectsStyles.module.css';
import serenova from '../../assets/serenova.png';
import yumshare from '../../assets/yumShare.png';
import Auracare from '../../assets/Auracare.png';
import ProjectCard from '../../common/ProjectCard';
import restaurant from '../../assets/restaurant.png';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h2 className={styles.gradientTitle}>Projects</h2>

      <div className={styles.projectsContainer}>
        <ProjectCard
          src={Auracare}
          link="https://github.com/Sridevi2108/Auracare"
          h3="Auracare"
          p="Mental Health Application"
        />
        <ProjectCard
          src={serenova}
          link="https://github.com/Sridevi2108/serenova-safe-pathways_ML"
          h3="Serenova-safe-pathways"
          p="Women's Safety Application"
        />
        <ProjectCard
          src={restaurant}
          link="https://github.com/Sridevi2108/Restaurant_Recommendation_System"
          h3="Restaurant Recommendation"
          p="Recommendation System"
        />
        <ProjectCard
          src={yumshare}
          link="https://github.com/Sridevi2108/YumShare"
          h3="YumShare"
          p="Social Media App for Foodies"
        />
      </div>

      <a
        href="https://github.com/Sridevi2108?tab=repositories"
        className={styles.moreProjectsBtn}
        target="_blank"
        rel="noopener noreferrer"
      >
        View more projects on GitHub →
      </a>
    </section>
  );
}

export default Projects;
