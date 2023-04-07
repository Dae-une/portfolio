import React, { FC } from "react";
import Image from "next/image";
import { ProjectType } from "../../types/type";
import * as styles from "./ProjectCard.css";

interface ProjectCardProps {
  margin: "left" | "right";
  project: ProjectType;
}

const ProjectCard: FC<ProjectCardProps> = ({ margin, project }) => {
  return (
    <div className={styles.Card({ margin })}>
      <Image src={`/Images/${project.param}.svg`} alt={project.title} fill />
    </div>
  );
};

export default ProjectCard;
