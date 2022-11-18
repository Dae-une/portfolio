import React from 'react';
import * as styles from './styles.css';
import { Controller, Scene } from 'react-scrollmagic';

import FadeIn from '../common/FadeIn/FadeIn';
import ProgressBar from '../common/ProgressBar/ProgressBar';
import AboutArticle from '../AboutArticle/AboutArticle';
import { about } from '../../public/Static/About/AboutArticle';
import { Timeline, Tween } from 'react-gsap';

const About = () => {
  return (
    <div id="About">
      <Controller>
        <Scene triggerHook="onLeave" duration={1000} pin>
          {(progress: number) => (
            <div>
              <div>
                <ProgressBar progress={progress} />
              </div>
              <section className={styles.aboutSection}>
                <div className={styles.topDim}></div>
                <div className={styles.textWrap}>
                  <FadeIn delay={0} duration={1000}>
                    <div className={styles.aboutTitle}>About Me.</div>
                  </FadeIn>
                </div>
                <Timeline totalProgress={progress} paused>
                  <Tween
                    from={{ transform: 'translate3d(0,0,0)' }}
                    to={{ transform: 'translate3d(0,-30%,0)' }}
                  >
                    <div className={styles.ArticleWrap}>
                      {about.map(data => (
                        <AboutArticle key={data.title} title={data.title} desc={data.description} />
                      ))}
                    </div>
                  </Tween>
                </Timeline>
              </section>
            </div>
          )}
        </Scene>
      </Controller>
    </div>
  );
};

export default About;
