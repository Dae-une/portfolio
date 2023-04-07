import React, { FC } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import * as styles from "./ProjectCard.css";
import { ProjectType } from "../../../types/type";

interface ProjectCardProps {
  margin: "left" | "right";
  project: ProjectType;
}

const ProjectCard: FC<ProjectCardProps> = ({ margin, project }) => {
  const router = useRouter();
  const onScrollMove = () => {
    sessionStorage.setItem("scroll", `${window.scrollY}`);
    router.push({
      pathname: "/exhibition",
      query: { project: project.param },
    });
  };

  return (
    <div className={styles.Card({ margin })} onClick={onScrollMove}>
      <Image src={`/Images/${project.param}.svg`} alt={project.title} fill />
    </div>
  );
};

export default ProjectCard;
