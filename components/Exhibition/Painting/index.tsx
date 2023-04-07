import Image from "next/image";
import React, { FC } from "react";
import { ProjectType } from "../../../types/type";
import DoneList from "../DoneList";
import StackList from "../StackList";
import * as styles from "./Painting.css";

interface PaintingProps {
  project: ProjectType;
}

const Painting: FC<PaintingProps> = ({ project }) => {
  return (
    <div className={styles.Flex}>
      <div className={styles.Frame}>
        <div className={styles.Layout}>
          <div className={styles.Header}>
            <div className={styles.Title}>{project.title}</div>
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
