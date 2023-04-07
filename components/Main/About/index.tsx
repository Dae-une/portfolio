import React from "react";
import { Controller, Scene } from "react-scrollmagic";
import { Timeline, Tween } from "react-gsap";
import * as styles from "./styles.css";

import FadeIn from "../common/FadeIn";
import ProgressBar from "../common/ProgressBar";
import AboutArticle from "../AboutArticle";
import about from "../../../public/Static/About/AboutArticle";

function About() {
  return (
    <div id="About">
      <Controller>
        <Scene triggerHook="onLeave" duration={3400} pin>
          {(progress: number) => (
            <div>
              <div>
                <ProgressBar progress={progress} />
              </div>
              <section className={styles.aboutSection}>
                <div className={styles.TitleContainer}>
                  <FadeIn delay={0} duration={1000}>
                    <div className={styles.Title}>About Me.</div>
                  </FadeIn>
                </div>
                <div className={styles.ArticleContainer}>
                  <div className={styles.topDim} />
                  <Timeline totalProgress={progress} paused>
                    <Tween
                      from={{
                        transform: `translate3d(0,50%,0)`,
                      }}
                      to={{
                        transform: `translate3d(0,-50%,0)`,
                      }}
                    >
                      <div className={styles.ArticleWrapper}>
                        {about.map(data => (
                          <AboutArticle
                            key={data.title}
                            title={data.title}
                            desc={data.description}
                          />
                        ))}
                      </div>
                    </Tween>
                  </Timeline>
                </div>
              </section>
            </div>
          )}
        </Scene>
      </Controller>
    </div>
  );
}

export default About;
