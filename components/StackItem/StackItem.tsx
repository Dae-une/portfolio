import React from 'react';
import { motion } from 'framer-motion';
import * as styles from './styles.css';

const variants = {
  open: { height: 'auto' },
  close: { height: '0' },
};

const StackItem = ({ stack, reason, open, onClick, id }) => {
  return (
    <div className={styles.Items}>
      <div className={styles.QuestionWrapper}>
        <button className={styles.QuestionButton}>
          <p className={styles.Label}>{stack}</p>
          <div onClick={onClick}>버튼</div>
        </button>
      </div>
      <div className={styles.reasonWrap}>
        <motion.div variants={variants} initial="close" animate={open ? 'open' : 'close'}>
          <div className={styles.reason}>{reason}</div>
        </motion.div>
      </div>
    </div>
  );
};

export default StackItem;
