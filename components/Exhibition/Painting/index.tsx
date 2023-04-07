import Image from "next/image";
import React, { FC } from "react";
import Link from "next/link";
import { ProjectType } from "../../../types/type";
import DoneList from "../DoneList";
import StackList from "../StackList";
import * as styles from "./Painting.css";
import GitHub from "../../../public/Images/github.svg";
import WebSite from "../../../public/Images/website.svg";

interface PaintingProps {
  project: ProjectType;
}

const Painting: FC<PaintingProps> = ({ project }) => {
  return (
    <div className={styles.Container}>
      <div className={styles.Frame}>
        <div className={styles.Layout}>
          <div className={styles.Header}>
            <div className={styles.Title}>
              <div className={styles.Flex}>
                <span>{project.title}</span>
                <div style={{ display: "flex", gap: "1rem" }}>
                  {project.links.github && (
                    <Link
                      target="_blank"
                      rel="noopener"
                      href={project.links.github}
                    >
                      <GitHub />
                    </Link>
                  )}
                  {project.links.website && (
                    <Link
                      target="_blank"
                      rel="noopener"
                      href={project.links.website}
                    >
                      <WebSite />
                    </Link>
                  )}
                </div>
              </div>
            </div>
            <hr />
            <div className={styles.Desc}>{project.desc}</div>
          </div>

          <div className={styles.Article}>
            <div className={styles.Texts}>
              <DoneList done={project.done} />
              <StackList stacks={project.stacks} />
            </div>
            <div className={styles.Image}>
              <Image
                src={`/Images/${project.param}.svg`}
                fill
                alt={project.title}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Painting;
