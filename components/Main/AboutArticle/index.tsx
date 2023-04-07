import React from "react";
import * as styles from "./style.css";
import FadeIn from "../common/FadeIn";

type Props = {
  title: string;
  desc: string;
};

function AboutArticle({ title, desc }: Props) {
  return (
    <FadeIn duration={600} delay={0}>
      <div className={styles.Layout}>
        <div className={styles.Title}>{title}</div>
        <div className={styles.Desc}>{desc}</div>
      </div>
    </FadeIn>
  );
}

export default AboutArticle;
