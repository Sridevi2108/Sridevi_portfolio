import styles from './SkillsStyles.module.css';
import checkMarkIconDark from '../../assets/checkmark-dark.svg';
import checkMarkIconLight from '../../assets/checkmark-light.svg';
import SkillList from '../../common/SkillList';
import { useTheme } from '../../common/ThemeContext';

function Skills() {
  const { theme } = useTheme();
  const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;

  return (
    <section id="skills" className={styles.container}>
      <h2 className={styles.gradientTitle}>Skill set</h2>
      

      {/* Languages */}
      <h2 className={styles.categoryTitle}>Languages</h2>
      <ul className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Python" />
        <SkillList src={checkMarkIcon} skill="Java" />
        <SkillList src={checkMarkIcon} skill="C" />
        <SkillList src={checkMarkIcon} skill="JavaScript" />
      </ul>

      {/* Databases */}
      <h2 className={styles.categoryTitle}>Databases</h2>
      <ul className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="MYSQL" />
        <SkillList src={checkMarkIcon} skill="MongoDB" />
      </ul>

      {/* Technologies & Frameworks */}
      <h2 className={styles.categoryTitle}>Technologies & Frameworks</h2>
      <ul className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Flask" />
        <SkillList src={checkMarkIcon} skill="React" />
        <SkillList src={checkMarkIcon} skill="Docker" />
        <SkillList src={checkMarkIcon} skill="TensorFlow" />
        <SkillList src={checkMarkIcon} skill="scikit-learn" />
      </ul>

      {/* Tools */}
      <h2 className={styles.categoryTitle}>Tools</h2>
      <ul className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Git" />
        <SkillList src={checkMarkIcon} skill="GitHub" />
        <SkillList src={checkMarkIcon} skill="VS Code" />
        <SkillList src={checkMarkIcon} skill="PyCharm" />
        <SkillList src={checkMarkIcon} skill="Postman" />
      </ul>
    </section>
  );
}

export default Skills;
