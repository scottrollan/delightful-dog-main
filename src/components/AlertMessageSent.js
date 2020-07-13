import React from 'react';
import styles from './AlertMessageSent.module.css';

const AlertMessageSent = () => {
  return (
    <div id="alertMessageSent" className={styles.alertDiv}>
      <div className={[`${styles.alertMessageSent} ${styles.fadeIn}`]}>
        <i className="far fa-paper-plane"></i> Your message has been sent.
        <div>Thank you!</div>
      </div>
    </div>
  );
};

export default AlertMessageSent;
