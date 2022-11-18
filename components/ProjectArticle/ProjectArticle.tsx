import React, { useCallback, useReducer, useState } from 'react';
import * as styles from './styles.css';
import { AnimatePresence } from 'framer-motion';
import StackItem from '../StackItem/StackItem';

interface Projects {
  project: {
    project: string;
    overall: string[];
    role?: string[];
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

interface Action {
  type: 'CLICK';
  id: string;
}

interface State {
  action: Action['type'] | '';
  id: string;
}

const initialState: State = {
  action: '',
  id: '',
};

const reducer: React.Reducer<State, Action> = (state, action) => {
  const reset = state.id === action.id && state.action === action.type;
  return reset ? initialState : { action: action.type, id: action.id };
};

const ProjectArticle: React.FC<Projects> = ({ project }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const onClickHandler = useCallback((id: string) => {
    dispatch({ type: 'CLICK', id: id });
  }, []);

  return (
    <section className={styles.articleWrap}>
      <div className={styles.projectTitle}>{project.project}</div>
      <ul className={styles.ulStyle}>
        {project.overall?.map(overall => (
          <li key={overall}>{overall}</li>
        ))}
      </ul>
      {project.role && (
        <>
          <div className={styles.subtitle}>Role. </div>
          <ul className={styles.ulStyle}>
            {project.role?.map(role => (
              <li key={role}>{role}</li>
            ))}
          </ul>
        </>
      )}
      <div className={styles.subtitle}>Stack.</div>
      <div>
        <AnimatePresence initial={false}>
          {project.stacks.map(stack => (
            <StackItem
              key={stack.stack}
              stack={stack.stack}
              reason={stack.reason}
              open={state.id === stack.stack}
              onClick={() => onClickHandler(stack.stack)}
              id={stack.stack}
            />
          ))}
        </AnimatePresence>
      </div>
      <div className={styles.subtitle}>Links.</div>
      <ul className={styles.ulStyle}>
        {project.links.map(link => (
          <li key={link.name}>
            <a
              className={styles.linkStyle}
              target="_blank"
              href={link.url}
              rel="noreferrer noopener"
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
