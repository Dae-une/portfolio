import React from 'react';
import * as styles from './styles.css';

const links = [{ text: 'GitHub.' }, { text: 'Velog.' }, { text: 'Blog.' }];

const Links = () => {
  return (
    <div className={styles.linkWrap}>
      <div>
        {links.map(link => (
          <div className={styles.link} key={link.text}>
            {link.text}
          </div>
        ))}
      </div>
      <div className={styles.emailText}>chablisbin94@gmail.com</div>
    </div>
  );
};

export default Links;
