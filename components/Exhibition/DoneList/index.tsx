import React, { FC } from "react";
import { DoneType } from "../../../types/type";
import * as styles from "./DoneList.css";

interface DoneListProps {
  done: DoneType[];
}

const DoneList: FC<DoneListProps> = ({ done }) => {
  return (
    <div className={styles.Layout}>
      <div className={styles.Flex}>
        <div className={styles.Circle} />
        <div className={styles.Line} />
        <div className={styles.Circle} />
      </div>
      <div>
        <div className={styles.Title}>What I Done</div>
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {done.map(item => (
            <div className={styles.SubTitle} key={item.title}>
              <span>{item.title}</span>
              <div className={styles.Desc}>
                {item.desc?.map(desc => (
                  <span key={desc}>{desc}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DoneList;
