import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Landing.module.css';

const Landing = () => {
  const src =
    'https://cdn.sanity.io/images/3g1lf71y/production/99f49e5dbf7f42961876d088c801ebf43ab9d5b7-6016x4016.jpg';

  return (
    <section className={styles.Landing}>
      <div className={styles.flexDiv}>
        <img src={src} alt="" className={styles.img} />
        <div className={styles.heroContainer}>
          <h1 className={styles.h1}>Effective Dog Training.</h1>
          <h1 className={styles.h1}> Real Behavior Solutions.</h1>
          <p className={styles.centerThis}>
            <Link className={styles.button} to="/services">
              Our Services
            </Link>
            <Link className={styles.button} to="/training">
              Start Training
            </Link>
          </p>
        </div>
      </div>
      {/* <Services /> */}
    </section>
  );
};

export default Landing;
