import React from 'react';
import * as styles from './styles.css';

import { Timeline, Tween } from 'react-gsap';
const Text = {
  title: '성장에 진심인 개발자',
  name: '김대은 입니다.',
  subTitle: '프론트엔드 개발자를 꿈꾸고 있습니다.\n',
};

const ProfileText = ({ progress }) => {
  return (
    <div className={styles.TextContainer}>
      <div className={styles.TitleContainer}>
        <Timeline
          totalProgress={progress}
          paused
          target={
            <div className={styles.TitleWrap}>
              <div className={styles.titleText}>{Text.title}</div>
              <div className={styles.nameText}>{Text.name}</div>
              <p className={styles.subTitleText}>{Text.subTitle}</p>
            </div>
          }
        >
          <Tween
            from={{
              backgroundImage:
                'linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 100%)',
            }}
            to={{
              backgroundImage: 'linear-gradient(180deg, #FF6F0F 0%, #8482F2 100%)',
            }}
          ></Tween>
        </Timeline>
      </div>
    </div>
  );
};

export default ProfileText;
