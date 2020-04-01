import React from 'react'
import styles from './DogDivider.module.css'
import srcDog from "../assets/dogOnly.png";

const DogDivider = () => {
    return (
        <div className={styles.dogdivider}><div className={styles.dogdividermask}></div><span><img src={srcDog} className={styles.dogPic} alt=''/></span></div>
    )
}

export default DogDivider

