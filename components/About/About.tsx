import React from "react";
import { Controller, Scene } from "react-scrollmagic";
import { Timeline, Tween } from "react-gsap";
import * as styles from "./styles.css";

import FadeIn from "../common/FadeIn/FadeIn";
import ProgressBar from "../common/ProgressBar/ProgressBar";
import AboutArticle from "../AboutArticle/AboutArticle";
import about from "../../public/Static/About/AboutArticle";
import useWindowInnerWidth from "../../hooks/useWindowInnerWidth";
import useWindowInnerHeight from "../../hooks/useWindowInnerHeight";

function About() {
  const viewportWidth = useWindowInnerWidth(-1);
  const viewportHeight = useWindowInnerHeight(-1);
  const ratio = viewportWidth / viewportHeight;

  const articleTranslateYOffset =
    ratio > 1.95
      ? "-60.2%"
      : ratio > 1.9
      ? "-71.05%"
      : ratio > 1.7
      ? "-65%"
      : ratio >= 1.54
      ? "-64.8%"
      : ratio >= 0.95
      ? "-67%"
      : ratio > 0.55
      ? "-67%"
      : "-69%";

  return (
    <div id="About">
      <Controller>
        <Scene triggerHook="onLeave" duration="100%" pin>
          {(progress: number) => (
            <div>
              <div>
                <ProgressBar progress={progress} />
              </div>
              <section className={styles.aboutSection}>
                <div className={styles.topDim} />
                <div className={styles.textWrap}>
                  <FadeIn delay={0} duration={1000}>
                    <div className={styles.aboutTitle}>About Me.</div>
                  </FadeIn>
                </div>
                <Timeline totalProgress={progress} paused>
                  <Tween
                    from={{ transform: "translate3d(0,0,0)" }}
                    to={{
                      transform: `translate3d(0,${articleTranslateYOffset},0)`,
                    }}
                  >
                    <div className={styles.ArticleWrap}>
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
              </section>
            </div>
          )}
        </Scene>
      </Controller>
    </div>
  );
}

export default About;
