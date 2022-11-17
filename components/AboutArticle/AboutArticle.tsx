import React from 'react';
import * as styles from './style.css';

const AboutArticle = ({ title, desc }) => {
  return (
    <div>
      <div className={styles.Title}>{title}</div>
      <div className={styles.Desc}>{desc}</div>
    </div>
  );
};

export default AboutArticle;
