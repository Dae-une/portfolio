import React, { FC } from "react";
import * as styles from "./StackList.css";

interface StackListProps {
  stacks: string[];
}

const StackList: FC<StackListProps> = ({ stacks }) => {
  return (
    <div className={styles.Layout}>
      <div className={styles.Flex}>
        <div className={styles.Circle} />
        <div className={styles.Line} />
        <div className={styles.Circle} />
      </div>
      <div>
        <div className={styles.Title}>Stacks</div>
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {stacks.map(item => (
            <div className={styles.SubTitle} key={item}>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StackList;
