import React, { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import * as styles from "./ProjectCard.css";
import { ProjectType } from "../../../types/type";

interface ProjectCardProps {
  margin: "left" | "right";
  project: ProjectType;
}

const ProjectCard: FC<ProjectCardProps> = ({ margin, project }) => {
  return (
    <div className={styles.Card({ margin })}>
      <Link
        href={{
          pathname: "/exhibition",
          query: project.param,
        }}
      >
        <Image src={`/Images/${project.param}.svg`} alt={project.title} fill />
      </Link>
    </div>
  );
};

export default ProjectCard;
