/* eslint-disable react/prop-types */
import React from "react";
import * as styles from "./SliderArrows.css";
import LeftArrow from "../../../public/Images/left_arrow.svg";
import RightArrow from "../../../public/Images/right_arrow.svg";
import useHover from "../../../hooks/useHover";

export const PrevArrow = props => {
  const { onClick } = props;
  const [hoverRef, isHover] = useHover<HTMLButtonElement>();

  return (
    <button
      className={styles.LeftArrow({ isHover })}
      type="button"
      onClick={onClick}
      ref={hoverRef}
    >
      <LeftArrow width="50px" fill="#ffffff" />
    </button>
  );
};

export const NextArrow = props => {
  const { onClick } = props;
  const [hoverRef, isHover] = useHover<HTMLButtonElement>();

  return (
    <button
      className={styles.RightArrow({ isHover })}
      type="button"
      onClick={onClick}
      ref={hoverRef}
    >
      <RightArrow width="50px" fill="#ffffff" />
    </button>
  );
};
