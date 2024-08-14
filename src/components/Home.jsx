import React from 'react';
import styles from '../styles/Home.module.css';

const Home = () => {

  return (
    <div id='home' className={styles.homeContainer}>
      <div className={styles.greetingContainer}>
        <p className={styles.greeting}>Hi, my name is</p>
        <h1 className={styles.name}>Sebastian Balogh.</h1>
        <h2 className={styles.intro}>A web developer ready to bring your ideas to life.</h2>
      </div>
    </div>
  );
}

export default Home;