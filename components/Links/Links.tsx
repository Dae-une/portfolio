import React from "react";
import * as styles from "./styles.css";

const links = [
  { text: "GitHub.", url: "https://github.com/Dae-une" },
  { text: "Velog.", url: "https://velog.io/@dae_eun2" },
  { text: "Blog.", url: "https://daeeun-dev.vercel.app/" },
];

function Links() {
  return (
    <div className={styles.linkWrap}>
      <div>
        {links.map(link => (
          <div key={link.text}>
            <a
              className={styles.link}
              target="_blank"
              href={link.url}
              rel="noreferrer noopener"
            >
              {link.text}
            </a>
          </div>
        ))}
      </div>
      <div className={styles.emailText}>chablisbin94@gmail.com</div>
    </div>
  );
}

export default Links;
