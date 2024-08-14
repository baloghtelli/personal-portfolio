import React, { useState } from 'react';
import styles from '../styles/About.module.css';
import profilePic from '../assets/profilePic.jpg';
import figmaLogo from '../assets/figmaLogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';

const About = () => {
  const [activeTab, setActiveTab] = useState('skills');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div id="about" className={styles.aboutContainer}>
      <div className={styles.contentWrapper}>
        <div className={styles.row}>
          <div className={styles.imageContainer}>
            <img src={profilePic} alt='Picture of me' />
          </div>
          <div className={styles.textContainer}>
            <h2 className={styles.aboutTitle}>About Me</h2>
            <p className={styles.aboutText}>
              In my dynamic journey, I've cultivated a balanced lifestyle, merging academic pursuits, physical
              well-being, and diverse recreational interests. A passionate web development enthusiast, I find joy in coding
              and designing web applications, navigating the challenges with enthusiasm.
            </p>

            <div className={styles.tabNav}>
              <p
                className={`${styles.tabLink} ${activeTab === 'skills' ? styles.activeTabLink : ''}`}
                onClick={() => handleTabClick('skills')}>
                Skills
              </p>
              <p
                className={`${styles.tabLink} ${activeTab === 'education' ? styles.activeTabLink : ''}`}
                onClick={() => handleTabClick('education')}>
                Education
              </p>
              <p
                className={`${styles.tabLink} ${activeTab === 'certificates' ? styles.activeTabLink : ''}`}
                onClick={() => handleTabClick('certificates')}>
                Certificates
              </p>
            </div>
            <div className={`${styles.tabContent} ${activeTab === 'skills' ? styles.activeTabContent : ''}`}>
              <ul className={styles.skillsList}>
                <li><FontAwesomeIcon icon={faHtml5} className={styles.htmlLogo} alt="HTML Logo" />- Semantic Markup, Forms and Validation, Accessibility</li>
                <li><FontAwesomeIcon icon={faCss3Alt} className={styles.cssLogo} alt="CSS Logo" />- Responsive Design, Flexbox and Grid, Animations and Transitions</li>
                <li><FontAwesomeIcon icon={faJsSquare} className={styles.scriptLogo} alt="JavaScript Logo" />-ES6+ Features, DOM Manipulation, Asynchronous Programming</li>
                <li><FontAwesomeIcon icon={faReact} className={styles.reactLogo} alt="React Logo" />- Component-Based Architecture, Hooks, State Management</li>
                <li><img src={figmaLogo} className={styles.figmaLogo} alt='Figma Logo' />- UI/UX Design, Prototyping, Collaboration</li>
              </ul>
            </div>
            <div className={`${styles.tabContent} ${activeTab === 'education' ? styles.activeTabContent : ''}`}>
              <ul className={styles.educationList}>
                <li><span>Stockholm University</span><br />Bachelor's degree in Computer Science (2019 - 2022)</li>
                <li><span>Malmö University</span><br />Interaction Design and Media (11 / 2023 - 01 / 2024)</li>
                <li><span>Uppsala University</span><br />Dynamic Web Applications (01 / 2024 - 06 / 2024)</li>
                <li><span>Umeå University</span><br />CSS-based Web Design (01 / 2024 - 03 / 2024)</li>
                <li><span>Umeå University</span><br />Web Design with JavaScript and Document Object Model (03 / 2024 - 06 / 2024)</li>
              </ul>
            </div>
            <div className={`${styles.tabContent} ${activeTab === 'certificates' ? styles.activeTabContent : ''}`}>
              <ul className={styles.certificatesList}>
                <li><span>Udemy</span><br />Complete Web & Mobile Designer in 2023: UI/UX, Figma +HTML, and CSS (09 / 2023 - 10 / 2023)</li>
                <li><span>freeCodeCamp</span><br />Responsive Web Design (07 / 2023 - 08 / 2023)</li>
                <li><span>freeCodeCamp</span><br />JavaScript Algorithms and Data Structures (06 / 2024 - 07 / 2024)</li>
                <li><span>Codeacademy</span><br />Learn React (07 / 2024 - 08 / 2024)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

}

export default About;
