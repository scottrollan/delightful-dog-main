import React from 'react';
import styles from './DogDivider.module.css';
import srcDog from '../assets/dogOnly.png';

const DogDivider = (props) => {
  return (
    <div className={styles.dogdivider} style={props.style}>
      <div className={styles.dogdividermask}></div>
      <span>
        <img src={srcDog} className={styles.dogPic} alt="" />
      </span>
    </div>
  );
};

export default DogDivider;
