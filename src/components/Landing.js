import React from "react";
import styles from "./Landing.module.css";
import Services from "./Services";


const Landing = () => {
  const src =
    "https://cdn.sanity.io/images/3g1lf71y/production/99f49e5dbf7f42961876d088c801ebf43ab9d5b7-6016x4016.jpg";
    
  return (
    <section className={styles.Landing}>
      <div className={styles.flexDiv}>
        <img src={src} alt="" className={styles.img} />
        <div className={styles.heroContainer}>
          <h1 className={styles.h1}>Effective Dog Training.</h1>
          <h1 className={styles.h1}> Real Behavior Solutions.</h1>
          <p className={styles.centerThis}>
            <a className={styles.button} href="/services">
              Our Services
            </a>{" "}
            <a className={styles.button} href="/training">
              Start Training
            </a>
          </p>
        </div>
      </div>

      <Services />
    </section>
  );
};

export default Landing;
