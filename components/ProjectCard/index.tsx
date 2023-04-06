import React, { FC } from "react";

import { ProjectType } from "../../types/type";
import * as styles from "./ProjectCard.css";

interface ProjectCardProps {
  margin: "left" | "right";
  project: ProjectType;
}

const ProjectCard: FC<ProjectCardProps> = ({ margin, project }) => {
  return (
    <div className={styles.Card({ margin })}>
      <div className={styles.Banner}>{project.image}</div>
    </div>
  );
};

export default ProjectCard;
