import React, { useCallback, useState } from 'react';
import * as styles from './styles.css';
import { AnimatePresence } from 'framer-motion';
import StackItem from '../StackItem/StackItem';

interface Projects {
  project: {
    project: string;
    overall: string[];
    role: string[];
    stacks: {
      stack: string;
      reason: string;
    }[];
    links: {
      name: string;
      url: string;
    }[];
  };
}

const ProjectArticle: React.FC<Projects> = ({ project }) => {
  const [open, setOpen] = useState(false);
  const onClickHandler = useCallback(() => {
    setOpen(prev => !prev);
  }, []);
  return (
    <section className={styles.articleWrap}>
      <div className={styles.projectTitle}>{project.project}</div>
      <ul className={styles.ulStyle}>
        {project.overall.map(overall => (
          <li key={overall}>{overall}</li>
        ))}
      </ul>
      <div className={styles.subtitle}>역할</div>
      <ul className={styles.ulStyle}>
        {project.role.map(role => (
          <li key={role}>{role}</li>
        ))}
      </ul>
      <div className={styles.subtitle}>스택</div>
      <div>
        <AnimatePresence initial={false}>
          {project.stacks.map(stack => (
            <StackItem
              key={stack.stack}
              stack={stack.stack}
              reason={stack.reason}
              open={open}
              onClick={onClickHandler}
              id={stack.stack}
            />
          ))}
        </AnimatePresence>
      </div>
      <div className={styles.subtitle}>링크</div>
      <ul className={styles.ulStyle}>
        {project.links.map(link => (
          <li key={link.name}>
            <a
              className={styles.linkStyle}
              target="_blank"
              href={link.url}
              rel="noreferrer noopener"
              onClick={onClickHandler}
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectArticle;
