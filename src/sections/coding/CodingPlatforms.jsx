import styles from './CodingPlatformsStyles.module.css';
// If you have SVG/PNG logos, import them here and add to the array
import leetcodeIcon from '../../assets/leetcode.png';
import hackerrankIcon from '../../assets/hackerrank.jpg';
import gfgIcon from '../../assets/gfg.png';
import githubIcon from '../../assets/github.jpg';   

const codingPlatforms = [
  {
    name: "LeetCode",
    username: "SRI21dev2003",
    link: "https://leetcode.com/u/SRI21dev2003/",
    icon: leetcodeIcon
  },
  {
    name: "HackerRank",
    username: "sridevi21082003",
    link: "https://www.hackerrank.com/profile/sridevi21082003",
    icon: hackerrankIcon
  },
  {
    name: "GeeksforGeeks",
    username: "sridevi2o07a",
    link: "https://www.geeksforgeeks.org/user/sridevi2o07a/",
    icon: gfgIcon
  },
  {
    name: "GitHub",
    username: "Sridevi2108",
    link: "https://github.com/Sridevi2108",
    icon: githubIcon
  }
];

function CodingPlatforms() {
  return (
    <section id="coding-platforms" className={styles.container}>
      <h2 className={styles.gradientTitle}>Coding Platforms</h2>
      <div className={styles.platformsList}>
        {codingPlatforms.map((platform, idx) => (
          <a
            key={idx}
            href={platform.link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.platformCard}
          >
            {
            <img src={platform.icon} alt={platform.name + " icon"} className={styles.icon} />
            }
            <div>
              <h3 className={styles.name}>{platform.name}</h3>
              <p className={styles.username}>{platform.username}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default CodingPlatforms;