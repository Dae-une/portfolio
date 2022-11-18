import React from 'react';
import { Timeline, Tween } from 'react-gsap';
import * as style from './styles.css';

const ProgressBar = ({ progress }) => {
  return (
    <div className={style.ProgressBar}>
      <Timeline totalProgress={progress} paused>
        <Tween from={{ width: '0%' }} to={{ width: '100%' }}>
          <div className={style.Progress}></div>
        </Tween>
      </Timeline>
    </div>
  );
};

export default ProgressBar;
