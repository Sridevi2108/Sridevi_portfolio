import styles from './FooterStyles.module.css';

function Footer() {
  return (
    <section id="footer" className={styles.container}>
      <p>
        &copy; 2025 Sridevi R. <br />
        All rights reserved.
      </p>
      <p className={styles.thankyou}>
        Thanks for visiting my portfolio!
      </p>
    </section>
  );
}

export default Footer;