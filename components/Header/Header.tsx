import React from 'react';

import * as styles from './styles.css';

const links = [
  { text: 'Home' },
  { text: 'About' },
  { text: 'Skill' },
  { text: 'Project' },
  { text: 'Concat' },
];

const Header = ({ visible }) => {
  return (
    <div className={styles.headerWrap({ visible })}>
      <div className={styles.navWrap}>
        <ul className={styles.TextLinkList}>
          {links.map(link => (
            <li className={styles.TextLink} key={link.text}>
              {link.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
