import React from 'react';
import { Link } from 'react-scroll';
import * as styles from './styles.css';

const links = [{ text: 'Profile' }, { text: 'About' }, { text: 'Project' }, { text: 'Concat' }];

const Header = ({ visible }) => {
  return (
    <div className={styles.headerWrap({ visible })}>
      <div className={styles.navWrap}>
        <ul className={styles.TextLinkList}>
          {links.map(link => (
            <li className={styles.TextLink} key={link.text}>
              <Link to={link.text} spy={true} smooth={true}>
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
