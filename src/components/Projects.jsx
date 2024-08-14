import React from 'react';
import styles from '../styles/Projects.module.css';
import resume from '../assets/resume.jpg';
import pokemon from '../assets/pokemon.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

const Projects = () => {

  return (
    <div id="projects" className={styles.projectsContainer}>
      <h2 className={styles.projectsTitle}>My Projects</h2>
      <div className={styles.projectsGrid}>
        <div className={styles.projectItem}>
          <img src={resume} className={styles.projectPicture} alt="Resume Builder Project" />
          <div className={styles.overlay}>
            <div className={styles.textContainer}>
              <h3>CV Creator App</h3>
              <p>A comprehensive application designed to help users create and view a formatted CV with their personal, educational, and practical experience details.</p>
              <a href='https://my-cv-creator-app.netlify.app/' className={styles.projectLink} target='_blank'><FontAwesomeIcon icon={faArrowUpRightFromSquare}/></a>
            </div>
          </div>
        </div>
        <div className={styles.projectItem}>
          <img src={pokemon} className={styles.projectPicture} alt="Pokemon Memory Game Project" />
          <div className={styles.overlay}>
            <div className={styles.textContainer}>
              <h3>Pokémon Memory Game</h3>
              <p>A memory card game where you press on Pokémon cards. The goal is to score as many points as possible without clicking on the same Pokémon more than once.</p>
              <a href='https://poke-card-memory.netlify.app/' className={styles.projectLink} target='_blank'><FontAwesomeIcon icon={faArrowUpRightFromSquare}/></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;