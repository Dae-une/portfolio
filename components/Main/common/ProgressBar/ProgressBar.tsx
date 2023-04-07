import React from "react";
import { Timeline, Tween } from "react-gsap";
import * as style from "./styles.css";

type Props = {
  progress: number;
};
function ProgressBar({ progress }: Props) {
  return (
    <div className={style.ProgressBar}>
      <Timeline totalProgress={progress} paused>
        <Tween from={{ width: "0%" }} to={{ width: "100%" }}>
          <div className={style.Progress} />
        </Tween>
      </Timeline>
    </div>
  );
}

export default ProgressBar;
