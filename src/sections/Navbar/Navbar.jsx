import { useState } from 'react';
import styles from './NavbarStyles.module.css';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import { useTheme } from '../../common/ThemeContext';

function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const themeIcon = theme === 'light' ? sun : moon;
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => setMenuOpen((prev) => !prev);

  // Update these links as per your section ids
  const links = [
    { href: "#hero", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#coding-platforms", label: "Platforms" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <a href="#hero">Sridevi R.</a>
      </div>
      <button className={styles.menuBtn} onClick={handleMenuToggle} aria-label="Toggle navigation">
        <span className={menuOpen ? styles.menuOpen : ""}></span>
        <span className={menuOpen ? styles.menuOpen : ""}></span>
        <span className={menuOpen ? styles.menuOpen : ""}></span>
      </button>
      <ul className={`${styles.links} ${menuOpen ? styles.show : ""}`}>
        {links.map((link) => (
          <li key={link.href}>
            <a href={link.href} onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          </li>
        ))}
        <li>
          <img
            src={themeIcon}
            alt="Theme"
            className={styles.themeIcon}
            onClick={toggleTheme}
            tabIndex={0}
            onKeyDown={(e) => (e.key === 'Enter' ? toggleTheme() : null)}
          />
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;