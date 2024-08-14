import React, { useState } from 'react';
import logo from '../assets/logo.png';
import styles from '../styles/Header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <a href='#home'><img src={logo} alt="Logo" className={styles.logo} /></a>
      </div>
      <div className={styles.hamburger} onClick={toggleMenu}>
        <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} size="2x" />
      </div>
      <div className={`${styles.navWrapper} ${menuOpen ? styles.showMenu : ''}`}>
      <div className={styles.closeIcon} onClick={toggleMenu}>
            <FontAwesomeIcon icon={faTimes} size="2x" />
          </div>
        <nav className={styles.nav}>
          <a href="#home" onClick={toggleMenu}>Home</a>
          <a href="#about" onClick={toggleMenu}>About</a>
          <a href="#projects" onClick={toggleMenu}>Projects</a>
        </nav>
        <div className={styles.socialLinks}>
          <a href="https://www.linkedin.com/in/sebastian-balogh/" target='_blank' className={styles.linkedin}>
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a href="https://github.com/baloghtelli" target='_blank' className={styles.github}>
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
        </div>
        <a href="#contact" className={styles.connectBtn} onClick={toggleMenu}>Let's Connect</a>
      </div>
    </header>
  );
}

export default Header;
