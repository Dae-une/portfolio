import React from "react";
import { motion } from "framer-motion";
import * as styles from "./styles.css";
import Chevron from "../../public/Images/chevron-down.svg";

const variants = {
  open: { height: "auto" },
  close: { height: "0" },
};
type Props = {
  stack: string;
  reason: string;
  open: boolean;
  onClick: (id: string) => void;
  id: string;
};

function StackItem({ stack, reason, open, onClick, id }: Props) {
  return (
    <div className={styles.Items}>
      <div className={styles.stackWrapper}>
        <div className={styles.stack} onClick={() => onClick?.(id)}>
          <p className={styles.Label}>{stack}</p>
          <div>
            <Chevron className={styles.chevron({ open })} />
          </div>
        </div>
      </div>
      <div className={styles.reasonWrap}>
        <motion.div
          variants={variants}
          initial="close"
          animate={open ? "open" : "close"}
        >
          <div className={styles.reason}>{reason}</div>
        </motion.div>
      </div>
    </div>
  );
}

export default StackItem;
