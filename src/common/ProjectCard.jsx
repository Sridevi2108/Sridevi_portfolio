import React from 'react';
import styles from './ProjectCard.module.css';

function ProjectCard({ src, link, h3, p }) {
  return (
    <div className={styles.card}>
      <img src={src} alt={h3} className={styles.image} />
      <h3 className={styles.title}>{h3}</h3>
      <p className={styles.subtitle}>{p}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.button}
      >
        View Code →
      </a>
    </div>
  );
}

export default ProjectCard;
