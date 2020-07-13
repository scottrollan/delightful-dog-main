import React from 'react';
import styles from './Footer.module.css';
import SocialFollow from './SocialFollow';

const Footer = () => {
  return (
    <div className={styles.root}>
      <SocialFollow />

      <div className={styles.text}></div>
      <span>© 2020 Delightful Dog, LLC. All rights reserved</span>
    </div>
  );
};

export default Footer;