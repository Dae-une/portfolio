import React from "react";
import { Timeline, Tween } from "react-gsap";
import { Controller, Scene } from "react-scrollmagic";
import PROJECTS from "../../public/Static/Project/ProjectArticle";
import ProjectCard from "../ProjectCard";

import * as styles from "./styles.css";

function Project() {
  return (
    <Controller>
      <Scene duration={4000} pin triggerHook="onLeave">
        {(progress: number) => (
          <div id="Project" className={styles.ProjectSection}>
            <Timeline totalProgress={progress} paused>
              <Tween
                from={{
                  transform: `translate3d(0,0,0)`,
                }}
                to={{
                  transform: `translate3d(-50%,0,0)`,
                }}
              >
                <div className={styles.ProjectContainer}>
                  {PROJECTS.map((project, idx) => (
                    <ProjectCard
                      key={project.title}
                      project={project}
                      margin={idx % 2 !== 0 ? "left" : "right"}
                    />
                  ))}
                </div>
              </Tween>
            </Timeline>
          </div>
        )}
      </Scene>
    </Controller>
  );
}

export default Project;
