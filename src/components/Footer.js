import React from 'react';
import styles from './Footer.module.css';
import SocialFollow from './SocialFollow';

const Footer = () => {
  const today = new Date();
  const thisYear = today.getFullYear();
  return (
    <div className={styles.root}>
      <SocialFollow />

      <div className={styles.text}></div>
      <span>© {thisYear} Delightful Dog, LLC. All rights reserved</span>
    </div>
  );
};

export default Footer;
