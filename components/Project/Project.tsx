import React from 'react';
import { Controller, Scene } from 'react-scrollmagic';
import * as styles from './styles.css';
import FadeIn from '../common/FadeIn/FadeIn';
import ProgressBar from '../common/ProgressBar/ProgressBar';
import { Timeline, Tween } from 'react-gsap';
import { projects } from '../../public/Static/Project/ProjectArticle';
import ProjectArticle from '../ProjectArticle/ProjectArticle';
import useWindowInnerWidth from '../../hooks/useWindowInnerWidth';
import useWindowInnerHeight from '../../hooks/useWindowInnerHeight';

const Project = () => {
  const viewportWidth = useWindowInnerWidth(-1);
  const viewportHeight = useWindowInnerHeight(-1);
  const ratio = viewportWidth / viewportHeight;

  const articleTranslateYOffset =
    ratio > 1.95
      ? '-70.2%'
      : ratio > 1.9
      ? '-81.05%'
      : ratio > 1.7
      ? '-75%'
      : ratio >= 1.54
      ? '-74.8%'
      : ratio >= 0.95
      ? '-77%'
      : ratio > 0.55
      ? '-77%'
      : '-79%';

  return (
    <div id="Project">
      <Controller>
        <Scene pin triggerHook="onLeave" duration={'100%'}>
          {(progress: number) => (
            <div>
              <ProgressBar progress={progress} />
              <section className={styles.projectSection}>
                <div className={styles.textWrap}>
                  <FadeIn delay={0} duration={1000}>
                    <div className={styles.projectTitle}>Project.</div>
                  </FadeIn>
                </div>
                <Timeline totalProgress={progress} paused>
                  <Tween
                    from={{ transform: 'translate3d(0,0,0)' }}
                    to={{ transform: `translate3d(0,${articleTranslateYOffset},0)` }}
                  >
                    <div>
                      {projects.map(project => (
                        <ProjectArticle key={project.project} project={project} />
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

export default Project;
